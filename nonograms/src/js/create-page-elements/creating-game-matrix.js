import { originalMatrix } from "../game-process/definition-of-results";

export let gameMatrix = [];

const width = originalMatrix.length;
const height = originalMatrix.length;
createMatrix(width, height);

export function createMatrix(width, height) {

  document.documentElement.style.setProperty(
    "--field-size",
    originalMatrix.length * 26 + 2 + "px"
  );
  document.documentElement.style.setProperty("--grid", width);
  gameMatrix = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
  return gameMatrix;
}
