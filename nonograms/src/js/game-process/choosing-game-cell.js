import { playingFieldTacking } from "./definition-of-results";
import { initTimer, miliSeconds } from "../create-page-elements/timer-init";
import { showHints } from "../game-process/show-hints";

export function choosingGameCell() {
  const cells = document.querySelector(".wrapper-cells");
  cells.addEventListener("mousedown",clickCells)
  function clickCells (e) {
    let item = e.target;
    if (e.button === 0) {
      if (!e.target.classList.contains("game-cells")) return;
      paintOverCells(item);
      if (miliSeconds === 0) {
        initTimer();
      }
    } else if (e.button === 2) {
      if (!e.target.classList.contains("game-cells")) return;
      contextMenuListener(e);
      crossOutCells(item);
    }
  };

  function paintOverCells(item) {
    item.classList.remove("cells-cross");
    item.classList.toggle("cells-black");
    playingFieldTacking();
  }

  function crossOutCells(item) {
    item.classList.remove("cells-black");
    item.classList.toggle("cells-cross");
  }

  function contextMenuListener() {
    cells.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
  showHints(clickCells)
}
// window.oncontextmenu = function (e) {
//   e.preventDefault();
// };
