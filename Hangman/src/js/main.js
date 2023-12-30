import "../scss/style.scss";
const keyboard = [
  1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092,
  1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089,
  1084, 1080, 1090, 1100, 1073, 1102,
];
let key = [];
const input = document.createElement("input");
input.className = "input";
input.type = "text";
input.value = "";
document.body.append(input);

const div = document.createElement("div");
div.className = "conteiner";
document.body.append(div);

document.addEventListener("keydown", function (event) {
  key.push(event.key);
  input.value = key;
});

function init() {
  let aut = "";
  for (let i = 0; i < keyboard.length; i++) {
    aut += '<div class="key">' + String.fromCharCode(keyboard[i]) + "</div>";
  }
  document.querySelector(".conteiner").innerHTML = aut;
}
init();

const cont = document.querySelector(".conteiner");
cont.addEventListener("click", (e) => {
  if (!e.target.classList.contains("key")) return;
  let item = e.target.innerHTML;
  openLettersAndNotify(item);
  console.log(item);
});

//Игра
const words = [
  "апривет",
  "бпривет",
  "впривет",
  "гпривет",
  "дпривет",
  "епривет",
  "жпривет",
  "зпривет",
];
const word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
input.value = answerArray.join(" ");
let remainingLetters = word.length;

function openLettersAndNotify(item) {
  let guess = item.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      remainingLetters--;
      input.value = answerArray.join(" ");
    }
  }
}

