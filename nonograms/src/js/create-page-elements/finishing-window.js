import { finalTitle } from "../constants/constants-element-page";
import СreatorElement from "./elements-creator";
import { minits, seconds } from "./timer-init";


export function resultGame() {
 document.querySelector(".main").remove();
 document.querySelector(".header").remove();

  const finalTitlePage = new СreatorElement(finalTitle).getElement();
  document.body.append(finalTitlePage);
  document.querySelector(".title").innerHTML += minits + ':' + seconds + " " + 'секунд!';
}
