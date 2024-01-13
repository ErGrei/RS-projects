import "../scss/style.scss";
import {
  keyboard,
  pageElements,
  elementGallow,
  elementScaffold,
  playingField,
  attemptCounterConst,
  words,
  createModalWindow,
} from "../js/constants";
import СreatorElement from "../js/create-element";
import GallowsCreate from "../js/gallows";
game();

function game() {
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

  function modalWindow(createModalWindow) {
    const wraperModalWindow = new СreatorElement(createModalWindow[0]).element;
    main.append(wraperModalWindow);
    const contentModalWindow = new СreatorElement(createModalWindow[1]).element;
    wraperModalWindow.append(contentModalWindow);
    const buttonModalWindow = new СreatorElement(createModalWindow[2]).element;
    contentModalWindow.append(buttonModalWindow);
  }

  document.addEventListener("keyup", keyboardUutput);
  function keyboardUutput(event) {
    for (let i = 0; i < virtualkeyboard.length; i++) {
      if (event.key.toLowerCase() === virtualkeyboard[i]) {
        openLettersAndNotify(event.key);
        console.log(virtualkeyboard.indexOf(event.key.toString()));
        virtualkeyboard.splice(
          virtualkeyboard.indexOf(event.key.toString()),
          1
        );
        initVirtualKeyboard(virtualkeyboard);
      }
    }
  }

  function initVirtualKeyboard(virtualkeyboard) {
    let aut = "";
    for (let i = 0; i < virtualkeyboard.length; i++) {
      aut += '<div class="key">' + virtualkeyboard[i] + "</div>";
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
    initVirtualKeyboard(virtualkeyboard);
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
  let remainingLetters = word.length;
  let attemptCounter = 6;
  let index = 0;
  const divConteiner = document.querySelector(".span");
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
      const createGallows = new СreatorElement(elementGallow[index]);
      divConteiner.append(createGallows.element);
      index++;
    }
    if (attemptCounter === 0) {
      modalWindow(createModalWindow);
      document.removeEventListener("keyup", keyboardUutput);
      document.querySelector(".result-content").innerHTML +=
        "Вы проиграли загаданное слово:" + " " + word.toUpperCase();
      document.querySelector(".result-button").addEventListener("click", () => {
        main.remove();
        game();
      });
    }
    if (remainingLetters === 0) {
      modalWindow(createModalWindow);
      document.removeEventListener("keyup", keyboardUutput);
      document.querySelector(".result-content").innerHTML +=
        "Вы выиграли загаданное слово:" + " " + word.toUpperCase();
      document.querySelector(".result-button").addEventListener("click", () => {
        main.remove();
        game();
      });
    }
  }
}
