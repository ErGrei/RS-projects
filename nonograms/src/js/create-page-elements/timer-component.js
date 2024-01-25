import СreatorElement from "../create-page-elements/elements-creator";
import { timerElements } from "../constants/constants-element-page";




function createElementTimer() {
  const wraperTimer = document.querySelector(".corner-playing-field");
  for (let i = 0; i < timerElements.length; i++)
    wraperTimer.append(new СreatorElement(timerElements[i]).getElement());
}

export function createTimer() {
  createElementTimer();

}




