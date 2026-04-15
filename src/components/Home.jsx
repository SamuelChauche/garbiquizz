import { Anchor, Compass, LifeBuoy, Sailboat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { boatOverview } from '@/illustrations.js';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';

const TIER_DESCRIPTIONS = {
  1: 'QCM 4 choix · vocabulaire de base',
  2: 'QCM 3 choix · termes intermédiaires',
  3: 'QCM 3 choix · distracteurs piégeux',
  4: 'Saisie texte · termes experts',
};

const CATEGORY_ICONS = {
  'coque-pont': Sailboat,
  'greement-voilure': Compass,
  'accastillage-manoeuvre': Anchor,
  'interieur-securite': LifeBuoy,
};

export function Home({ onStart }) {
  return (
    <section className="grid gap-10 animate-fade-in">
      <Card className="overflow-hidden">
        <div
          className="px-6 pt-6 pb-2 bg-gradient-to-b from-icy_aqua-800 via-card to-card"
          dangerouslySetInnerHTML={{ __html: boatOverview() }}
        />
      </Card>

      <header className="grid gap-4">
        <Badge variant="outline" className="w-fit">
          6 mètres · sloop bermudien
        </Badge>
        <h1 className="font-serif font-medium text-balance text-[clamp(2.6rem,1.4rem+5vw,5.2rem)] leading-[0.95] tracking-tight text-foreground">
          Quiz <span className="italic text-blue_slate">Amel Garbi</span>
        </h1>
        <p className="font-serif italic text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
          Apprends le vocabulaire de chaque partie d'un voilier 6 mètres. Cinquante questions,
          quatre paliers de difficulté, du matelot débutant au skipper.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((tier) => {
          const accent = {
            1: 'before:bg-icy_aqua-300',
            2: 'before:bg-light_blue-300',
            3: 'before:bg-powder_blush-400',
            4: 'before:bg-blue_slate',
          }[tier];
          return (
            <Card
              key={tier}
              className={`relative pl-5 pr-4 py-4 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:w-1 ${accent}`}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Palier {tier}
              </p>
              <p className="font-serif text-xl font-medium text-foreground mt-0.5">
                {DIFFICULTY_LABELS[tier]}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                {TIER_DESCRIPTIONS[tier]}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 pt-2 border-t border-dashed border-border">
        {Object.entries(CATEGORIES).map(([key, label]) => {
          const Icon = CATEGORY_ICONS[key];
          return (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-foreground"
            >
              <Icon className="h-4 w-4 text-blue_slate" strokeWidth={1.6} />
              {label}
            </span>
          );
        })}
      </div>

      <div className="flex justify-start">
        <Button size="lg" onClick={onStart} autoFocus>
          Commencer le quiz
          <span aria-hidden>→</span>
        </Button>
      </div>
    </section>
  );
}
