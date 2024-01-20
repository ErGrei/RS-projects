import {playingFieldTacking} from './definition-of-results';

export function choosingGameCell() {
  const cells = document.querySelector(".wrapper");

  cells.addEventListener("click", (e) => {
    if (!e.target.classList.contains("game-cells")) return;
    let item = e.target;
    togleCells(item);
  });

  function togleCells(item) {
    item.classList.toggle("cells-black");
    playingFieldTacking()
  }
}
