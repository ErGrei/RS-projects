// import {topTips, leftTips} from './create-page-elements/creating-hint-matrix';
import СreatorElement from "./elements-creator";

export default class CreateleftTips {
    constructor(wraper, gameСells, leftTips) {
      this.element = null;
      this.setElements(wraper);
      this.setGameCells( gameСells, leftTips);
    }
    getElement() {
      return this.element;
    }
    setElements(param) {
      this.element = new СreatorElement(param).getElement();
    }
  
    setGameCells( gameСells, paramMatrix) {
   
      for (let i = 0; i < paramMatrix.length; i++) {
        for (let j = 0; j < paramMatrix[i].length; j++)
        this.element.append(new СreatorElement(gameСells).getElement());
      }
    }
  }