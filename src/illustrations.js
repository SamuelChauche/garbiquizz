// SVG schematics drawn by hand. Each function returns an SVG string.
// Style éditorial maritime : encre marine sur papier crème, accents laiton.
// Toutes les illustrations acceptent { highlight } pour colorer la pièce concernée.

const STROKE = '#0e2235';
const SAIL = '#fbf6e8';
const HULL = '#0e2235';
const ACCENT = '#1b9179'; // teal — la pièce mise en avant
const ACCENT_SOFT = '#b8f2e6';
const WATER = '#aed9e0';
const WARN = '#c43d3d';

// ─── Vue de profil du voilier ────────────────────────────────────
export function boatOverview({ highlight } = {}) {
  const hi = (id) => (highlight === id ? ACCENT : STROKE);
  const hiW = (id, base = 1.5) => (highlight === id ? base + 2.5 : base);
  const hiFill = (id, base) => (highlight === id ? ACCENT_SOFT : base);
  const glow = (id) =>
    highlight === id
      ? `<circle cx="0" cy="0" r="0" fill="${ACCENT}" />` // placeholder
      : '';

  return `
<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vue de profil d'un sloop bermudien">
  <defs>
    <radialGradient id="bo-water" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${WATER}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${WATER}" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <rect x="0" y="295" width="600" height="85" fill="url(#bo-water)"/>
  <line x1="20" y1="295" x2="580" y2="295" stroke="${STROKE}" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5"/>

  <!-- HULL -->
  <path d="M 90 290 Q 130 322 300 324 Q 470 322 510 290 L 480 280 L 120 280 Z"
    fill="${hiFill('coque', HULL)}" stroke="${hi('coque')}" stroke-width="${hiW('coque', 2)}"/>

  <!-- ÉTRAVE (avant) -->
  <path d="M 90 290 L 88 270 Q 96 268 120 280"
    fill="none" stroke="${hi('etrave')}" stroke-width="${hiW('etrave', 2.5)}"/>
  ${highlight === 'etrave' ? `<circle cx="92" cy="282" r="14" fill="${ACCENT}" opacity="0.18"/>` : ''}

  <!-- POUPE / TABLEAU ARRIÈRE -->
  <line x1="510" y1="290" x2="488" y2="278"
    stroke="${hi('poupe')}" stroke-width="${hiW('poupe', 2.5)}"/>
  <line x1="488" y1="278" x2="488" y2="285"
    stroke="${hi('tableau_arriere')}" stroke-width="${hiW('tableau_arriere', 2.5)}"/>
  ${highlight === 'poupe' ? `<circle cx="500" cy="285" r="14" fill="${ACCENT}" opacity="0.18"/>` : ''}
  ${highlight === 'tableau_arriere' ? `<rect x="478" y="270" width="20" height="20" fill="${ACCENT}" opacity="0.18"/>` : ''}

  <!-- LISTON (moulure horizontale du flanc) -->
  <line x1="120" y1="282" x2="488" y2="282"
    stroke="${hi('liston')}" stroke-width="${hiW('liston', 1.5)}"/>

  <!-- PAVOIS (rebord vertical au-dessus du pont) -->
  <line x1="180" y1="278" x2="395" y2="278"
    stroke="${hi('pavois')}" stroke-width="${hiW('pavois', 2)}"/>

  <!-- FRANC-BORD (zone émergée entre flottaison et pont) -->
  ${highlight === 'franc_bord'
    ? `<rect x="120" y="280" width="365" height="15" fill="${ACCENT}" opacity="0.25"/>`
    : ''}

  <!-- ROOF -->
  <path d="M 200 280 Q 215 256 250 254 L 350 254 Q 380 256 395 280 Z"
    fill="${hiFill('roof', '#1a3a5c')}" stroke="${hi('roof')}" stroke-width="${hiW('roof', 1.8)}"/>

  <!-- HILOIRE (rebord du cockpit) -->
  <line x1="395" y1="276" x2="480" y2="276"
    stroke="${hi('hiloire')}" stroke-width="${hiW('hiloire', 2)}"/>
  <line x1="395" y1="280" x2="395" y2="270"
    stroke="${hi('hiloire')}" stroke-width="${hiW('hiloire', 2)}"/>

  <!-- COCKPIT -->
  <rect x="395" y="278" width="85" height="14"
    fill="${hiFill('cockpit', '#1a3a5c')}" stroke="${hi('cockpit')}" stroke-width="${hiW('cockpit', 1.8)}"/>

  <!-- DAVIER (chape en proue qui guide la chaîne d'ancre) -->
  <path d="M 96 278 L 88 274 L 96 270"
    fill="none" stroke="${hi('davier')}" stroke-width="${hiW('davier', 2.5)}"/>
  <circle cx="92" cy="274" r="2.5" fill="${hi('davier')}"/>

  <!-- ÉTAMBRAI (passage du mât dans le pont) -->
  ${highlight === 'etambrai'
    ? `<rect x="290" y="252" width="20" height="6" fill="${ACCENT}" opacity="0.7"/>`
    : ''}

  <!-- MÂT -->
  <line x1="298" y1="50" x2="298" y2="254"
    stroke="${hi('mat')}" stroke-width="${Math.max(3.5, hiW('mat', 3.5))}"/>

  <!-- BÔME -->
  <line x1="298" y1="210" x2="450" y2="218"
    stroke="${hi('bome')}" stroke-width="${Math.max(3.5, hiW('bome', 3.5))}"/>

  <!-- HALE-BAS -->
  <line x1="320" y1="240" x2="305" y2="218"
    stroke="${hi('hale_bas')}" stroke-width="${hiW('hale_bas', 1.2)}"/>

  <!-- GRAND-VOILE -->
  <path d="M 302 52 Q 380 130 450 215 L 302 215 Z"
    fill="${SAIL}" stroke="${hi('grand_voile')}" stroke-width="${hiW('grand_voile', 1.8)}"/>

  <!-- FOC -->
  <path d="M 296 60 L 130 278 L 296 240 Z"
    fill="${SAIL}" stroke="${hi('foc')}" stroke-width="${hiW('foc', 1.8)}"/>

  <!-- ÉTAI -->
  <line x1="298" y1="52" x2="120" y2="278"
    stroke="${hi('etai')}" stroke-width="${Math.max(1, hiW('etai', 1.2))}"/>

  <!-- PATARAS -->
  <line x1="298" y1="52" x2="492" y2="285"
    stroke="${hi('pataras')}" stroke-width="${Math.max(1, hiW('pataras', 1.2))}"/>

  <!-- HAUBANS -->
  <line x1="298" y1="90" x2="240" y2="280"
    stroke="${hi('haubans')}" stroke-width="${Math.max(1, hiW('haubans', 1.2))}"/>
  <line x1="298" y1="90" x2="356" y2="280"
    stroke="${hi('haubans')}" stroke-width="${Math.max(1, hiW('haubans', 1.2))}"/>

  <!-- QUILLE -->
  <path d="M 270 322 L 282 360 L 318 360 L 330 322 Z"
    fill="${hiFill('quille', HULL)}" stroke="${hi('quille')}" stroke-width="${hiW('quille', 1.8)}"/>

  <!-- SAFRAN / GOUVERNAIL -->
  <rect x="478" y="296" width="6" height="42"
    fill="${hiFill('safran', HULL)}" stroke="${hi('safran')}" stroke-width="${hiW('safran', 2)}"/>
  <rect x="478" y="296" width="6" height="42"
    fill="${hiFill('gouvernail', HULL)}" stroke="${hi('gouvernail')}" stroke-width="${hiW('gouvernail', 2)}"
    style="display:${highlight === 'gouvernail' ? 'block' : 'none'}"/>

  <!-- BARRE FRANCHE (visible si highlight) -->
  ${highlight === 'barre_franche'
    ? `<line x1="478" y1="295" x2="430" y2="290" stroke="${ACCENT}" stroke-width="3.5"/><circle cx="430" cy="290" r="3" fill="${ACCENT}"/>`
    : ''}

  <!-- bow indicator (subtil) -->
  <circle cx="98" cy="290" r="2" fill="${ACCENT}" opacity="0.6"/>
</svg>`;
}

// ─── Vue de dessus, tribord vert / bâbord rouge ──────────────────
export function boatTopView({ highlight } = {}) {
  const isStarboard = highlight === 'tribord';
  const isPort = highlight === 'babord';
  return `
<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vue de dessus d'un bateau">
  <ellipse cx="250" cy="110" rx="190" ry="60" fill="${HULL}" opacity="0.06"/>
  <path d="M 70 110 Q 100 60 250 50 Q 400 60 430 110 Q 400 160 250 170 Q 100 160 70 110 Z"
    fill="${SAIL}" stroke="${STROKE}" stroke-width="2"/>
  <line x1="70" y1="110" x2="430" y2="110" stroke="${STROKE}" stroke-width="0.6" stroke-dasharray="4 3"/>
  <path d="M 70 110 Q 100 60 250 50 Q 400 60 430 110"
    fill="${isStarboard ? '#1f8a3a' : 'none'}" fill-opacity="${isStarboard ? 0.18 : 0}"
    stroke="#1f8a3a" stroke-width="${isStarboard ? 9 : 6}"/>
  <path d="M 70 110 Q 100 160 250 170 Q 400 160 430 110"
    fill="${isPort ? '#c43d3d' : 'none'}" fill-opacity="${isPort ? 0.18 : 0}"
    stroke="#c43d3d" stroke-width="${isPort ? 9 : 6}"/>
  <path d="M 430 110 L 470 110 M 458 98 L 470 110 L 458 122" stroke="${STROKE}" stroke-width="2.5" fill="none"/>
  <circle cx="250" cy="110" r="6" fill="${STROKE}" opacity="0.6"/>
</svg>`;
}

// ─── Anatomie d'une voile ────────────────────────────────────────
export function sailAnatomy({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const hiW = (k, base) => (highlight === k ? base + 3 : base);
  const dot = (k, base) => (highlight === k ? ACCENT : base);
  const dotR = (k) => (highlight === k ? 9 : 5);
  return `
<svg viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomie d'une voile">
  <path d="M 90 50 Q 140 180 320 320 L 90 320 Z" fill="${SAIL}" stroke="${STROKE}" stroke-width="1.5" opacity="0.95"/>
  <line x1="90" y1="50" x2="90" y2="320" stroke="${hi('guindant')}" stroke-width="${hiW('guindant', 2)}"/>
  <path d="M 90 50 Q 140 180 320 320" stroke="${hi('chute')}" stroke-width="${hiW('chute', 2)}" fill="none"/>
  <line x1="90" y1="320" x2="320" y2="320" stroke="${hi('bordure')}" stroke-width="${hiW('bordure', 2)}"/>
  <circle cx="90" cy="50" r="${dotR('drisse')}" fill="${dot('drisse', STROKE)}"/>
  <circle cx="90" cy="320" r="${dotR('amure')}" fill="${dot('amure', STROKE)}"/>
  <circle cx="320" cy="320" r="${dotR('ecoute')}" fill="${dot('ecoute', STROKE)}"/>
</svg>`;
}

// ─── Gréement dormant ────────────────────────────────────────────
export function riggingDiagram({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const hiW = (k, base) => (highlight === k ? base + 3 : base);
  return `
<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gréement dormant d'un sloop">
  <line x1="60" y1="320" x2="300" y2="320" stroke="${STROKE}" stroke-width="2"/>
  <line x1="180" y1="40" x2="180" y2="320" stroke="${STROKE}" stroke-width="5"/>
  <line x1="180" y1="50" x2="80" y2="318" stroke="${hi('etai')}" stroke-width="${hiW('etai', 2)}"/>
  <line x1="180" y1="50" x2="280" y2="318" stroke="${hi('pataras')}" stroke-width="${hiW('pataras', 2)}"/>
  <line x1="180" y1="100" x2="120" y2="320" stroke="${hi('haubans')}" stroke-width="${hiW('haubans', 1.5)}"/>
  <line x1="180" y1="100" x2="240" y2="320" stroke="${hi('haubans')}" stroke-width="${hiW('haubans', 1.5)}"/>
  <circle cx="180" cy="40" r="3" fill="${STROKE}"/>
</svg>`;
}

// ─── Feux de navigation ──────────────────────────────────────────
export function navLights({ highlight } = {}) {
  const isPort = highlight === 'babord';
  const isStarboard = highlight === 'tribord';
  const isStern = highlight === 'poupe';
  return `
<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feux de navigation d'un voilier">
  <ellipse cx="180" cy="110" rx="120" ry="50" fill="none" stroke="${STROKE}" stroke-width="2"/>
  ${isPort ? `<circle cx="60" cy="110" r="22" fill="${WARN}" opacity="0.25"/>` : ''}
  <circle cx="60" cy="110" r="${isPort ? 14 : 12}" fill="${WARN}"/>
  ${isStarboard ? `<circle cx="300" cy="110" r="22" fill="#1f8a3a" opacity="0.25"/>` : ''}
  <circle cx="300" cy="110" r="${isStarboard ? 14 : 12}" fill="#1f8a3a"/>
  ${isStern ? `<circle cx="180" cy="160" r="22" fill="${ACCENT}" opacity="0.25"/>` : ''}
  <circle cx="180" cy="160" r="${isStern ? 14 : 12}" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
  <path d="M 180 50 L 173 65 L 187 65 Z" fill="${STROKE}"/>
</svg>`;
}

// ─── Cockpit, winch, taquet ──────────────────────────────────────
export function cockpit({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const hiAccent = (k) => (highlight === k ? ACCENT : '#b88a2c');
  const hiBg = (k) => (highlight === k ? `<circle cx="0" cy="0" r="0"/>` : '');
  return `
<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Espace de manœuvre">
  <rect x="40" y="70" width="300" height="120" rx="8" fill="none" stroke="${STROKE}" stroke-width="2"/>
  <rect x="80" y="90" width="220" height="80" rx="4" fill="${HULL}" opacity="0.06"/>
  ${highlight === 'winch' ? `<circle cx="110" cy="110" r="26" fill="${ACCENT}" opacity="0.2"/>` : ''}
  ${highlight === 'winch' ? `<circle cx="270" cy="110" r="26" fill="${ACCENT}" opacity="0.2"/>` : ''}
  <circle cx="110" cy="110" r="18" fill="none" stroke="${hiAccent('winch')}" stroke-width="${highlight === 'winch' ? 5 : 3}"/>
  <circle cx="110" cy="110" r="8" fill="${hiAccent('winch')}"/>
  <circle cx="270" cy="110" r="18" fill="none" stroke="${hiAccent('winch')}" stroke-width="${highlight === 'winch' ? 5 : 3}"/>
  <circle cx="270" cy="110" r="8" fill="${hiAccent('winch')}"/>
  ${highlight === 'taquet' ? `<rect x="160" y="142" width="60" height="28" fill="${ACCENT}" opacity="0.2" rx="3"/>` : ''}
  <rect x="170" y="150" width="40" height="14" rx="2" fill="${hi('taquet')}" stroke="${hi('taquet')}" stroke-width="${highlight === 'taquet' ? 2 : 1}"/>
  ${highlight === 'poulie' ? `<circle cx="60" cy="180" r="18" fill="${ACCENT}" opacity="0.2"/>` : ''}
  <circle cx="60" cy="180" r="10" fill="none" stroke="${hi('poulie')}" stroke-width="${highlight === 'poulie' ? 4 : 2}"/>
  <line x1="60" y1="170" x2="60" y2="190" stroke="${hi('poulie')}" stroke-width="${highlight === 'poulie' ? 3 : 1.5}"/>
</svg>`;
}

// ─── Ancre & mouillage ───────────────────────────────────────────
export function anchor({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const isOrin = highlight === 'orin';
  return `
<svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ancre marine">
  <!-- chaîne -->
  <g stroke="${STROKE}" stroke-width="2" fill="none">
    <ellipse cx="140" cy="20" rx="6" ry="4"/>
    <ellipse cx="140" cy="36" rx="4" ry="6"/>
    <ellipse cx="140" cy="52" rx="6" ry="4"/>
    <ellipse cx="140" cy="68" rx="4" ry="6"/>
    <ellipse cx="140" cy="84" rx="6" ry="4"/>
  </g>
  <!-- orin -->
  ${isOrin ? `<circle cx="100" cy="40" r="14" fill="${ACCENT}" opacity="0.2"/>` : ''}
  <path d="M 100 28 Q 70 70 100 130 Q 130 180 100 240"
    stroke="${hi('orin')}" stroke-width="${highlight === 'orin' ? 4 : 2}" fill="none" stroke-dasharray="${isOrin ? '0' : '6 4'}"/>
  <circle cx="100" cy="240" r="10" fill="${hi('orin')}"/>
  <!-- ancre -->
  <line x1="140" y1="100" x2="140" y2="220" stroke="${STROKE}" stroke-width="6"/>
  <circle cx="140" cy="100" r="8" fill="none" stroke="${STROKE}" stroke-width="3"/>
  <line x1="100" y1="160" x2="180" y2="160" stroke="${STROKE}" stroke-width="4"/>
  <path d="M 60 220 Q 80 260 140 220 Q 200 260 220 220" stroke="${STROKE}" stroke-width="6" fill="none"/>
  <line x1="60" y1="220" x2="50" y2="200" stroke="${STROKE}" stroke-width="5"/>
  <line x1="220" y1="220" x2="230" y2="200" stroke="${STROKE}" stroke-width="5"/>
  <!-- fond -->
  <line x1="20" y1="290" x2="260" y2="290" stroke="${STROKE}" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
</svg>`;
}

// ─── Gilet de sauvetage ──────────────────────────────────────────
export function lifejacket() {
  return `
<svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gilet de sauvetage">
  <!-- col -->
  <path d="M 110 50 Q 140 30 170 50 L 170 90 Q 140 100 110 90 Z" fill="${WARN}" stroke="${STROKE}" stroke-width="2"/>
  <!-- corps gauche -->
  <path d="M 60 90 L 60 240 Q 60 260 80 270 L 130 270 L 130 90 Q 95 80 60 90 Z" fill="${WARN}" stroke="${STROKE}" stroke-width="2.5"/>
  <!-- corps droit -->
  <path d="M 220 90 L 220 240 Q 220 260 200 270 L 150 270 L 150 90 Q 185 80 220 90 Z" fill="${WARN}" stroke="${STROKE}" stroke-width="2.5"/>
  <!-- bandes réfléchissantes -->
  <rect x="60" y="160" width="70" height="8" fill="${SAIL}" stroke="${STROKE}" stroke-width="0.8"/>
  <rect x="150" y="160" width="70" height="8" fill="${SAIL}" stroke="${STROKE}" stroke-width="0.8"/>
  <!-- sangle centrale -->
  <line x1="140" y1="100" x2="140" y2="270" stroke="${STROKE}" stroke-width="1" stroke-dasharray="3 3"/>
</svg>`;
}

// ─── Extincteur ──────────────────────────────────────────────────
export function extinguisher() {
  return `
<svg viewBox="0 0 240 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Extincteur">
  <!-- corps -->
  <rect x="80" y="80" width="80" height="200" rx="12" fill="${WARN}" stroke="${STROKE}" stroke-width="3"/>
  <!-- étiquette -->
  <rect x="86" y="140" width="68" height="80" fill="${SAIL}" stroke="${STROKE}" stroke-width="1.5"/>
  <line x1="92" y1="160" x2="148" y2="160" stroke="${STROKE}" stroke-width="1"/>
  <line x1="92" y1="172" x2="140" y2="172" stroke="${STROKE}" stroke-width="0.8"/>
  <line x1="92" y1="184" x2="148" y2="184" stroke="${STROKE}" stroke-width="0.8"/>
  <line x1="92" y1="196" x2="135" y2="196" stroke="${STROKE}" stroke-width="0.8"/>
  <!-- col + manomètre -->
  <rect x="100" y="60" width="40" height="22" fill="${HULL}" stroke="${STROKE}" stroke-width="2"/>
  <circle cx="120" cy="50" r="10" fill="${SAIL}" stroke="${STROKE}" stroke-width="2"/>
  <line x1="120" y1="50" x2="125" y2="44" stroke="${STROKE}" stroke-width="1.5"/>
  <!-- poignée -->
  <path d="M 100 60 L 75 50 L 75 40 L 145 40 L 145 50 L 140 60" fill="none" stroke="${STROKE}" stroke-width="2.5"/>
  <!-- lance -->
  <path d="M 145 55 Q 180 60 200 90" stroke="${STROKE}" stroke-width="2" fill="none"/>
  <rect x="195" y="85" width="18" height="10" fill="${HULL}" stroke="${STROKE}" stroke-width="1.5"/>
</svg>`;
}

// ─── VHF marine ──────────────────────────────────────────────────
export function vhf() {
  return `
<svg viewBox="0 0 280 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="VHF marine portable">
  <!-- antenne -->
  <line x1="100" y1="40" x2="100" y2="100" stroke="${STROKE}" stroke-width="3"/>
  <circle cx="100" cy="36" r="4" fill="${STROKE}"/>
  <!-- corps -->
  <rect x="60" y="100" width="160" height="200" rx="14" fill="${HULL}" stroke="${STROKE}" stroke-width="3"/>
  <!-- écran -->
  <rect x="80" y="120" width="120" height="60" rx="3" fill="${ACCENT_SOFT}" stroke="${STROKE}" stroke-width="1.5"/>
  <text x="92" y="155" font-family="monospace" font-size="22" fill="${HULL}" font-weight="bold">16</text>
  <text x="135" y="155" font-family="monospace" font-size="11" fill="${HULL}">CH</text>
  <!-- haut-parleur -->
  <circle cx="100" cy="210" r="14" fill="${SAIL}" stroke="${STROKE}" stroke-width="1.5"/>
  <circle cx="100" cy="210" r="8" fill="none" stroke="${STROKE}" stroke-width="0.8"/>
  <!-- boutons -->
  <rect x="135" y="200" width="20" height="20" rx="2" fill="${SAIL}" stroke="${STROKE}" stroke-width="1"/>
  <rect x="165" y="200" width="20" height="20" rx="2" fill="${SAIL}" stroke="${STROKE}" stroke-width="1"/>
  <rect x="135" y="230" width="50" height="14" rx="2" fill="${SAIL}" stroke="${STROKE}" stroke-width="1"/>
  <!-- ptt -->
  <rect x="80" y="250" width="120" height="20" rx="3" fill="${SAIL}" stroke="${STROKE}" stroke-width="1.5"/>
</svg>`;
}

// ─── Intérieur (carré, table à cartes, cambuse) ──────────────────
export function interior({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const hiF = (k, base) => (highlight === k ? ACCENT_SOFT : base);
  return `
<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Intérieur d'un voilier">
  <!-- coque coupe -->
  <path d="M 30 60 L 350 60 L 360 240 L 20 240 Z" fill="${SAIL}" stroke="${STROKE}" stroke-width="2"/>
  <!-- carré (banquette + table centrale) -->
  ${highlight === 'carre' ? `<rect x="100" y="140" width="180" height="80" fill="${ACCENT}" opacity="0.18"/>` : ''}
  <rect x="110" y="170" width="160" height="20" fill="${hiF('carre', '#1a3a5c')}" opacity="0.8"/>
  <rect x="110" y="190" width="160" height="40" fill="none" stroke="${hi('carre')}" stroke-width="${highlight === 'carre' ? 3 : 1.5}"/>
  <!-- table à cartes (à droite) -->
  ${highlight === 'table_a_cartes' ? `<rect x="280" y="110" width="80" height="50" fill="${ACCENT}" opacity="0.2"/>` : ''}
  <rect x="290" y="120" width="60" height="30" fill="${SAIL}" stroke="${hi('table_a_cartes')}" stroke-width="${highlight === 'table_a_cartes' ? 3 : 1.5}"/>
  <line x1="295" y1="128" x2="345" y2="128" stroke="${hi('table_a_cartes')}" stroke-width="0.6"/>
  <line x1="295" y1="135" x2="345" y2="135" stroke="${hi('table_a_cartes')}" stroke-width="0.6"/>
  <line x1="295" y1="142" x2="345" y2="142" stroke="${hi('table_a_cartes')}" stroke-width="0.6"/>
  <!-- cambuse (à gauche, cardan + flamme) -->
  ${highlight === 'cambuse' ? `<rect x="20" y="100" width="80" height="60" fill="${ACCENT}" opacity="0.2"/>` : ''}
  <rect x="30" y="115" width="60" height="40" fill="${SAIL}" stroke="${hi('cambuse')}" stroke-width="${highlight === 'cambuse' ? 3 : 1.5}"/>
  <circle cx="50" cy="135" r="6" fill="none" stroke="${hi('cambuse')}" stroke-width="${highlight === 'cambuse' ? 2.5 : 1.2}"/>
  <circle cx="70" cy="135" r="6" fill="none" stroke="${hi('cambuse')}" stroke-width="${highlight === 'cambuse' ? 2.5 : 1.2}"/>
  <!-- ligne de flottaison -->
  <line x1="20" y1="240" x2="360" y2="240" stroke="${WATER}" stroke-width="2" opacity="0.5"/>
</svg>`;
}

// ─── Coupe de coque (brion, bouchain, franc-bord, étambrai) ──────
export function hullSection({ highlight } = {}) {
  const hi = (k) => (highlight === k ? ACCENT : STROKE);
  const hiW = (k, b) => (highlight === k ? b + 3 : b);
  return `
<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coupe d'une coque de voilier">
  <!-- pont -->
  <line x1="40" y1="100" x2="360" y2="100" stroke="${STROKE}" stroke-width="2"/>
  <!-- coque profil -->
  <path d="M 40 100 L 40 180 Q 60 240 200 250 Q 340 240 360 180 L 360 100"
    fill="${SAIL}" stroke="${STROKE}" stroke-width="2.5"/>
  <!-- ligne de flottaison -->
  <line x1="40" y1="170" x2="360" y2="170" stroke="${WATER}" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- franc-bord (entre flottaison et pont) -->
  ${highlight === 'franc_bord' ? `<rect x="40" y="100" width="320" height="70" fill="${ACCENT}" opacity="0.25"/>` : ''}
  <!-- bouchain (arête latérale entre fond et flanc) -->
  <line x1="55" y1="195" x2="80" y2="240"
    stroke="${hi('bouchain')}" stroke-width="${hiW('bouchain', 1.5)}"/>
  <line x1="345" y1="195" x2="320" y2="240"
    stroke="${hi('bouchain')}" stroke-width="${hiW('bouchain', 1.5)}"/>
  <!-- brion (jonction étrave/quille — schématisé au centre/bas) -->
  ${highlight === 'brion' ? `<circle cx="200" cy="252" r="20" fill="${ACCENT}" opacity="0.22"/>` : ''}
  <path d="M 180 250 Q 200 260 220 250"
    stroke="${hi('brion')}" stroke-width="${hiW('brion', 2.5)}" fill="none"/>
  <!-- étambrai (passage du mât) -->
  ${highlight === 'etambrai' ? `<rect x="190" y="92" width="20" height="14" fill="${ACCENT}" opacity="0.4"/>` : ''}
  <rect x="190" y="92" width="20" height="14" fill="none" stroke="${hi('etambrai')}" stroke-width="${hiW('etambrai', 1.5)}"/>
  <!-- mât (juste un bout pour contexte) -->
  <line x1="200" y1="40" x2="200" y2="92" stroke="${STROKE}" stroke-width="4"/>
</svg>`;
}

// ─── Spinnaker / vent arrière ───────────────────────────────────
export function spinnaker() {
  return `
<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Voilier avec spinnaker au portant">
  <!-- ligne d'eau -->
  <line x1="20" y1="290" x2="340" y2="290" stroke="${WATER}" stroke-width="1.5" stroke-dasharray="3 4"/>
  <!-- coque -->
  <path d="M 110 290 Q 140 312 200 312 Q 260 312 290 290 L 270 282 L 130 282 Z" fill="${HULL}" stroke="${STROKE}" stroke-width="2"/>
  <!-- mât -->
  <line x1="195" y1="60" x2="195" y2="282" stroke="${STROKE}" stroke-width="3"/>
  <!-- bôme -->
  <line x1="195" y1="220" x2="320" y2="232" stroke="${STROKE}" stroke-width="3"/>
  <!-- grand-voile (souple) -->
  <path d="M 198 62 Q 280 140 318 230 L 198 220 Z" fill="${SAIL}" stroke="${STROKE}" stroke-width="1.5"/>
  <!-- spi (gros, coloré) -->
  <path d="M 195 60 Q 80 100 50 240 Q 70 230 105 220 Q 140 210 195 215 Z"
    fill="${ACCENT_SOFT}" stroke="${ACCENT}" stroke-width="2.5"/>
  <path d="M 195 60 Q 80 100 50 240" stroke="${WARN}" stroke-width="2.5" fill="none"/>
</svg>`;
}

// ─── Détail laiton : manille, corne de brume, etc ───────────────
export function fitting({ kind } = {}) {
  if (kind === 'corne_brume') {
    return `
<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corne de brume">
  <path d="M 60 90 L 200 60 L 200 160 L 60 130 Z" fill="${HULL}" stroke="${STROKE}" stroke-width="2.5"/>
  <path d="M 200 60 Q 260 70 280 110 Q 260 150 200 160 Z" fill="${ACCENT}" stroke="${STROKE}" stroke-width="2.5"/>
  <ellipse cx="270" cy="110" rx="12" ry="40" fill="none" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="60" y1="110" x2="20" y2="110" stroke="${STROKE}" stroke-width="2"/>
  <circle cx="20" cy="110" r="6" fill="${STROKE}"/>
</svg>`;
  }
  // default: manille
  return `
<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Manille">
  <path d="M 80 200 Q 60 100 140 60 Q 220 100 200 200" fill="none" stroke="${STROKE}" stroke-width="14" stroke-linecap="round"/>
  <line x1="65" y1="205" x2="215" y2="205" stroke="${ACCENT}" stroke-width="10" stroke-linecap="round"/>
  <circle cx="215" cy="205" r="14" fill="${ACCENT}"/>
  <circle cx="215" cy="205" r="5" fill="${HULL}"/>
  <circle cx="65" cy="205" r="9" fill="${STROKE}"/>
</svg>`;
}

// ─── Icônes catégorie pour la home ──────────────────────────────
export function categoryIcon(category) {
  const icons = {
    'coque-pont': `<svg viewBox="0 0 60 60"><path d="M 8 35 Q 14 44 30 44 Q 46 44 52 35 L 48 32 L 12 32 Z" fill="${HULL}"/><line x1="6" y1="35" x2="54" y2="35" stroke="${ACCENT}" stroke-width="1.2"/></svg>`,
    'greement-voilure': `<svg viewBox="0 0 60 60"><line x1="30" y1="6" x2="30" y2="50" stroke="${HULL}" stroke-width="2"/><path d="M 32 8 L 50 46 L 32 46 Z" fill="${SAIL}" stroke="${HULL}" stroke-width="1.2"/></svg>`,
    'accastillage-manoeuvre': `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="14" fill="none" stroke="${ACCENT}" stroke-width="3"/><circle cx="30" cy="30" r="5" fill="${ACCENT}"/></svg>`,
    'interieur-securite': `<svg viewBox="0 0 60 60"><circle cx="20" cy="30" r="6" fill="${WARN}"/><circle cx="40" cy="30" r="6" fill="#1f8a3a"/></svg>`,
  };
  return icons[category] || '';
}

export const ILLUSTRATIONS = {
  boat_overview: boatOverview,
  boat_top: boatTopView,
  sail_anatomy: sailAnatomy,
  rigging: riggingDiagram,
  nav_lights: navLights,
  cockpit: cockpit,
  anchor: anchor,
  lifejacket: lifejacket,
  extinguisher: extinguisher,
  vhf: vhf,
  interior: interior,
  hull_section: hullSection,
  spinnaker: spinnaker,
  manille: () => fitting({ kind: 'manille' }),
  corne_brume: () => fitting({ kind: 'corne_brume' }),
};
