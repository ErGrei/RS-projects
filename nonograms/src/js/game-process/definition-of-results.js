import { workingMatrix } from "../constants/constants-matrix";

let currentGameMatrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export function playingFieldTacking() {
  const cells = document.querySelectorAll(".game-cells");

  let y = 0;
  let x = 0;
  let b = 0;

  for (let i = 0; i < cells.length; i++) {
    if (b <= 5) {
      if (cells[i].classList.contains("cells-black")) {
        currentGameMatrix[y][x] = 1;
      } else {
        currentGameMatrix[y][x] = 0;
      }
      x++;
      b++;
    }
    if (b == 5) {
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
    for (let i = 0; i < currentGameMatrix.length; i++) {
      for (let j = 0; j < currentGameMatrix[i].length; j++) {
        if (currentGameMatrix[i][j] !== workingMatrix[i][j]) {
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
    console.log("Win!!");
  }
}
