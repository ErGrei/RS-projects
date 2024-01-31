import { workingMatrix } from "../constants/constants-matrix";
import { gameMatrix } from "../create-page-elements/creating-game-matrix";
import { resultGame } from "../create-page-elements/finishing-window"


export const originalMatrix = workingMatrix[1]

export function playingFieldTacking() {

  const cells = document.querySelectorAll(".game-cells");

  let y = 0;
  let x = 0;
  let b = 0;
  for (let i = 0; i < cells.length; i++) {
    if (b <= gameMatrix.length) {
      if (cells[i].classList.contains("cells-black")) {
        gameMatrix[y][x] = 1;
      } else {
        gameMatrix[y][x] = 0;
      }
      x++;
      b++;
    }
    if (b == gameMatrix.length) {
      x = 0;
      b = 0;
      y++;
    }
  }
  gettingTheGameResult();
}

function gettingTheGameResult() {
  let res = true;
  ComparisonOfMatrices();
  function ComparisonOfMatrices() {
    for (let i = 0; i < gameMatrix.length; i++) {
      for (let j = 0; j < gameMatrix[i].length; j++) {
        if (gameMatrix[i][j] !== originalMatrix[i][j]) {
          res = false;
          break;
        }
      }
      if (res === false) {
        break;
      }
    }
  }
  if (res === true) {
    resultGame();
    console.log("Win!!");
  }
}
