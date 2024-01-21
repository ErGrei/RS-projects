import СreatorElement from "./elements-creator";

export default class PlayingField {
  constructor(wraper, gameСells, paramMatrix) {
    this.element = null;
    this.setElements(wraper);
    this.setGameCells(wraper, gameСells, paramMatrix);
  }
  getElement() {
    return this.element;
  }
  setElements(param) {
    this.element = new СreatorElement(param).getElement();
  }

  setGameCells(wraper, gameСells, paramMatrix) {
    // let fieldWrapper = this.element.append(
    //   new СreatorElement(wraper).getElement()
    // );

    for (let i = 0; i < paramMatrix.length; i++) {
      for (let j = 0; j < paramMatrix[i].length; j++)
      this.element.append(new СreatorElement(gameСells).getElement());
    }
  }
}
