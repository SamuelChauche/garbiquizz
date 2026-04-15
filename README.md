# garbiquizz

Quiz pour apprendre le vocabulaire d'un voilier 6 mètres type **Amel Garbi**
(sloop bermudien quillard, années 1980).

## Format

- **50 questions** dans la banque, **20 par session** (5 par palier).
- **4 paliers de difficulté** progressifs :
  1. *Initié* — QCM 4 choix, vocabulaire de base
  2. *Apprenti matelot* — QCM 3 choix, termes intermédiaires
  3. *Équipier confirmé* — QCM 3 choix avec distracteurs piégeux
  4. *Skipper* — saisie texte libre / texte à compléter
- **4 catégories** : coque & pont, gréement & voilure, accastillage & manœuvre, intérieur & sécurité.
- Schémas SVG dessinés à la main pour illustrer le bateau, les voiles, le gréement et les feux de navigation.

## Stack

- React 18 + Vite
- Tailwind CSS 3 + composants façon shadcn/ui
- Palette custom : powder_blush, eggshell, icy_aqua, light_blue, blue_slate
- `lucide-react` pour les icônes
- Aucune dépendance backend

## Démarrer

```bash
npm install
npm run dev    # http://127.0.0.1:5173
npm run build  # bundle de prod dans dist/
```

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** à chaque push sur `main`
via le workflow `.github/workflows/deploy.yml`.

URL : <https://samuelchauche.github.io/garbiquizz/>

### Activation initiale (à faire une seule fois)

1. Aller dans **Settings → Pages** sur le repo GitHub.
2. Sous *Build and deployment*, choisir **Source : GitHub Actions**.
3. Pousser sur `main` — le workflow build et déploie tout seul.
4. La première build prend ~1 min, l'URL apparaît dans l'onglet Actions.

### Comment ça marche

- `vite.config.js` applique `base: '/garbiquizz/'` uniquement en build prod (le dev
  reste sur `/`).
- Le workflow `deploy.yml` install les deps, run `npm run build`, upload `dist/`
  comme artefact, puis le job `deploy` publie via `actions/deploy-pages@v4`.
- Aucun secret à configurer.

## Structure

```
src/
├── main.jsx              # entrée React
├── App.jsx               # routing entre Home / Quiz / Results
├── index.css             # Tailwind + tokens shadcn
├── quiz.js               # logique pure (sessions, scoring, normalisation)
├── illustrations.js      # SVG schematics du voilier
├── data/
│   └── questions.js      # banque des 50 questions
├── lib/
│   └── utils.js          # cn() helper (clsx + tailwind-merge)
└── components/
    ├── Home.jsx
    ├── Quiz.jsx
    ├── Results.jsx
    └── ui/               # composants shadcn-style
        ├── button.jsx
        ├── card.jsx
        ├── input.jsx
        ├── progress.jsx
        └── badge.jsx
```
