import { createMainMatrix } from "../game-process/page-assembly";
import { matrixChange } from "../game-process/definition-of-results";
import { lvl, picture } from "./game-level-selection";
import { resetTimer } from "../create-page-elements/timer-init";
import {
  creatingTopTips,
  creatingLeftTips,
  clinTips,
} from "../create-page-elements/creating-hint-matrix";


export function createResetGame() {
  const navbar = document.querySelector(".navbar");
  const button = document.createElement("button");
  button.className = "reset-game button";
  button.textContent = "Reset game";
  navbar.append(button);

  button.addEventListener("click", resetGame);
}

function resetGame() {
 
    resetTimer();
    document.querySelector(".main").remove();
    clinTips();

    let matrix = matrixChange(lvl, picture);
    document.documentElement.style.setProperty("--grid", matrix.length);
    let leftTipsArr = creatingLeftTips(matrix);
    let topTipsArr = creatingTopTips(matrix);
    createMainMatrix(matrix, topTipsArr, leftTipsArr);
  }

