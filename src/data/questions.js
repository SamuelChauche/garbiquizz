// Banque de 50 questions sur le vocabulaire d'un voilier 6m type Amel Garbi
// (sloop bermudien quillard, années 1980).
//
// Difficulté :
//   1 = QCM 4 choix, vocabulaire de base
//   2 = QCM 3 choix, vocabulaire intermédiaire
//   3 = QCM 3 choix, distracteurs piégeux, termes techniques
//   4 = saisie texte (fill = phrase à trous, text = saisie libre), expert
//
// Catégories :
//   'coque-pont', 'greement-voilure', 'accastillage-manoeuvre', 'interieur-securite'

export const CATEGORIES = {
  'coque-pont': 'Coque & pont',
  'greement-voilure': 'Gréement & voilure',
  'accastillage-manoeuvre': 'Accastillage & manœuvre',
  'interieur-securite': 'Intérieur & sécurité',
};

export const DIFFICULTY_LABELS = {
  1: 'Initié',
  2: 'Apprenti matelot',
  3: 'Équipier confirmé',
  4: 'Skipper',
};

export const QUESTIONS = [
  // ─── PALIER 1 — QCM 4 choix (vocabulaire de base) ─────────────────
  {
    id: 'q01', category: 'coque-pont', difficulty: 1, type: 'mcq4',
    question: "Comment appelle-t-on l'avant du bateau ?",
    choices: ['Poupe', 'Étrave', 'Quille', 'Davier'],
    answer: 'Étrave',
    explanation: "L'étrave est la pièce avant qui fend l'eau, du livet de pont à la quille.",
    illustration: 'boat_overview',
  },
  {
    id: 'q02', category: 'coque-pont', difficulty: 1, type: 'mcq4',
    question: "Comment appelle-t-on l'arrière du bateau ?",
    choices: ['Étrave', 'Poupe', 'Étambot', 'Hiloire'],
    answer: 'Poupe',
    explanation: "La poupe est l'arrière du bateau, par opposition à la proue (l'avant).",
    illustration: 'boat_overview',
  },
  {
    id: 'q03', category: 'coque-pont', difficulty: 1, type: 'mcq4',
    question: "En regardant vers l'avant, le côté droit du bateau s'appelle ?",
    choices: ['Bâbord', 'Tribord', 'Au vent', 'Sous le vent'],
    answer: 'Tribord',
    explanation: "Tribord = droite. Astuce : tribord finit par « d » comme droite. Feu vert la nuit.",
    illustration: 'boat_top',
  },
  {
    id: 'q04', category: 'coque-pont', difficulty: 1, type: 'mcq4',
    question: "En regardant vers l'avant, le côté gauche du bateau s'appelle ?",
    choices: ['Tribord', 'Bâbord', 'Poupe', 'Bouchain'],
    answer: 'Bâbord',
    explanation: "Bâbord = gauche. Astuce : « ba- » comme « bas » → batterie rouge → feu rouge.",
    illustration: 'boat_top',
  },
  {
    id: 'q05', category: 'coque-pont', difficulty: 1, type: 'mcq4',
    question: "Comment se nomme la zone à ciel ouvert où se tient l'équipage ?",
    choices: ['Cockpit', 'Carré', 'Roof', 'Pavois'],
    answer: 'Cockpit',
    explanation: "Le cockpit est l'espace creux à l'arrière où se tient le barreur. Sur le Garbi il est petit et auto-videur.",
    illustration: 'boat_overview',
  },
  {
    id: 'q06', category: 'greement-voilure', difficulty: 1, type: 'mcq4',
    question: "Quelle pièce verticale supporte les voiles ?",
    choices: ['Bôme', 'Étai', 'Mât', 'Hauban'],
    answer: 'Mât',
    explanation: "Le mât est la grande pièce verticale (souvent en aluminium) qui porte les voiles.",
    illustration: 'boat_overview',
  },
  {
    id: 'q07', category: 'greement-voilure', difficulty: 1, type: 'mcq4',
    question: "Quelle pièce horizontale est fixée au bas de la grand-voile ?",
    choices: ['Bôme', 'Drisse', 'Étai', 'Écoute'],
    answer: 'Bôme',
    explanation: "La bôme est l'espar horizontal qui maintient la bordure de la grand-voile.",
    illustration: 'boat_overview',
  },
  {
    id: 'q08', category: 'greement-voilure', difficulty: 1, type: 'mcq4',
    question: "Quelle voile est hissée derrière le mât ?",
    choices: ['Foc', 'Génois', 'Grand-voile', 'Spi'],
    answer: 'Grand-voile',
    explanation: "La grand-voile est la voile principale, hissée le long du mât et tenue par la bôme.",
    illustration: 'boat_overview',
  },
  {
    id: 'q09', category: 'greement-voilure', difficulty: 1, type: 'mcq4',
    question: "Quelle voile triangulaire est hissée à l'avant du mât, sur l'étai ?",
    choices: ['Grand-voile', 'Foc', 'Tape-cul', 'Voile de cape'],
    answer: 'Foc',
    explanation: "Le foc est la voile d'avant, hissée sur l'étai. Le génois est un foc plus grand.",
    illustration: 'boat_overview',
  },
  {
    id: 'q10', category: 'accastillage-manoeuvre', difficulty: 1, type: 'mcq4',
    question: "Quelle pièce immergée à l'arrière fait tourner le bateau ?",
    choices: ['Quille', 'Safran', 'Dérive', 'Étrave'],
    answer: 'Safran',
    explanation: "Le safran est le gouvernail immergé. Il pivote pour orienter le bateau.",
    illustration: 'boat_overview',
  },
  {
    id: 'q11', category: 'accastillage-manoeuvre', difficulty: 1, type: 'mcq4',
    question: "Sur un petit voilier comme le Garbi, on dirige souvent avec une ?",
    choices: ['Roue à barre', 'Barre franche', 'Manette', 'Pédale'],
    answer: 'Barre franche',
    explanation: "La barre franche est un levier en bois ou aluminium relié directement à la mèche du safran.",
  },
  {
    id: 'q12', category: 'interieur-securite', difficulty: 1, type: 'mcq4',
    question: "Quel équipement individuel est obligatoire pour chaque équipier en navigation ?",
    choices: ['Casquette', 'Gilet de sauvetage', 'Bottes', 'Lampe frontale'],
    answer: 'Gilet de sauvetage',
    explanation: "Un gilet de sauvetage par personne, accessible et adapté, est obligatoire à bord.",
  },
  {
    id: 'q13', category: 'interieur-securite', difficulty: 1, type: 'mcq4',
    question: "Quel objet permet d'immobiliser le bateau au mouillage ?",
    choices: ['Le winch', 'Le safran', "L'ancre", 'La drisse'],
    answer: "L'ancre",
    explanation: "L'ancre, reliée à une chaîne et un orin, accroche le fond et tient le bateau.",
  },

  // ─── PALIER 2 — QCM 3 choix (intermédiaire) ─────────────────────
  {
    id: 'q14', category: 'coque-pont', difficulty: 2, type: 'mcq3',
    question: "Comment se nomme le rebord vertical autour du cockpit qui empêche l'eau d'entrer ?",
    choices: ['Pavois', 'Hiloire', 'Liston'],
    answer: 'Hiloire',
    explanation: "L'hiloire est le rebord rehaussé qui ceinture le cockpit ou la descente.",
    illustration: 'boat_overview',
  },
  {
    id: 'q15', category: 'coque-pont', difficulty: 2, type: 'mcq3',
    question: "Comment se nomme la pièce horizontale qui longe le pont sur les flancs ?",
    choices: ['Liston', 'Davier', 'Étambrai'],
    answer: 'Liston',
    explanation: "Le liston est la moulure horizontale qui protège le franc-bord contre les chocs.",
  },
  {
    id: 'q16', category: 'coque-pont', difficulty: 2, type: 'mcq3',
    question: "Comment se nomme la pièce métallique en proue qui guide la chaîne de l'ancre ?",
    choices: ['Davier', 'Étrave', 'Bouchain'],
    answer: 'Davier',
    explanation: "Le davier est une chape à galet en proue qui guide la chaîne d'ancre.",
  },
  {
    id: 'q17', category: 'greement-voilure', difficulty: 2, type: 'mcq3',
    question: "Comment se nomment les câbles latéraux qui maintiennent le mât ?",
    choices: ['Étais', 'Haubans', 'Drisses'],
    answer: 'Haubans',
    explanation: "Les haubans sont les câbles latéraux du gréement dormant qui tiennent le mât sur les côtés.",
    illustration: 'rigging',
  },
  {
    id: 'q18', category: 'greement-voilure', difficulty: 2, type: 'mcq3',
    question: "Comment se nomme le câble fixe qui tient le mât vers l'avant ?",
    choices: ['Étai', 'Pataras', 'Drisse'],
    answer: 'Étai',
    explanation: "L'étai est le câble fixe qui retient le mât vers l'avant. Le foc s'y endraille.",
    illustration: 'rigging',
  },
  {
    id: 'q19', category: 'greement-voilure', difficulty: 2, type: 'mcq3',
    question: "Comment s'appelle le cordage qui sert à hisser une voile ?",
    choices: ['Écoute', 'Drisse', 'Bordure'],
    answer: 'Drisse',
    explanation: "La drisse hisse la voile (drisse de grand-voile, drisse de foc).",
  },
  {
    id: 'q20', category: 'greement-voilure', difficulty: 2, type: 'mcq3',
    question: "Comment s'appelle le cordage qui règle l'ouverture d'une voile ?",
    choices: ['Drisse', 'Écoute', 'Hale-bas'],
    answer: 'Écoute',
    explanation: "L'écoute est le cordage qui borde ou choque une voile pour l'orienter au vent.",
  },
  {
    id: 'q21', category: 'accastillage-manoeuvre', difficulty: 2, type: 'mcq3',
    question: "Comment s'appelle le treuil utilisé pour border les écoutes ?",
    choices: ['Winch', 'Cabestan', 'Poulie'],
    answer: 'Winch',
    explanation: "Le winch est un treuil à manivelle qui démultiplie l'effort sur les écoutes.",
    illustration: 'cockpit',
  },
  {
    id: 'q22', category: 'accastillage-manoeuvre', difficulty: 2, type: 'mcq3',
    question: "Quel petit accessoire à roue change la direction d'un cordage ?",
    choices: ['Manille', 'Poulie', 'Taquet'],
    answer: 'Poulie',
    explanation: "La poulie (parfois appelée réa) renvoie un cordage en changeant sa direction.",
  },
  {
    id: 'q23', category: 'accastillage-manoeuvre', difficulty: 2, type: 'mcq3',
    question: "Comment s'appelle le dispositif qui bloque un cordage tendu d'un seul geste ?",
    choices: ['Taquet coinceur', 'Manille', 'Cabillot'],
    answer: 'Taquet coinceur',
    explanation: "Le taquet coinceur (ou clamcleat) bloque le cordage par friction sans nœud.",
    illustration: 'cockpit',
  },
  {
    id: 'q24', category: 'interieur-securite', difficulty: 2, type: 'mcq3',
    question: "De quelle couleur est le feu de navigation à tribord ?",
    choices: ['Rouge', 'Vert', 'Blanc'],
    answer: 'Vert',
    explanation: "Tribord = vert. Bâbord = rouge. Poupe = blanc.",
    illustration: 'nav_lights',
  },
  {
    id: 'q25', category: 'interieur-securite', difficulty: 2, type: 'mcq3',
    question: "De quelle couleur est le feu de navigation à bâbord ?",
    choices: ['Rouge', 'Vert', 'Jaune'],
    answer: 'Rouge',
    explanation: "Bâbord = rouge. Pour mémoriser : « bâbord » et « rouge » comportent un « r ».",
    illustration: 'nav_lights',
  },
  {
    id: 'q26', category: 'interieur-securite', difficulty: 2, type: 'mcq3',
    question: "Quel équipement obligatoire permet d'éteindre un début d'incendie à bord ?",
    choices: ['Couverture isolante', 'Extincteur', 'Seau'],
    answer: 'Extincteur',
    explanation: "Un extincteur adapté (poudre ou CO₂) est obligatoire selon la catégorie de navigation.",
  },

  // ─── PALIER 3 — QCM 3 choix (technique, distracteurs piégeux) ───
  {
    id: 'q27', category: 'coque-pont', difficulty: 3, type: 'mcq3',
    question: "Le pavois désigne :",
    choices: [
      "Le rebord du cockpit autour de la descente",
      "La partie de la coque qui dépasse au-dessus du pont",
      "La moulure horizontale qui protège le franc-bord",
    ],
    answer: 'La partie de la coque qui dépasse au-dessus du pont',
    explanation: "Le pavois est le prolongement vertical de la coque au-dessus du pont. À ne pas confondre avec l'hiloire (autour du cockpit) ni le liston (moulure du flanc).",
  },
  {
    id: 'q28', category: 'coque-pont', difficulty: 3, type: 'mcq3',
    question: "Comment se nomme la surface plate à l'arrière qui ferme la coque ?",
    choices: ['Étambot', 'Tableau arrière', 'Bouchain'],
    answer: 'Tableau arrière',
    explanation: "Le tableau arrière est la cloison verticale qui termine la poupe. L'étambot est la pièce sous l'eau qui le prolonge.",
  },
  {
    id: 'q29', category: 'coque-pont', difficulty: 3, type: 'mcq3',
    question: "Le franc-bord d'un voilier, c'est :",
    choices: [
      "La hauteur de coque émergée entre la flottaison et le pont",
      "La partie immergée de la quille",
      "La largeur maximale du bateau",
    ],
    answer: "La hauteur de coque émergée entre la flottaison et le pont",
    explanation: "Le franc-bord est la distance verticale entre la ligne de flottaison et le pont. Plus il est élevé, plus le bateau est sec.",
  },
  {
    id: 'q30', category: 'greement-voilure', difficulty: 3, type: 'mcq3',
    question: "Comment se nomme le câble fixe qui tient le mât vers l'arrière ?",
    choices: ['Étai', 'Pataras', 'Bas-hauban'],
    answer: 'Pataras',
    explanation: "Le pataras (ou backstay) part de la tête de mât vers le tableau arrière. Sur le Garbi, il est généralement réglable.",
    illustration: 'rigging',
  },
  {
    id: 'q31', category: 'greement-voilure', difficulty: 3, type: 'mcq3',
    question: "Sur une voile, le « point d'amure » désigne :",
    choices: [
      "Le coin haut où s'attache la drisse",
      "Le coin avant bas, fixé au pied de mât ou à la bôme",
      "Le coin arrière où s'attache l'écoute",
    ],
    answer: 'Le coin avant bas, fixé au pied de mât ou à la bôme',
    explanation: "Trois coins sur une voile triangulaire : point de drisse (haut), point d'amure (avant bas), point d'écoute (arrière bas).",
    illustration: 'sail_anatomy',
  },
  {
    id: 'q32', category: 'greement-voilure', difficulty: 3, type: 'mcq3',
    question: "Que fait-on quand on « prend un ris » ?",
    choices: [
      "On hisse une voile supplémentaire",
      "On réduit la surface de la grand-voile par mauvais temps",
      "On affale complètement la grand-voile",
    ],
    answer: 'On réduit la surface de la grand-voile par mauvais temps',
    explanation: "Prendre un ris = ariser = diminuer la surface exposée au vent en repliant le bas de la grand-voile sur la bôme.",
  },
  {
    id: 'q33', category: 'accastillage-manoeuvre', difficulty: 3, type: 'mcq3',
    question: "À quoi sert le hale-bas de bôme ?",
    choices: [
      "Empêcher la bôme de monter et tenir la chute de la grand-voile",
      "Régler la tension du guindant de la grand-voile",
      "Bloquer la bôme contre le portique en navigation",
    ],
    answer: 'Empêcher la bôme de monter et tenir la chute de la grand-voile',
    explanation: "Le hale-bas tire la bôme vers le bas, ce qui aplatit la voile et améliore sa portance, surtout au près.",
  },
  {
    id: 'q34', category: 'accastillage-manoeuvre', difficulty: 3, type: 'mcq3',
    question: "Sur un rail d'écoute de grand-voile, comment s'appelle la pièce mobile sur laquelle s'attache la poulie d'écoute ?",
    choices: ['Chariot', 'Manille', 'Réa'],
    answer: 'Chariot',
    explanation: "Le chariot coulisse sur le rail (la barre d'écoute) et permet de régler la position d'amure du grand-voile en travers.",
  },
  {
    id: 'q35', category: 'accastillage-manoeuvre', difficulty: 3, type: 'mcq3',
    question: "La barre d'écoute de grand-voile est :",
    choices: [
      "Le rail transversal sur lequel coulisse le chariot d'écoute",
      "Une barre métallique qui rigidifie la bôme",
      "Le levier qui commande le safran",
    ],
    answer: 'Le rail transversal sur lequel coulisse le chariot d\'écoute',
    explanation: "La barre d'écoute (ou rail d'écoute) traverse le cockpit ou le roof et porte le chariot d'écoute de grand-voile.",
  },
  {
    id: 'q36', category: 'interieur-securite', difficulty: 3, type: 'mcq3',
    question: "Comment se nomme la pièce principale habitable à l'intérieur du bateau ?",
    choices: ['Cabine arrière', 'Carré', 'Cambuse'],
    answer: 'Carré',
    explanation: "Le carré est la pièce centrale, souvent autour de la table à manger. Sur le Garbi il est très compact.",
  },
  {
    id: 'q37', category: 'interieur-securite', difficulty: 3, type: 'mcq3',
    question: "Comment se nomme l'endroit où l'on consulte les cartes marines à bord ?",
    choices: ['Cambuse', 'Table à cartes', 'Poste de barre'],
    answer: 'Table à cartes',
    explanation: "La table à cartes est le poste du chef de bord pour la navigation. Sur un 6m, elle est souvent rabattable.",
  },
  {
    id: 'q38', category: 'interieur-securite', difficulty: 3, type: 'mcq3',
    question: "À quoi sert principalement la VHF marine à bord ?",
    choices: [
      "Recevoir la radio FM",
      "Communiquer avec d'autres bateaux et les secours (canal 16)",
      "Mesurer la vitesse du vent",
    ],
    answer: "Communiquer avec d'autres bateaux et les secours (canal 16)",
    explanation: "La VHF marine est l'outil de communication principal en mer. Le canal 16 est dédié à la veille et à la détresse.",
  },

  // ─── PALIER 4 — Saisie texte (expert) ───────────────────────────
  {
    id: 'q39', category: 'coque-pont', difficulty: 4, type: 'fill',
    question: "La pièce qui prolonge l'étrave sous l'eau jusqu'à la quille s'appelle l'_____.",
    answer: 'étambot',
    acceptedAnswers: ['etambot', 'etrave', 'brion'],
    correctAnswers: ['étambot', 'etambot'],
    explanation: "Sur certains plans on parle aussi de « brion ». L'étambot est plutôt à l'arrière, mais le terme est couramment associé à la pièce d'extrémité de la quille.",
  },
  {
    id: 'q40', category: 'coque-pont', difficulty: 4, type: 'text',
    question: "Comment appelle-t-on l'arête longitudinale qui marque la transition entre les fonds plats et les flancs de la coque ?",
    answer: 'bouchain',
    correctAnswers: ['bouchain', 'le bouchain'],
    explanation: "Le bouchain est l'arête où le fond rejoint le bordé. Un bouchain « vif » est anguleux, un bouchain « rond » est arrondi.",
  },
  {
    id: 'q41', category: 'coque-pont', difficulty: 4, type: 'fill',
    question: "L'ouverture pratiquée dans le pont par laquelle passe le mât s'appelle l'_____.",
    answer: 'étambrai',
    correctAnswers: ['étambrai', 'etambrai', "l'etambrai", "l'étambrai"],
    explanation: "L'étambrai guide le mât au passage du pont. Sur le Garbi, le mât est posé sur le pont avec un étambrai renforcé.",
  },
  {
    id: 'q42', category: 'greement-voilure', difficulty: 4, type: 'text',
    question: "Comment se nomme le foc géant, plus grand que le foc, qui recouvre une partie de la grand-voile ?",
    answer: 'génois',
    correctAnswers: ['génois', 'genois', 'le genois', 'le génois'],
    explanation: "Le génois est une voile d'avant de grande taille (souvent 130 % à 150 % de la base). Très courant sur les croiseurs côtiers.",
  },
  {
    id: 'q43', category: 'greement-voilure', difficulty: 4, type: 'fill',
    question: "La voile très légère, ronde et colorée que l'on hisse par vent arrière s'appelle le _____.",
    answer: 'spi',
    correctAnswers: ['spi', 'spinnaker', 'le spi'],
    explanation: "Le spi (spinnaker) est une voile creuse en nylon utilisée aux allures portantes (vent arrière, largue).",
  },
  {
    id: 'q44', category: 'greement-voilure', difficulty: 4, type: 'fill',
    question: "Le bord d'attaque vertical d'une voile (qui longe le mât pour la grand-voile) s'appelle le _____.",
    answer: 'guindant',
    correctAnswers: ['guindant', 'le guindant'],
    explanation: "Trois bords sur une voile : guindant (avant), chute (arrière), bordure (bas). Le guindant longe le mât ou l'étai.",
    illustration: 'sail_anatomy',
  },
  {
    id: 'q45', category: 'accastillage-manoeuvre', difficulty: 4, type: 'text',
    question: "Comment s'appelle la pièce métallique en U avec axe à vis qui permet de raccorder rapidement deux éléments ?",
    answer: 'manille',
    correctAnswers: ['manille', 'la manille'],
    explanation: "La manille est l'élément de liaison universel à bord : elle relie écoutes, drisses, voiles, ancres, etc.",
  },
  {
    id: 'q46', category: 'accastillage-manoeuvre', difficulty: 4, type: 'fill',
    question: "L'ensemble de coinceurs et poulies regroupés sur le roof pour renvoyer les manœuvres au cockpit s'appelle le _____.",
    answer: 'piano',
    correctAnswers: ['piano', 'le piano'],
    explanation: "Le « piano » regroupe les coinceurs côte à côte, comme les touches d'un piano, pour bloquer drisses et bosses de ris.",
  },
  {
    id: 'q47', category: 'accastillage-manoeuvre', difficulty: 4, type: 'text',
    question: "Comment se nomme le système de bout qui règle la tension du guindant de la grand-voile depuis le bas du mât ?",
    answer: 'cunningham',
    correctAnswers: ['cunningham', 'le cunningham'],
    explanation: "Le cunningham retend le guindant pour aplatir la grand-voile dans la brise. Inventé par Briggs Cunningham.",
  },
  {
    id: 'q48', category: 'interieur-securite', difficulty: 4, type: 'fill',
    question: "Le bout flottant qui relie l'ancre à une bouée pour la repérer ou la décrocher s'appelle l'_____.",
    answer: 'orin',
    correctAnswers: ['orin', "l'orin"],
    explanation: "L'orin est attaché au diamant de l'ancre. Il sert à signaler le mouillage et, si besoin, à dégager une ancre coincée.",
  },
  {
    id: 'q49', category: 'interieur-securite', difficulty: 4, type: 'text',
    question: "Comment appelle-t-on le coin cuisine d'un voilier ?",
    answer: 'cambuse',
    correctAnswers: ['cambuse', 'la cambuse', 'kitchenette'],
    explanation: "La cambuse désigne le coin cuisine et le rangement des vivres. Sur un Garbi elle est minuscule, souvent un réchaud à cardan.",
  },
  {
    id: 'q50', category: 'interieur-securite', difficulty: 4, type: 'fill',
    question: "L'instrument sonore obligatoire à bord pour signaler sa présence dans le brouillard est la _____ de brume.",
    answer: 'corne',
    correctAnswers: ['corne', 'corne de brume'],
    explanation: "La corne de brume émet un signal sonore réglementé (un long, deux courts, etc.) pour signaler sa présence par visibilité réduite.",
  },
];

// Vérification rapide à l'import : 50 questions, 4 paliers
if (QUESTIONS.length !== 50) {
  console.warn(`[questions] ${QUESTIONS.length} questions trouvées, attendu 50`);
}
