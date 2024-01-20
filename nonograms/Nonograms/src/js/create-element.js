export default class СreatorElement {
  constructor(param) {
    this.element = null;
    this.setЕlement(param);
  }
  getElement (){
    return this.element;
  }

  setЕlement(param) {
    this.element = document.createElement(param.teg);
    this.setClassName(param);
    this.setTextContent(param);
  }
  setClassName(param){
    this.element.className = param.className;
  }
  setTextContent(param) {
    this.element.textContent = param.text;
  }


}
