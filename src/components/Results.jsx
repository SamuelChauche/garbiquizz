import { RefreshCw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';
import { getScore, getMistakes } from '@/quiz.js';

function quoteFor(percent) {
  if (percent === 100) return 'Sans-faute. Tu peux prendre la barre.';
  if (percent >= 85) return 'Excellent. Tu connais ton bateau.';
  if (percent >= 70) return "Très bon niveau d'équipier.";
  if (percent >= 50) return "Encore quelques tours d'écoute et c'est dans la poche.";
  return 'Reprends les fondamentaux et retente une session.';
}

export function Results({ session, onRestart }) {
  const score = getScore(session);
  const mistakes = getMistakes(session);

  return (
    <section className="grid gap-8 animate-fade-in">
      <Card className="text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-icy_aqua-800/70 via-transparent to-transparent pointer-events-none" />
        <CardHeader className="relative items-center pt-12">
          <Badge variant="outline" className="mx-auto">
            <Trophy className="h-3 w-3 mr-1" />
            Résultat final
          </Badge>
          <div className="font-serif text-[clamp(3.5rem,2rem+8vw,7rem)] font-medium leading-none mt-4 text-foreground">
            <span className="text-blue_slate">{score.correct}</span>
            <span className="text-border mx-2">/</span>
            <span>{score.total}</span>
          </div>
          <p className="font-serif italic text-2xl text-muted-foreground mt-2">
            {score.percent} %
          </p>
          <p className="font-serif italic text-base text-muted-foreground mt-3 max-w-md mx-auto">
            {quoteFor(score.percent)}
          </p>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Détail par palier</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {[1, 2, 3, 4].map((d) => {
            const t = score.byTier[d] || { total: 0, correct: 0 };
            const pct = t.total ? Math.round((t.correct / t.total) * 100) : 0;
            return (
              <div key={d} className="grid grid-cols-[minmax(120px,1.4fr)_2fr_auto] items-center gap-3 text-sm">
                <span className="text-foreground">
                  Palier {d} · {DIFFICULTY_LABELS[d]}
                </span>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-icy_aqua via-light_blue to-blue_slate transition-[width] duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="tabular-nums text-muted-foreground text-xs">
                  {t.correct}/{t.total}
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Détail par catégorie</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {Object.entries(CATEGORIES).map(([key, label]) => {
            const c = score.byCategory[key] || { total: 0, correct: 0 };
            const pct = c.total ? Math.round((c.correct / c.total) * 100) : 0;
            return (
              <div key={key} className="grid grid-cols-[minmax(140px,1.4fr)_2fr_auto] items-center gap-3 text-sm">
                <span className="text-foreground">{label}</span>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-icy_aqua via-light_blue to-blue_slate transition-[width] duration-700 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="tabular-nums text-muted-foreground text-xs">
                  {c.correct}/{c.total}
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {mistakes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Revoir mes {mistakes.length} erreur{mistakes.length > 1 ? 's' : ''}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {mistakes.map((m, i) => (
              <div
                key={i}
                className="grid gap-1.5 rounded-xl border border-border bg-card/60 p-4"
              >
                <p className="font-serif text-base font-medium text-foreground">
                  {m.question.question}
                </p>
                <p className="text-sm text-muted-foreground">
                  Ta réponse : <em className="italic">{m.given || '(vide)'}</em>
                </p>
                <p className="text-sm text-foreground">
                  Réponse attendue : <strong className="text-icy_aqua-200">{m.question.answer}</strong>
                </p>
                <p className="text-xs text-muted-foreground italic mt-1">
                  {m.question.explanation}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center">
        <Button size="lg" onClick={onRestart} autoFocus>
          <RefreshCw className="h-4 w-4" />
          Rejouer une session
        </Button>
      </div>
    </section>
  );
}
