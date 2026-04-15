import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';
import {
  currentQuestion,
  answerCurrent,
  next,
  getDisplayChoices,
} from '@/quiz.js';
import { ILLUSTRATIONS } from '@/illustrations.js';
import { cn } from '@/lib/utils';

const TIER_ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV' };

const FALLBACK_ILLUSTRATION = {
  'coque-pont': 'boat_overview',
  'greement-voilure': 'rigging',
  'accastillage-manoeuvre': 'cockpit',
  'interieur-securite': 'nav_lights',
};

export function Quiz({ session, onComplete, version }) {
  const q = currentQuestion(session);
  const total = session.questions.length;
  const index = session.current;

  // Shuffle choices once per question
  const choices = useMemo(() => {
    if (q.type === 'mcq4' || q.type === 'mcq3') return getDisplayChoices(q);
    return null;
  }, [q.id]);

  const [feedback, setFeedback] = useState(null); // { correct, expected, explanation, given }
  const [textValue, setTextValue] = useState('');
  const [selected, setSelected] = useState(null); // pre-validation choice
  const [tick, setTick] = useState(0); // forces re-render after session.current mutation
  const inputRef = useRef(null);
  const nextBtnRef = useRef(null);
  const validateBtnRef = useRef(null);

  useEffect(() => {
    setFeedback(null);
    setTextValue('');
    setSelected(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [q.id]);

  useEffect(() => {
    if (feedback && nextBtnRef.current) {
      setTimeout(() => nextBtnRef.current?.focus(), 80);
    }
  }, [feedback]);

  useEffect(() => {
    if (selected && validateBtnRef.current && !feedback) {
      validateBtnRef.current.focus();
    }
  }, [selected]);

  function handleAnswer(value) {
    if (feedback) return;
    const result = answerCurrent(session, value);
    setFeedback({ ...result, given: value });
  }

  function handleValidate() {
    if (feedback) return;
    if (q.type === 'mcq4' || q.type === 'mcq3') {
      if (!selected) return;
      handleAnswer(selected);
    } else {
      const v = textValue.trim();
      if (!v) return;
      handleAnswer(v);
    }
  }

  function handleNext() {
    const done = next(session);
    if (done) {
      onComplete();
      return;
    }
    setFeedback(null);
    setTextValue('');
    setSelected(null);
    setTick((t) => t + 1);
  }

  const progressValue = ((index + (feedback ? 1 : 0)) / total) * 100;
  const isLast = index + 1 >= total;

  const illuKey = q.illustration || FALLBACK_ILLUSTRATION[q.category];
  const Illustration = illuKey && ILLUSTRATIONS[illuKey];

  const content = (
    <div className="grid gap-5">
      <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-foreground text-balance">
        {q.question}
      </h2>

      {(q.type === 'mcq4' || q.type === 'mcq3') && (
        <div className="grid gap-2.5">
          {(choices || []).map((choice, i) => {
            const isSelected = !feedback && selected === choice;
            const isCorrect = feedback && choice === q.answer;
            const isWrong = feedback && choice === feedback.given && choice !== q.answer;
            return (
              <button
                key={choice + i}
                type="button"
                disabled={!!feedback}
                onClick={() => setSelected(choice)}
                aria-pressed={isSelected}
                className={cn(
                  'group w-full flex items-center gap-3 rounded-xl border bg-card px-4 py-3 text-left text-base transition-all',
                  'hover:border-primary hover:translate-x-0.5',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'disabled:cursor-default disabled:opacity-90',
                  !feedback && !isSelected && 'border-border',
                  isSelected && 'border-blue_slate bg-light_blue-800/70 ring-2 ring-blue_slate/30',
                  isCorrect && 'border-icy_aqua-200 bg-icy_aqua-800/70',
                  isWrong && 'border-powder_blush-300 bg-powder_blush-800/70',
                )}
              >
                <span
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold flex-shrink-0',
                    'bg-muted text-foreground',
                    isSelected && 'bg-blue_slate text-eggshell',
                    isCorrect && 'bg-icy_aqua-200 text-eggshell',
                    isWrong && 'bg-powder_blush-300 text-eggshell',
                  )}
                >
                  {isCorrect ? <Check className="h-4 w-4" /> : isWrong ? <X className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 text-foreground">{choice}</span>
              </button>
            );
          })}
        </div>
      )}

      {(q.type === 'fill' || q.type === 'text') && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleValidate();
          }}
          className="flex flex-col gap-3"
        >
          <Input
            ref={inputRef}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            disabled={!!feedback}
            placeholder="Tape ta réponse…"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      )}

      {!feedback && (
        <div className="flex justify-end">
          <Button
            ref={validateBtnRef}
            size="lg"
            onClick={handleValidate}
            disabled={
              (q.type === 'mcq4' || q.type === 'mcq3')
                ? !selected
                : !textValue.trim()
            }
          >
            Valider ma réponse
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {feedback && (
        <Card
          className={cn(
            'border-l-4 animate-slide-up',
            feedback.correct ? 'border-l-icy_aqua-200' : 'border-l-powder_blush-300',
          )}
        >
          <CardContent className="pt-6 grid gap-3">
            <p
              className={cn(
                'font-serif text-xl font-medium flex items-center gap-2',
                feedback.correct ? 'text-icy_aqua-200' : 'text-powder_blush-200',
              )}
            >
              {feedback.correct ? (
                <>
                  <Check className="h-5 w-5" />
                  Bonne réponse !
                </>
              ) : (
                <>
                  <X className="h-5 w-5" />
                  La bonne réponse était : <em className="not-italic font-semibold">{feedback.expected}</em>
                </>
              )}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{feedback.explanation}</p>
            <div className="flex justify-end pt-2">
              <Button ref={nextBtnRef} onClick={handleNext} variant="default">
                {isLast ? 'Voir le score' : 'Question suivante'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const tierRoman = TIER_ROMAN[q.difficulty];

  return (
    <section key={version + ':' + q.id} className="grid gap-6 animate-fade-in">
      {/* MASTHEAD éditorial */}
      <header className="grid gap-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="eyebrow">
            Question {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            {CATEGORIES[q.category]}
          </span>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-end gap-4 pb-2">
          <span className="numeral text-[clamp(2.8rem,1.4rem+5vw,5rem)] leading-[0.85] text-blue_slate tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="grid gap-1 pb-2">
            <span className="font-sans text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              Palier {tierRoman} · {DIFFICULTY_LABELS[q.difficulty]}
            </span>
            <Progress value={progressValue} />
          </div>
        </div>
        <hr className="editorial-rule editorial-rule-strong" />
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10 items-start">
        <figure className="m-0 lg:sticky lg:top-6 self-start">
          <div
            className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(38,40,46,0.05),0_25px_60px_-30px_rgba(38,40,46,0.35)]"
          >
            <div
              className="aspect-[4/3] flex items-center justify-center p-6 bg-gradient-to-br from-icy_aqua-800/70 via-card to-light_blue-800/40 [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:w-auto [&>svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: Illustration({ highlight: q.highlight }) }}
            />
          </div>
          <figcaption className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground text-right">
            Pl. {tierRoman} — {CATEGORIES[q.category]}
          </figcaption>
        </figure>
        {content}
      </div>
    </section>
  );
}
