import СreatorElement from "../js/create-element";

export default class GallowsCreate {
  constructor(param, paramScaffold, paramMen, index) {
    this.element = null;
    this.setElements(param);
    this.setScaffold(paramScaffold);
    // this.setMen(paramMen,index);
  }
  setElements(param) {
    this.element = new СreatorElement(param).element;
  }
  setScaffold(paramScaffold) {
    for (let i = 0; i < paramScaffold.length; i++) {
      this.element.append(new СreatorElement(paramScaffold[i]).element);
    }
  }
  setMen(paramMen, index) {
    this.element.append(new СreatorElement(paramMen[index]).element);
  }
}
