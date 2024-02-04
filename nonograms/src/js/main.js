import { pageAassembly } from "./game-process/page-assembly";
import { gameLvlSelect } from "./game-process/game-level-selection";
import { resetTimer } from "./create-page-elements/timer-init";
import { togleDarckMode } from "./create-page-elements/darck-mode";

newGame();

export function newGame() {
  pageAassembly();
  gameLvlSelect();
  resetTimer();
  document.documentElement.style.setProperty(
    "--fon",
    "rgb(248, 251, 251)"
  );
  document.documentElement.style.setProperty(
    "--fon-button",
    "rgb(197, 244, 244)"
  );
  document.documentElement.style.setProperty(
    "--fon-text",
    "rgba(12, 1, 96, 0.974)"
  );
  document.documentElement.style.setProperty(
    "--fon-cells",
    "azure"
  );
  document.documentElement.style.setProperty(
    "--fon-black",
    "black"
  );
  document.documentElement.style.setProperty(
    "--fon-cells-cross",
    "rgb(216, 221, 221)"
  );
  document.documentElement.style.setProperty(
    "--fon-cross-span",
    "#403f3d"
  );
}
// await newGameBtn()
// async function newGameBtn() {
//     document.querySelector(".new-game-btn").addEventListener("click", () => {
//         document.querySelector(".main").remove();
//         document.querySelector(".header").remove();
//         newGame();
//     });
// }
