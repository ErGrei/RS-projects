export function filingLeftTips(arr) {
  const fillableElement = document.querySelectorAll(".left-tips-elem");
  document.documentElement.style.setProperty("--left-tips-col", arr[0].length);
  let count = 0;
  let y = arr.length - 1;
  let x = arr[0].length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][x - j] !== 0) {
        fillableElement[count].innerHTML = arr[i][x - j];
      } else {
        fillableElement[count].innerHTML = "";
      }
      count++;
    }
  }
}

export function filingTopTips(arr) {
  const fillableElement = document.querySelectorAll(".top-tips-elem");
  
  let count = 0;
  let lastElem = arr[0].length - 1;
  for (let i = 0; i < arr[i].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][lastElem] !== 0) {
        fillableElement[count].innerHTML = arr[j][lastElem];
      } else {
        fillableElement[count].innerHTML = "";
      }
      count++
    }
    lastElem--
  }
}
