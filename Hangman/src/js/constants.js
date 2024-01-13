export const keyboard = [
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
];
export const pageElements = [
  {
    teg: "main",
    className: "wrapper",
    text: "",
  },
  {
    teg: "input",
    className: "input",
    text: "",
  },
  {
    teg: "div",
    className: "conteiner",
    text: "",
  },
  {
    teg: "div",
    className: "attempt__counter",
    text: "",
  },
  {
    teg: "div",
    className: "loss",
    text: "",
  },
  {
    teg: "div",
    className: "span",
    text: "",
  },
];
export const elementScaffold = [
  {
    teg: "span",
    className: "scaffold-beam",
    text: "",
  },
  {
    teg: "span",
    className: "scaffold-support",
    text: "",
  },

  {
    teg: "span",
    className: "scaffold-rope",
    text: "",
  },
];
export const elementGallow = [
  {
    teg: "span",
    className: "head",
    text: "",
  },
  {
    teg: "span",
    className: "body",
    text: "",
  },
  {
    teg: "span",
    className: "left-hand",
    text: "",
  },

  {
    teg: "span",
    className: "right-hand",
    text: "",
  },
  {
    teg: "span",
    className: "left-leg",
    text: "",
  },
  {
    teg: "span",
    className: "right-leg",
    text: "",
  },
];
export const attemptCounterConst = 6;

export const playingField = [
  {
    teg: "div",
    className: "clue-conteiner",
    text: "Подсказка:",
  },
  {
    teg: "input",
    className: "input",
    text: "",
  },
  {
    teg: "div",
    className: "attempt__counter",
    text: "Всего попыток - 6  Использованно попыток - 0",
  },
  {
    teg: "p",
    className: "letters-used__title",
    text: "Использованные буквы:",
  },
  {
    teg: "div",
    className: "letters-used",
    text: "",
  },
];

export const words = [
  {
    clue: "лес, верстак, бревно, заноза",
    word: "дерево",
  },
  {
    clue: "шишка, праздник, зима, иголка",
    word: "елка",
  },
  {
    clue: "ферзь, шах, тактика, конь",
    word: "шахматы",
  },
  {
    clue: "тепло, энергия, сила, свет",
    word: "солнце",
  },
  {
    clue: "корабль, дельфин, медуза, матрос",
    word: "море",
  },
  {
    clue: "звезда, свобода, радуга, полет",
    word: "небо",
  },
  {
    clue: "гагарин, спутник, ракета, планета",
    word: "космос",
  },
  {
    clue: "нота, арфа, бах, концерт",
    word: "музыка",
  },
  {
    clue: "миф, волк, колобок, буратино",
    word: "сказка",
  },
  {
    clue: "восторг, успех, веселье, ребенок",
    word: "радость",
  },
];

export const createModalWindow = [
  {
    teg: "div",
    className: "result-wraper",
    text: "",
  },
  {
    teg: "div",
    className: "result-content",
    text: "",
  },
  {
    teg: "div",
    className: "result-content__Gallow",
    text: "",
  },
  {
    teg: "div",
    className: "result-content__title",
    text: "",
  },
  {
    teg: "button",
    className: "result-button",
    text: "Играть еще раз",
  },
];
export const createModalWindowElem = [
    {
    teg: "div",
    className: "result-content__gallow span",
    text: "",
  },
  {
    teg: "div",
    className: "result-content__title",
    text: "",
  },
  {
    teg: "button",
    className: "result-button",
    text: "Играть еще раз",
  },
];
export const createLosseGame = [
  {
    teg: "span",
    className: "scaffold-beam ",
    text: "",
  },
  {
    teg: "span",
    className: "scaffold-support ",
    text: "",
  },

  {
    teg: "span",
    className: "scaffold-rope ",
    text: "",
  },
  {
    teg: "span",
    className: "head losse",
    text: "",
  },
  {
    teg: "span",
    className: "body losse",
    text: "",
  },
  {
    teg: "span",
    className: "left-hand losse" ,
    text: "",
  },
  {
    teg: "span",
    className: "right-hand losse",
    text: "",
  },
  {
    teg: "span",
    className: "left-leg losse",
    text: "",
  },
  {
    teg: "span",
    className: "right-leg losse",
    text: "",
  },
]

export const createVictoryGame = [
    {
    teg: "span",
    className: "head_victory",
    text: "",
  },
  {
    teg: "span",
    className: "body_victory",
    text: "",
  },
  {
    teg: "span",
    className: "left-hand_victory" ,
    text: "",
  },
  {
    teg: "span",
    className: "right-hand_victory",
    text: "",
  },
  {
    teg: "span",
    className: "left-leg_victory",
    text: "",
  },
  {
    teg: "span",
    className: "right-leg_victory",
    text: "",
  },
]