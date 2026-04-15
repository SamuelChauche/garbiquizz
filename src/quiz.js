import { QUESTIONS } from './data/questions.js';

const PER_TIER = 5;
const TIERS = [1, 2, 3, 4];

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickFromTier(tier) {
  const pool = QUESTIONS.filter((q) => q.difficulty === tier);
  return shuffle(pool).slice(0, PER_TIER);
}

export function createSession() {
  const questions = TIERS.flatMap((t) => pickFromTier(t));
  return {
    questions,
    current: 0,
    answers: [], // { questionId, given, correct }
  };
}

export function currentQuestion(session) {
  return session.questions[session.current];
}

export function progress(session) {
  return {
    index: session.current,
    total: session.questions.length,
    tier: currentQuestion(session)?.difficulty ?? null,
  };
}

// Normalise une réponse texte : minuscule, sans accents, sans articles, trim.
export function normalize(text) {
  if (text == null) return '';
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/^(le |la |les |l'|un |une |des )/, '')
    .replace(/[.,;:!?]/g, '')
    .trim();
}

function shuffleChoicesFor(question) {
  if (!question.choices) return null;
  return shuffle(question.choices);
}

// Retourne les choix dans un ordre aléatoire stable pour le rendu courant.
// On ré-shuffle à chaque appel pour simplifier ; l'UI conserve la version affichée.
export function getDisplayChoices(question) {
  return shuffleChoicesFor(question);
}

export function answerCurrent(session, given) {
  const q = currentQuestion(session);
  const correct = checkAnswer(q, given);
  session.answers.push({
    questionId: q.id,
    category: q.category,
    difficulty: q.difficulty,
    given,
    correct,
  });
  return { correct, expected: q.answer, explanation: q.explanation };
}

function checkAnswer(question, given) {
  if (given == null) return false;
  if (question.type === 'mcq4' || question.type === 'mcq3') {
    return normalize(given) === normalize(question.answer);
  }
  // fill / text
  const candidates = [question.answer, ...(question.correctAnswers || [])];
  const normalizedGiven = normalize(given);
  return candidates.some((c) => normalize(c) === normalizedGiven);
}

export function next(session) {
  session.current += 1;
  return session.current >= session.questions.length;
}

export function isDone(session) {
  return session.current >= session.questions.length;
}

export function getScore(session) {
  const total = session.questions.length;
  const correct = session.answers.filter((a) => a.correct).length;
  const byCategory = {};
  const byTier = {};
  for (const a of session.answers) {
    byCategory[a.category] = byCategory[a.category] || { total: 0, correct: 0 };
    byCategory[a.category].total += 1;
    if (a.correct) byCategory[a.category].correct += 1;
    byTier[a.difficulty] = byTier[a.difficulty] || { total: 0, correct: 0 };
    byTier[a.difficulty].total += 1;
    if (a.correct) byTier[a.difficulty].correct += 1;
  }
  return { total, correct, percent: Math.round((correct / total) * 100), byCategory, byTier };
}

export function getMistakes(session) {
  return session.answers
    .filter((a) => !a.correct)
    .map((a) => {
      const q = QUESTIONS.find((x) => x.id === a.questionId);
      return { question: q, given: a.given };
    });
}
