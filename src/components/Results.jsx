import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';
import { getScore, getMistakes } from '@/quiz.js';

const TIER_ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV' };

function quoteFor(percent) {
  if (percent === 100) return 'Sans-faute. Tu peux prendre la barre.';
  if (percent >= 85) return 'Excellent. Tu connais ton bateau.';
  if (percent >= 70) return "Très bon niveau d'équipier.";
  if (percent >= 50) return "Encore quelques tours d'écoute et c'est dans la poche.";
  return 'Reprends les fondamentaux et retente une session.';
}

function ScoreRow({ label, eyebrow, correct, total }) {
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-4 border-b border-border">
      <span className="numeral text-2xl text-blue_slate-300 tabular-nums w-10">
        {eyebrow}
      </span>
      <div className="grid gap-1">
        <p className="font-serif text-lg md:text-xl font-medium text-foreground leading-tight">
          {label}
        </p>
        <div className="h-1 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-icy_aqua via-light_blue to-blue_slate transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <span className="numeral text-xl text-foreground tabular-nums">
        {correct}<span className="text-border mx-1">/</span>{total}
      </span>
    </div>
  );
}

export function Results({ session, onRestart }) {
  const score = getScore(session);
  const mistakes = getMistakes(session);

  return (
    <section className="grid gap-14 animate-fade-in">
      {/* MASTHEAD */}
      <header className="grid gap-6">
        <span className="eyebrow">Verdict — Session terminée</span>
        <hr className="editorial-rule editorial-rule-strong" />

        <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-8 items-end">
          <div>
            <p className="numeral text-[clamp(5rem,3rem+10vw,10rem)] leading-[0.85] text-foreground tabular-nums">
              <span className="text-blue_slate">{score.correct}</span>
              <span className="text-border mx-3 font-light">/</span>
              <span>{score.total}</span>
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground mt-3">
              soit <span className="text-foreground not-italic numeral">{score.percent}</span> %
            </p>
          </div>
          <p className="font-serif italic text-xl md:text-2xl text-muted-foreground text-pretty leading-snug max-w-md">
            « {quoteFor(score.percent)} »
          </p>
        </div>
      </header>

      {/* BREAKDOWN PALIERS */}
      <section className="grid gap-3">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
            Par <em>palier</em>
          </h2>
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Détail
          </span>
        </div>
        <hr className="editorial-rule editorial-rule-strong" />
        <div>
          {[1, 2, 3, 4].map((d) => {
            const t = score.byTier[d] || { total: 0, correct: 0 };
            return (
              <ScoreRow
                key={d}
                eyebrow={TIER_ROMAN[d]}
                label={DIFFICULTY_LABELS[d]}
                correct={t.correct}
                total={t.total}
              />
            );
          })}
        </div>
      </section>

      {/* BREAKDOWN CATEGORIES */}
      <section className="grid gap-3">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
            Par <em>chapitre</em>
          </h2>
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Couverture
          </span>
        </div>
        <hr className="editorial-rule editorial-rule-strong" />
        <div>
          {Object.entries(CATEGORIES).map(([key, label], i) => {
            const c = score.byCategory[key] || { total: 0, correct: 0 };
            return (
              <ScoreRow
                key={key}
                eyebrow={`0${i + 1}`}
                label={label}
                correct={c.correct}
                total={c.total}
              />
            );
          })}
        </div>
      </section>

      {/* MISTAKES */}
      {mistakes.length > 0 && (
        <section className="grid gap-3">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              {mistakes.length} <em>erreur{mistakes.length > 1 ? 's' : ''}</em> à revoir
            </h2>
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Errata
            </span>
          </div>
          <hr className="editorial-rule editorial-rule-strong" />
          <div className="grid gap-6">
            {mistakes.map((m, i) => (
              <article key={i} className="grid gap-2 py-4 border-b border-border last:border-b-0">
                <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Question {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-serif text-xl md:text-2xl font-medium text-foreground leading-snug text-balance">
                  {m.question.question}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Ta réponse : <em className="italic text-powder_blush-200">{m.given || '(vide)'}</em>
                </p>
                <p className="font-sans text-sm text-foreground">
                  Réponse attendue : <strong className="text-icy_aqua-200">{m.question.answer}</strong>
                </p>
                <p className="font-serif italic text-base text-muted-foreground mt-1 max-w-2xl">
                  {m.question.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <div className="flex justify-center pt-6">
        <Button size="lg" onClick={onRestart} autoFocus className="group">
          <RefreshCw className="h-4 w-4 transition-transform group-hover:-rotate-90" />
          Rejouer une session
        </Button>
      </div>
    </section>
  );
}
