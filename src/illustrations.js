// SVG schematics drawn by hand. Each function returns an SVG string.
// Style is editorial / nautical: navy lines on cream, brass accents.

const STROKE = '#0e2235';
const SAIL = '#fbf6e8';
const HULL = '#0e2235';
const ACCENT = '#b88a2c';
const WATER = '#d9c89c';

export function boatOverview({ highlight } = {}) {
  const hi = (id) => (highlight === id ? ACCENT : STROKE);
  const hiW = (id) => (highlight === id ? 4 : 1.5);
  return `
<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vue de profil d'un sloop bermudien">
  <rect x="0" y="290" width="600" height="90" fill="${WATER}" opacity="0.4"/>
  <path d="M 60 290 Q 180 250 300 250 Q 420 250 540 290 Z" fill="none" stroke="${WATER}" stroke-width="2"/>
  <!-- hull -->
  <path d="M 90 290 Q 130 320 300 322 Q 470 320 510 290 L 480 280 L 120 280 Z"
    fill="${HULL}" stroke="${hi('coque')}" stroke-width="${hiW('coque')}"/>
  <!-- waterline -->
  <line x1="80" y1="290" x2="520" y2="290" stroke="${STROKE}" stroke-width="0.6" stroke-dasharray="3 3"/>
  <!-- roof / cabin -->
  <path d="M 200 280 Q 215 256 250 254 L 350 254 Q 380 256 395 280 Z"
    fill="#1a3a5c" stroke="${hi('roof')}" stroke-width="${hiW('roof')}"/>
  <!-- cockpit -->
  <rect x="395" y="278" width="85" height="14" fill="#1a3a5c" stroke="${hi('cockpit')}" stroke-width="${hiW('cockpit')}"/>
  <!-- mast -->
  <line x1="298" y1="50" x2="298" y2="254" stroke="${hi('mat')}" stroke-width="${Math.max(3, hiW('mat'))}"/>
  <!-- boom -->
  <line x1="298" y1="210" x2="450" y2="218" stroke="${hi('bome')}" stroke-width="${Math.max(3, hiW('bome'))}"/>
  <!-- mainsail -->
  <path d="M 302 52 Q 380 130 450 215 L 302 215 Z"
    fill="${SAIL}" stroke="${hi('grand_voile')}" stroke-width="${hiW('grand_voile')}"/>
  <!-- jib -->
  <path d="M 296 60 L 130 278 L 296 240 Z"
    fill="${SAIL}" stroke="${hi('foc')}" stroke-width="${hiW('foc')}"/>
  <!-- forestay -->
  <line x1="298" y1="52" x2="120" y2="278" stroke="${hi('etai')}" stroke-width="${Math.max(1, hiW('etai'))}"/>
  <!-- backstay -->
  <line x1="298" y1="52" x2="492" y2="285" stroke="${hi('pataras')}" stroke-width="${Math.max(1, hiW('pataras'))}"/>
  <!-- shrouds -->
  <line x1="298" y1="90" x2="240" y2="280" stroke="${hi('haubans')}" stroke-width="${Math.max(1, hiW('haubans'))}"/>
  <line x1="298" y1="90" x2="356" y2="280" stroke="${hi('haubans')}" stroke-width="${Math.max(1, hiW('haubans'))}"/>
  <!-- keel -->
  <path d="M 270 322 L 282 360 L 318 360 L 330 322 Z"
    fill="${HULL}" stroke="${hi('quille')}" stroke-width="${hiW('quille')}"/>
  <!-- rudder -->
  <rect x="478" y="296" width="5" height="40" fill="${HULL}" stroke="${hi('safran')}" stroke-width="${hiW('safran')}"/>
  <!-- bow indicator -->
  <circle cx="98" cy="285" r="3" fill="${ACCENT}"/>
  <text x="92" y="310" font-family="serif" font-size="11" fill="${STROKE}">étrave</text>
  <text x="498" y="310" font-family="serif" font-size="11" fill="${STROKE}">poupe</text>
</svg>`;
}

export function boatTopView() {
  return `
<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vue de dessus du bateau, tribord vert et bâbord rouge">
  <ellipse cx="250" cy="110" rx="190" ry="60" fill="${HULL}" opacity="0.08"/>
  <path d="M 70 110 Q 100 60 250 50 Q 400 60 430 110 Q 400 160 250 170 Q 100 160 70 110 Z"
    fill="none" stroke="${STROKE}" stroke-width="2"/>
  <line x1="70" y1="110" x2="430" y2="110" stroke="${STROKE}" stroke-width="0.6" stroke-dasharray="4 3"/>
  <!-- starboard (right when looking forward = upper half here, since bow is right) -->
  <path d="M 250 50 Q 400 60 430 110" fill="none" stroke="#1f8a3a" stroke-width="6"/>
  <path d="M 70 110 Q 100 60 250 50" fill="none" stroke="#1f8a3a" stroke-width="6"/>
  <!-- port (left when looking forward = lower half) -->
  <path d="M 250 170 Q 400 160 430 110" fill="none" stroke="#c43d3d" stroke-width="6"/>
  <path d="M 70 110 Q 100 160 250 170" fill="none" stroke="#c43d3d" stroke-width="6"/>
  <!-- bow arrow -->
  <path d="M 430 110 L 460 110 M 450 100 L 460 110 L 450 120" stroke="${ACCENT}" stroke-width="2" fill="none"/>
  <text x="465" y="114" font-family="serif" font-size="12" fill="${STROKE}">avant</text>
  <text x="240" y="40" font-family="serif" font-size="12" fill="#1f8a3a">tribord</text>
  <text x="240" y="190" font-family="serif" font-size="12" fill="#c43d3d">bâbord</text>
</svg>`;
}

export function sailAnatomy() {
  return `
<svg viewBox="0 0 380 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomie d'une voile : guindant, chute, bordure, points">
  <path d="M 90 50 Q 140 180 320 320 L 90 320 Z" fill="${SAIL}" stroke="${STROKE}" stroke-width="2"/>
  <!-- guindant -->
  <line x1="90" y1="50" x2="90" y2="320" stroke="${ACCENT}" stroke-width="3"/>
  <!-- chute -->
  <path d="M 90 50 Q 140 180 320 320" stroke="${ACCENT}" stroke-width="3" fill="none" stroke-dasharray="6 3"/>
  <!-- bordure -->
  <line x1="90" y1="320" x2="320" y2="320" stroke="${ACCENT}" stroke-width="3" stroke-dasharray="2 3"/>
  <!-- points -->
  <circle cx="90" cy="50" r="5" fill="${STROKE}"/>
  <circle cx="90" cy="320" r="5" fill="${STROKE}"/>
  <circle cx="320" cy="320" r="5" fill="${STROKE}"/>
  <text x="20" y="44" font-family="serif" font-size="13" fill="${STROKE}">point de drisse</text>
  <text x="14" y="335" font-family="serif" font-size="13" fill="${STROKE}">point d'amure</text>
  <text x="270" y="345" font-family="serif" font-size="13" fill="${STROKE}">point d'écoute</text>
  <text x="40" y="200" font-family="serif" font-size="13" fill="${ACCENT}">guindant</text>
  <text x="220" y="180" font-family="serif" font-size="13" fill="${ACCENT}">chute</text>
  <text x="180" y="345" font-family="serif" font-size="13" fill="${ACCENT}">bordure</text>
</svg>`;
}

export function riggingDiagram() {
  return `
<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gréement dormant : étai, pataras, haubans">
  <line x1="60" y1="320" x2="300" y2="320" stroke="${STROKE}" stroke-width="2"/>
  <line x1="180" y1="40" x2="180" y2="320" stroke="${STROKE}" stroke-width="5"/>
  <line x1="180" y1="50" x2="80" y2="318" stroke="${ACCENT}" stroke-width="2"/>
  <line x1="180" y1="50" x2="280" y2="318" stroke="${ACCENT}" stroke-width="2"/>
  <line x1="180" y1="100" x2="120" y2="320" stroke="${STROKE}" stroke-width="1.5"/>
  <line x1="180" y1="100" x2="240" y2="320" stroke="${STROKE}" stroke-width="1.5"/>
  <text x="35" y="335" font-family="serif" font-size="12" fill="${ACCENT}">étai</text>
  <text x="285" y="335" font-family="serif" font-size="12" fill="${ACCENT}">pataras</text>
  <text x="125" y="335" font-family="serif" font-size="12" fill="${STROKE}">hauban</text>
  <text x="200" y="335" font-family="serif" font-size="12" fill="${STROKE}">hauban</text>
  <text x="190" y="40" font-family="serif" font-size="12" fill="${STROKE}">tête de mât</text>
</svg>`;
}

export function navLights() {
  return `
<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feux de navigation">
  <ellipse cx="180" cy="110" rx="120" ry="50" fill="none" stroke="${STROKE}" stroke-width="2"/>
  <circle cx="60" cy="110" r="10" fill="#c43d3d"/>
  <circle cx="300" cy="110" r="10" fill="#1f8a3a"/>
  <circle cx="180" cy="160" r="10" fill="#fff" stroke="${STROKE}" stroke-width="1.5"/>
  <text x="40" y="90" font-family="serif" font-size="12" fill="#c43d3d">bâbord</text>
  <text x="280" y="90" font-family="serif" font-size="12" fill="#1f8a3a">tribord</text>
  <text x="160" y="190" font-family="serif" font-size="12" fill="${STROKE}">poupe (blanc)</text>
  <path d="M 180 60 L 175 70 L 185 70 Z" fill="${ACCENT}"/>
  <text x="170" y="50" font-family="serif" font-size="11" fill="${STROKE}">avant</text>
</svg>`;
}

export function cockpit() {
  return `
<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cockpit avec winch et taquets">
  <rect x="40" y="70" width="300" height="120" rx="8" fill="none" stroke="${STROKE}" stroke-width="2"/>
  <rect x="80" y="90" width="220" height="80" rx="4" fill="${HULL}" opacity="0.08"/>
  <circle cx="110" cy="110" r="14" fill="none" stroke="${ACCENT}" stroke-width="3"/>
  <circle cx="110" cy="110" r="6" fill="${ACCENT}"/>
  <circle cx="270" cy="110" r="14" fill="none" stroke="${ACCENT}" stroke-width="3"/>
  <circle cx="270" cy="110" r="6" fill="${ACCENT}"/>
  <text x="90" y="140" font-family="serif" font-size="11" fill="${STROKE}">winch</text>
  <text x="250" y="140" font-family="serif" font-size="11" fill="${STROKE}">winch</text>
  <rect x="170" y="150" width="40" height="10" rx="2" fill="${STROKE}"/>
  <text x="155" y="178" font-family="serif" font-size="11" fill="${STROKE}">taquet coinceur</text>
  <text x="160" y="60" font-family="serif" font-size="12" fill="${STROKE}">cockpit</text>
</svg>`;
}

export function categoryIcon(category) {
  const icons = {
    'coque-pont': `<svg viewBox="0 0 60 60"><path d="M 8 35 Q 14 44 30 44 Q 46 44 52 35 L 48 32 L 12 32 Z" fill="${HULL}"/><line x1="6" y1="35" x2="54" y2="35" stroke="${ACCENT}" stroke-width="1"/></svg>`,
    'greement-voilure': `<svg viewBox="0 0 60 60"><line x1="30" y1="6" x2="30" y2="50" stroke="${HULL}" stroke-width="2"/><path d="M 32 8 L 50 46 L 32 46 Z" fill="${SAIL}" stroke="${HULL}" stroke-width="1"/></svg>`,
    'accastillage-manoeuvre': `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="14" fill="none" stroke="${ACCENT}" stroke-width="3"/><circle cx="30" cy="30" r="5" fill="${ACCENT}"/></svg>`,
    'interieur-securite': `<svg viewBox="0 0 60 60"><circle cx="20" cy="30" r="6" fill="#c43d3d"/><circle cx="40" cy="30" r="6" fill="#1f8a3a"/></svg>`,
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
};
