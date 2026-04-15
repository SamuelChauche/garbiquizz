import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';
import {
  currentQuestion,
  answerCurrent,
  next,
  getDisplayChoices,
} from '@/quiz.js';
import { ILLUSTRATIONS } from '@/illustrations.js';
import { cn } from '@/lib/utils';

const TIER_BADGE = {
  1: 'border-icy_aqua-300 text-icy_aqua-200 bg-icy_aqua-800',
  2: 'border-light_blue-300 text-light_blue-200 bg-light_blue-800',
  3: 'border-powder_blush-300 text-powder_blush-200 bg-powder_blush-800',
  4: 'border-blue_slate-400 text-eggshell bg-blue_slate',
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
  const inputRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    setFeedback(null);
    setTextValue('');
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [q.id]);

  useEffect(() => {
    if (feedback && nextBtnRef.current) {
      setTimeout(() => nextBtnRef.current?.focus(), 80);
    }
  }, [feedback]);

  function handleAnswer(value) {
    if (feedback) return;
    const result = answerCurrent(session, value);
    setFeedback({ ...result, given: value });
  }

  function handleNext() {
    const done = next(session);
    if (done) onComplete();
  }

  const progressValue = ((index + (feedback ? 1 : 0)) / total) * 100;
  const isLast = index + 1 >= total;

  const Illustration = q.illustration && ILLUSTRATIONS[q.illustration];

  return (
    <section key={version + ':' + q.id} className="grid gap-6 animate-fade-in">
      <Progress value={progressValue} />

      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <span className="font-semibold text-foreground">
          Question {index + 1} / {total}
        </span>
        <Badge variant="outline" className={cn('border', TIER_BADGE[q.difficulty])}>
          Palier {q.difficulty} · {DIFFICULTY_LABELS[q.difficulty]}
        </Badge>
        <Badge variant="outline">{CATEGORIES[q.category]}</Badge>
      </div>

      {Illustration && (
        <Card className="overflow-hidden">
          <div
            className="p-4 flex justify-center bg-gradient-to-b from-icy_aqua-800/60 to-card"
            dangerouslySetInnerHTML={{ __html: Illustration({ highlight: q.highlight }) }}
          />
        </Card>
      )}

      <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-foreground text-balance">
        {q.question}
      </h2>

      {(q.type === 'mcq4' || q.type === 'mcq3') && (
        <div className="grid gap-3">
          {(choices || []).map((choice, i) => {
            const isCorrect = feedback && choice === q.answer;
            const isWrong = feedback && choice === feedback.given && choice !== q.answer;
            return (
              <button
                key={choice + i}
                type="button"
                disabled={!!feedback}
                onClick={() => handleAnswer(choice)}
                className={cn(
                  'group w-full flex items-center gap-4 rounded-xl border bg-card px-5 py-4 text-left text-base transition-all',
                  'hover:border-primary hover:translate-x-0.5 hover:bg-card',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  'disabled:cursor-default disabled:opacity-90',
                  !feedback && 'border-border',
                  isCorrect && 'border-icy_aqua-200 bg-icy_aqua-800/70',
                  isWrong && 'border-powder_blush-300 bg-powder_blush-800/70',
                )}
              >
                <span
                  className={cn(
                    'inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold flex-shrink-0',
                    'bg-muted text-foreground',
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
            const v = textValue.trim();
            if (!v || feedback) return;
            handleAnswer(v);
          }}
          className="flex flex-col sm:flex-row gap-3"
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
          <Button type="submit" disabled={!!feedback || !textValue.trim()}>
            Valider
          </Button>
        </form>
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
    </section>
  );
}
