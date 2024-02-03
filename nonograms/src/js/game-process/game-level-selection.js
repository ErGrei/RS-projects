import { createMainMatrix } from "../game-process/page-assembly";
import { matrixChange } from "../game-process/definition-of-results";
import { creatingTopTips, creatingLeftTips, clinTips } from "../create-page-elements/creating-hint-matrix";
import { nameMatrix } from "../constants/constants-element-page";
import {resetTimer } from "../create-page-elements/timer-init";
export let lvl = 0;
export let picture = 0;

export function gameLvlSelect() {
  const lvlElement = document.querySelector(".lvl");
  lvlElement.addEventListener("change", lvlSelection);

  const pictureElement = document.querySelector(".picture");
  pictureElement.addEventListener("change", lvlSelection);

  function lvlSelection() {
    resetTimer()
    document.querySelector(".main").remove();
    clinTips()
    let lvlElementValue = lvlElement.options[lvlElement.selectedIndex].value;
    lvl = lvlElementValue;

    let pictureElementValue = pictureElement.options[pictureElement.selectedIndex].value;
    picture = pictureElementValue;

    console.log(pictureElement.options[0].textContent);
    console.log(lvl);
    let matrix = matrixChange(lvl, picture);
    document.documentElement.style.setProperty("--grid", matrix.length);
    let leftTipsArr = creatingLeftTips(matrix);
    let topTipsArr = creatingTopTips(matrix);
    createMainMatrix(matrix, topTipsArr, leftTipsArr);

  }
  lvlElement.onchange = function changeSelect(){
    resetTimer()
    let index = lvlElement.selectedIndex;
    for (let i = 0; i < nameMatrix[0].length; i++ ){
    
    pictureElement.options[i].textContent = nameMatrix[index][i]
  }
}
}