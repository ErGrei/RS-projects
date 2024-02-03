import { originalMatrix } from "../game-process/definition-of-results";

export let topTips = [];
export let leftTips = [];
let elem = 0;
let accum = 0;
let elemleft = 0;
let accumleft = 0;
const gameMatrix = originalMatrix;
creatingLeftTips(gameMatrix);
creatingTopTips(gameMatrix);

export function clinTips () {
  topTips = [];
  leftTips = [];
}
export function creatingTopTips(Matrix) {

  const arr = [];
  topTips.push(arr);

  for (let i = 0; i < Matrix.length; i++) {
    if (Matrix[i][elem] === 1) {
      accum++;
    } else if (Matrix[i][elem] !== 1 && accum > 0) {
      topTips[elem].unshift(accum);
      accum = 0;
    }
    if (i === Matrix.length - 1 && accum > 0 ) {
      topTips[elem].unshift(accum);
      accum = 0;
    }
  }
  elem++;
  if (elem !== Matrix.length ) {
    creatingTopTips(Matrix);
  }
  elem = 0;
  matrixCorrect(topTips)
  return topTips;
}

export function creatingLeftTips(Matrix) {
  const arr = [];
  leftTips.push(arr);

  for (let i = 0; i < Matrix.length; i++) {
    if (Matrix[elemleft][i] === 1) {
      accumleft++;
    } else if (Matrix[elemleft][i] !== 1 && accumleft > 0) {
      leftTips[elemleft].unshift(accumleft);
      accumleft = 0;
    }
    if (i === Matrix.length - 1 && accumleft > 0) {
      leftTips[elemleft].unshift(accumleft);
      accumleft = 0;
    }
  }
  elemleft++;
  if (elemleft !== Matrix.length ) {
    creatingLeftTips(Matrix);
  }
  elemleft = 0;
matrixCorrect(leftTips)
  return leftTips;
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
function matrixTopCorrect(matrix) {
  let matrixLength = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrixLength < matrix[i].length) {
      matrixLength = matrix[i].length;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)
    if (matrixLength > matrix[i].length) {
      matrix[i].unshift(0);
    }
  }

}