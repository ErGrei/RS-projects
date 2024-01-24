import "../css/style.scss";
import "../css/root.css";
// import { originalMatrix } from "./game-process/definition-of-results";
import СreatorElement from "./create-page-elements/elements-creator";
import PlayingField from "./create-page-elements/creatjr-playing-field";
import CreateleftTips from "./create-page-elements/create-field-with-hints";
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
} from "./constants/constants-element-page";
import { gameMatrix } from "./create-page-elements/creating-game-matrix";
import { choosingGameCell } from "./game-process/choosing-game-cell";
import { filingLeftTips, filingTopTips } from "./create-page-elements/filling-page-elements";
import { topTips, leftTips } from "./create-page-elements/creating-hint-matrix";
const main = new СreatorElement(mainPage).getElement();
const wraperTipsElem = new СreatorElement(wraperTips).getElement();
const cornerPlayingFieldElem = new СreatorElement(cornerPlayingField).getElement();
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

document.body.append(main);

main.append(wraperTipsElem);
wraperTipsElem.append(cornerPlayingFieldElem);
wraperTipsElem.append(topTipsEl);
wraperTipsElem.append(leftTipsEl);
wraperTipsElem.append(createConteiner);


choosingGameCell();
filingLeftTips(leftTips)
filingTopTips(topTips)
console.table(topTips);
console.table(leftTips);


