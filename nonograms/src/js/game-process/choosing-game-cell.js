import { playingFieldTacking } from "./definition-of-results";

export function choosingGameCell() {
  const cells = document.querySelector(".wrapper-cells");

  cells.addEventListener("mousedown", (e) => {
    let item = e.target;
    if (e.button === 0) {
      if (!e.target.classList.contains("game-cells")) return;
      paintOverCells(item);
    } else if (e.button === 2) {
      if (!e.target.classList.contains("game-cells")) return;
      contextMenuListener(e);
      crossOutCells(item);
    }
  });

  function paintOverCells(item) {
    item.classList.toggle("cells-black");
    playingFieldTacking();
  }

  function crossOutCells(item) {
    item.classList.toggle("cells-cross");
  }

  function contextMenuListener() {
    cells.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
}
// window.oncontextmenu = function (e) {
//   e.preventDefault();
// };