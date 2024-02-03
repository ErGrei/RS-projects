import { originalMatrix } from "../game-process/definition-of-results";
import { stopTimer } from "../create-page-elements/timer-init";
let count = 0;

export function showHints(clickCells) {
  const wraperCells = document.querySelector(".wrapper-cells");
  
  const btnHints = document.querySelector(".hint-button");
  btnHints.addEventListener("click", () => {
    const cells = document.querySelectorAll(".game-cells");
    wraperCells.removeEventListener("mousedown", clickCells);
    stopTimer();
    for (let i = 0; i < originalMatrix.length; i++) {
      for (let j = 0; j < originalMatrix[i].length; j++) {
        if (originalMatrix[i][j] === 0) {
          cells[count].classList.add("cells-cross");
          count++;
        }
        if (originalMatrix[i][j] === 1) {
          cells[count].classList.add("cells-black");
          count++;
        }
      }
    }
    count = 0
  })

}
