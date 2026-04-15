import { ArrowRight, Anchor, Compass, LifeBuoy, Sailboat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { boatOverview, categoryIcon } from '@/illustrations.js';
import { CATEGORIES, DIFFICULTY_LABELS } from '@/data/questions.js';

const TIER_DESCRIPTIONS = {
  1: 'QCM 4 choix · vocabulaire de base',
  2: 'QCM 3 choix · termes intermédiaires',
  3: 'QCM 3 choix · distracteurs piégeux',
  4: 'Saisie texte · termes experts',
};

const TIER_ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV' };

const CATEGORY_ICONS = {
  'coque-pont': Sailboat,
  'greement-voilure': Compass,
  'accastillage-manoeuvre': Anchor,
  'interieur-securite': LifeBuoy,
};

export function Home({ onStart }) {
  return (
    <section className="grid gap-14 animate-fade-in">
      {/* MASTHEAD */}
      <header className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12 items-end pt-2">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <span className="eyebrow">N° I — Vocabulaire de mer</span>
            <h1 className="font-serif text-balance leading-[0.85] tracking-tight text-foreground">
              <span className="block text-[clamp(1.1rem,0.7rem+1vw,1.5rem)] font-sans uppercase tracking-[0.32em] text-blue_slate-300 mb-3">
                Quiz
              </span>
              <span className="block text-[clamp(3.4rem,1.8rem+7vw,7.5rem)] font-medium">
                Amel <em className="italic text-blue_slate font-normal">Garbi</em>
              </span>
            </h1>
          </div>
          <hr className="editorial-rule editorial-rule-strong" />
          <p className="font-serif italic text-xl md:text-2xl text-muted-foreground max-w-[42ch] leading-snug text-pretty">
            Un petit traité visuel pour apprendre, pièce par pièce, le vocabulaire d'un sloop bermudien
            de six mètres. Cinquante questions, quatre paliers, du pont au gréement.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Button size="lg" onClick={onStart} autoFocus className="group">
              Commencer le quiz
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
              20 questions par session · 4 paliers
            </span>
          </div>
        </div>

        {/* Hero illustration, décalée et affleurant le bord */}
        <div
          className="relative -mx-2 lg:mx-0 lg:translate-x-6 lg:-translate-y-3"
          aria-hidden="true"
        >
          <div className="absolute inset-x-6 top-6 bottom-2 bg-light_blue-800/60 rounded-3xl rotate-[-1.5deg] -z-10" />
          <div
            className="bg-card border border-border/60 rounded-2xl p-5 shadow-[0_2px_4px_rgba(38,40,46,0.06),0_30px_60px_-30px_rgba(38,40,46,0.4)] [&>svg]:w-full [&>svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: boatOverview() }}
          />
        </div>
      </header>

      {/* SOMMAIRE — paliers en table des matières */}
      <section className="grid gap-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Quatre <em>paliers</em>, du matelot au skipper
          </h2>
          <span className="hidden md:inline font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Sommaire
          </span>
        </div>
        <hr className="editorial-rule editorial-rule-strong" />
        <ol className="grid">
          {[1, 2, 3, 4].map((tier) => (
            <li
              key={tier}
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-5 border-b border-border last:border-b-0"
            >
              <span className="numeral text-3xl md:text-4xl text-blue_slate min-w-[2.5ch] tabular-nums">
                {TIER_ROMAN[tier]}
              </span>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-tight">
                  {DIFFICULTY_LABELS[tier]}
                </p>
                <p className="font-sans text-xs md:text-sm uppercase tracking-[0.14em] text-muted-foreground mt-1">
                  {TIER_DESCRIPTIONS[tier]}
                </p>
              </div>
              <span className="font-sans text-xs uppercase tracking-[0.16em] text-muted-foreground tabular-nums">
                5 questions
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* CHAPITRES — catégories couvertes */}
      <section className="grid gap-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Quatre <em>chapitres</em>
          </h2>
          <span className="hidden md:inline font-sans text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Couverture
          </span>
        </div>
        <hr className="editorial-rule editorial-rule-strong" />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {Object.entries(CATEGORIES).map(([key, label], i) => {
            const Icon = CATEGORY_ICONS[key];
            return (
              <div
                key={key}
                className="flex items-center gap-4 py-3 border-b border-border/60"
              >
                <span className="numeral text-xl text-blue_slate-300 tabular-nums w-8">
                  0{i + 1}
                </span>
                <Icon className="h-5 w-5 text-blue_slate flex-shrink-0" strokeWidth={1.5} />
                <span className="font-serif text-lg text-foreground flex-1">{label}</span>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
