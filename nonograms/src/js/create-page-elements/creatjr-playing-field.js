import СreatorElement from "./elements-creator";

export default class PlayingField {
  constructor(wraper, gameСells, paramMatrix) {
    this.element = null;
    this.setElements(wraper);
    this.setScaffold(gameСells, paramMatrix)
  }
  getElement() {
    return this.element;
  }
  setElements(param) {
    this.element = new СreatorElement(param).element;
  }
  setScaffold(gameСells, paramMatrix) {
    for (let i = 0; i < paramMatrix.length; i++) {
        for (let j =0; j <paramMatrix[i].length; j++)
      this.element.append(new СreatorElement(gameСells).element);
    }
  }
  setMen(paramMen, index) {
    this.element.append(new СreatorElement(paramMen[index]).element);
  }
}
