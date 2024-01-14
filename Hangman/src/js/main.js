import "../scss/style.scss";
import {
  keyboard,
  pageElements,
  elementGallow,
  elementScaffold,
  playingField,
  enKey,
  words,
  createModalWindow,
  createModalWindowElem,
  createLosseGame,
  createVictoryGame,
} from "../js/constants";
import СreatorElement from "../js/create-element";
import GallowsCreate from "../js/gallows";
game();

function game() {
  let lettersUsed = [];
  let virtualkeyboard = Array.from(keyboard);
  const createWraper = new СreatorElement(pageElements[0]).element;
  const main = createWraper;
  document.body.append(main);
  createPlayingFiild(playingField);

  function createPlayingFiild(playingField) {
    for (let i = 0; i < playingField.length; i++) {
      const cplayingField = new СreatorElement(playingField[i]);
      main.append(cplayingField.element);
    }
  }
  const clueConteiner = document.querySelector(".clue-conteiner");
  const input = document.querySelector(".input");

  // const attemptsCounter = new СreatorElement(pageElements[3]);
  // main.append(attemptsCounter.element);

  const createConteiner = new СreatorElement(pageElements[2]);
  main.append(createConteiner.element);

  const createGallows = new GallowsCreate(
    pageElements[5],
    elementScaffold,
    elementGallow
  );
  main.prepend(createGallows.element);

  function modalWindow(createModalWindow, createModalWindowElem, resultGame) {
    const wraperModalWindow = new СreatorElement(createModalWindow[0]).element;
    main.append(wraperModalWindow);
    const contentModalWindow = new СreatorElement(createModalWindow[1]).element;
    wraperModalWindow.append(contentModalWindow);
    for (let i = 0; i < createModalWindowElem.length; i++) {
      const modalWindowElem = new СreatorElement(createModalWindowElem[i])
        .element;
      contentModalWindow.append(modalWindowElem);
    }
    const resultGameGallow = document.querySelector(".result-content__gallow");
    for (let i = 0; i < resultGame.length; i++) {
      const gameGallowElem = new СreatorElement(resultGame[i]).element;
      resultGameGallow.append(gameGallowElem);
    }
  }
function resetWarning(){
  document.querySelector(".checking__entered-letter").classList.remove("checking__done")
}
  document.addEventListener("keyup", keyboardUutput);
  function keyboardUutput(event) {
    for (let i = 0; i < virtualkeyboard.length; i++) {
      if (event.key.toLowerCase() === virtualkeyboard[i]) {
        openLettersAndNotify(event.key);
        virtualkeyboard.splice(
          virtualkeyboard.indexOf(event.key.toString()),
          1
        );
        lettersUsed.push(event.key.toString());
        initVirtualKeyboard(virtualkeyboard);
        initlettersUsed(lettersUsed);
      } 
      if (event.key.toLowerCase() === enKey[i]) {
        document.querySelector(".checking__entered-letter").classList.add("checking__done");
        setTimeout(resetWarning, 500);
      }
    }
  }

  function initlettersUsed(Arr) {
    let aut = "";
    for (let i = 0; i < Arr.length; i++) {
      aut += '<button class="key_used">' + Arr[i] + "</button>";
    }
    document.querySelector(".letters-used").innerHTML = aut;
  }

  function initVirtualKeyboard(virtualkeyboard) {
    let aut = "";
    for (let i = 0; i < virtualkeyboard.length; i++) {
      aut += '<button class="key">' + virtualkeyboard[i] + "</button>";
    }
    document.querySelector(".conteiner").innerHTML = aut;
  }
  initVirtualKeyboard(virtualkeyboard);

  const cont = document.querySelector(".conteiner");
  cont.addEventListener("click", (e) => {
    if (!e.target.classList.contains("key")) return;
    let item = e.target.innerHTML;
    virtualkeyboard.splice(virtualkeyboard.indexOf(item.toString()), 1);
    openLettersAndNotify(item);
    lettersUsed.push(item.toString());
    initVirtualKeyboard(virtualkeyboard);
    initlettersUsed(lettersUsed);
  });

  //Игра

  const a = words[Math.floor(Math.random() * words.length)];
  const word = a.word;
  console.log(word);
  clueConteiner.innerHTML += " " + a.clue;
  let answerArray = [];

  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  input.value = answerArray.join(" ");
  input.setAttribute("readonly", "readonly");
  let remainingLetters = word.length;
  let attemptCounter = 6;
  let attemptsUsed = 0;
  let index = 0;
  const divConteiner = document.querySelector(".span");
  document.querySelector(".attempt__counter").innerHTML =
    "Всего попыток: " +
    " " +
    attemptCounter +
    "<br> " +
    "Использованно попыток: " +
    " " +
    attemptsUsed;
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
      attemptsUsed++;
      document.querySelector(".attempt__counter").innerHTML =
        "Всего попыток: " +
        " " +
        attemptCounter +
        "<br> " +
        "Использованно попыток: " +
        " " +
        attemptsUsed;
      const createGallows = new СreatorElement(elementGallow[index]);
      divConteiner.append(createGallows.element);
      index++;
    }
    if (attemptCounter === 0) {
      modalWindow(createModalWindow, createModalWindowElem, createLosseGame);
      document.removeEventListener("keyup", keyboardUutput);
      document.querySelector(".result-content__title").innerHTML +=
        "Вы проиграли загаданное слово:" + " " + word.toUpperCase();
      document.querySelector(".result-button").addEventListener("click", () => {
        main.remove();
        game();
      });
    }
    if (remainingLetters === 0) {
      modalWindow(createModalWindow, createModalWindowElem, createVictoryGame);
      document.removeEventListener("keyup", keyboardUutput);
      document.querySelector(".result-content__title").innerHTML +=
        "Вы выиграли загаданное слово:" + " " + word.toUpperCase();
      document.querySelector(".result-button").addEventListener("click", () => {
        main.remove();
        game();
      });
    }
  }
}
