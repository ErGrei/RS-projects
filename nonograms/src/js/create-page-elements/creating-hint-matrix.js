import { originalMatrix } from "../game-process/definition-of-results";

export let topTips = [];
export let leftTips = [];
let elem = 0;
let accum = 0;
let elemleft = 0;
let accumleft = 0;

creatingLeftTips();
creatingTopTips();

function creatingTopTips() {
  const arr = [];
  topTips.push(arr);

  for (let i = 0; i < originalMatrix.length; i++) {
    if (originalMatrix[i][elem] === 1) {
      accum++;
    } else if (originalMatrix[i][elem] !== 1 && accum > 0) {
      topTips[elem].unshift(accum);
      accum = 0;
    }
    if (i === originalMatrix.length - 1 ) {
      topTips[elem].unshift(accum);
      accum = 0;
    }
  }
  elem++;
  if (elem !== originalMatrix.length) {
    creatingTopTips();
  }
}

function creatingLeftTips() {
  const arr = [];
  leftTips.push(arr);

  for (let i = 0; i < originalMatrix.length; i++) {
    if (originalMatrix[elemleft][i] === 1) {
      accumleft++;
    } else if (originalMatrix[elemleft][i] !== 1 && accumleft > 0) {
      leftTips[elemleft].unshift(accumleft);
      accumleft = 0;
    }
    if (i === originalMatrix.length - 1 ) {
      leftTips[elemleft].unshift(accumleft);
      accumleft = 0;
    }
  }
  elemleft++;
  if (elemleft !== originalMatrix.length) {
    creatingLeftTips();
  }
  matrixCorrect(leftTips)
}

function matrixCorrect(matrix) {
  let matrixLength = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrixLength < matrix[i].length) {
      matrixLength = matrix[i].length;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)
    if (matrixLength > matrix[i].length) {
      matrix[i].push(0);
    }
  }

}
