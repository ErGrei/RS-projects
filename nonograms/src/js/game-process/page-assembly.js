import "../../css/style.scss";
import "../../css/root.css";
// import { originalMatrix } from "./game-process/definition-of-results";
import СreatorElement from "../create-page-elements/elements-creator";
import PlayingField from "../create-page-elements/creatjr-playing-field";
import CreateleftTips from "../create-page-elements/create-field-with-hints";
import {
  wraperPlayingField,
  gameСells,
  mainPage,
  wraperLeftTips,
  leftTipsElem,
  topTipsElem,
  wraperTips,
  wrapertopTips,
  cornerPlayingField,
  title,
  header,
  navbar,
  hintButton,
} from "../constants/constants-element-page";
import { gameMatrix } from "../create-page-elements/creating-game-matrix";
import { choosingGameCell } from "./choosing-game-cell";
import {
  filingLeftTips,
  filingTopTips,
  crossingOutCells,
} from "../create-page-elements/filling-page-elements";
import {
  topTips,
  leftTips,
 
} from "../create-page-elements/creating-hint-matrix";
import { createTimer } from "../create-page-elements/timer-component";

export function pageAassembly() {
  const main = new СreatorElement(mainPage).getElement();
  const headerPage = new СreatorElement(header).getElement();
  const wraperTipsElem = new СreatorElement(wraperTips).getElement();
  const cornerPlayingFieldElem = new СreatorElement(
    cornerPlayingField
  ).getElement();
  const titlePage = new СreatorElement(title).getElement();

  const navbarPage = new СreatorElement(navbar).getElement();

  const leftTipsEl = new CreateleftTips(
    wraperLeftTips,
    leftTipsElem,
    leftTips
  ).getElement();

  const topTipsEl = new CreateleftTips(
    wrapertopTips,
    topTipsElem,
    topTips
  ).getElement();

  const createConteiner = new PlayingField(
    wraperPlayingField,
    gameСells,
    gameMatrix
  ).getElement();
  const hintBnt = new СreatorElement(hintButton).getElement();


  document.body.append(main);
  document.body.prepend(headerPage);

  headerPage.append(navbarPage);
  headerPage.append(titlePage);
  navbarPage.append(hintBnt)
  main.append(wraperTipsElem);
  wraperTipsElem.append(cornerPlayingFieldElem);
  wraperTipsElem.append(topTipsEl);
  wraperTipsElem.append(leftTipsEl);
  wraperTipsElem.append(createConteiner);
  filingLeftTips(leftTips);
  filingTopTips(topTips);
  createTimer();

  choosingGameCell();
  crossingOutCells();
}
