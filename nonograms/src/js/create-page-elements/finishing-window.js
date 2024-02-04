import { finalTitle, mainPage } from "../constants/constants-element-page";
import СreatorElement from "./elements-creator";
import { minits, seconds, stopTimer } from "./timer-init";
import { audioWinGame } from "./musick-mode";

import { newGame } from "../main";

export function resultGame() {
  document.querySelector(".main").remove();
  const main = new СreatorElement(mainPage).getElement();
  const wraper = document.createElement("div");
  wraper.className = "final-wraper";
  document.body.append(main);
  audioWinGame();
  stopTimer();
  const finalTitlePage = new СreatorElement(finalTitle).getElement();
  main.append(wraper);
  wraper.append(finalTitlePage);
  let min;
  let sec;
  if (seconds <= 9) {
    sec = "0" + seconds;
  }
  if (seconds > 9) {
    sec = seconds;
  }
  if (minits <= 9) {
    min = "0" + minits;
  }
  if (minits > 9) {
    min = minits;
  }
  document.querySelector(".final-title").innerHTML +=
    min + ":" + sec + " " + "seconds!";

  winBtnNewGame();
}

function winBtnNewGame() {
  const main = document.querySelector(".final-wraper");
  const button = document.createElement("button");
  button.className = "new-game-btn button";
  button.textContent = "New game";
  main.append(button);

  button.addEventListener("click", newGameBtn);
}

function newGameBtn() {
  document.querySelector(".main").remove();
  document.querySelector(".header").remove();
  newGame();

}
