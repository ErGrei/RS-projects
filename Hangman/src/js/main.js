import "../scss/style.scss";
import { keyboard, wraper } from "../js/constants";
import СreatorElement from "../js/create-element";

let key = [];
// const input = document.createElement("input");

const createWraper = new СreatorElement(wraper[0]);
const main = createWraper.element;
document.body.append(main);

const createInput = new СreatorElement(wraper[1]);
const input = createInput.element;
main.prepend(input)

const createConteiner = new СreatorElement(wraper[2]);
main.append(createConteiner.element)
// const main = document.createElement("main");
// function createWrapper(className) {
//   main.className = className;
//   document.body.append(main);
// }
// createWrapper("wrapper");

// function createInput(className, type, value) {
//   input.className = className;
//   main.prepend(input);
// }
// createInput("input", "text", "");

// function createConteiner(className) {
//   const div = document.createElement("div");
//   div.className = className;
//   main.append(div);
// }
// createConteiner("attempt__counter");
// createConteiner("conteiner");

document.addEventListener("keydown", function (event) {
  for (let i = 0; i < keyboard.length; i++) {
    if (event.key.toLowerCase() === keyboard[i])
      openLettersAndNotify(event.key);
  }
});

function init(keyboard) {
  let aut = "";
  for (let i = 0; i < keyboard.length; i++) {
    aut += '<div class="key">' + keyboard[i] + "</div>";
  }
  document.querySelector(".conteiner").innerHTML = aut;
}
init(keyboard);

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
let attemptCounter = 6;
document.querySelector(".attempt__counter").innerHTML =
  "число попыток" + " " + attemptCounter;
function openLettersAndNotify(item) {
  let guess = item.toLowerCase();
  let correctLetter = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      remainingLetters--;
      correctLetter = true;
      input.value = answerArray.join(" ");
    }
  }
  if (!correctLetter) {
    attemptCounter--;
    document.querySelector(".attempt__counter").innerHTML =
      "число попыток" + " " + attemptCounter;
  }
  if (attemptCounter === 0) {
    createConteiner("loss");
    document.querySelector(".loss").innerHTML =
      "Вы проиграли загаданное слово" + " " + word;
  }
}
