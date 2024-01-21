import "../css/style.scss";
import "../css/root.css";
import СreatorElement from "./create-page-elements/elements-creator";
import PlayingField from "./create-page-elements/creatjr-playing-field";
import CreateleftTips from "./create-page-elements/create-field-with-hints";
import {
  wraperPlayingField,
  gameСells,
  mainPage,
  wraperLeftTips,
} from "./constants/constants-element-page";
import { gameMatrix } from "./create-page-elements/creating-game-matrix";
import { choosingGameCell } from "./game-process/choosing-game-cell";
import { topTips, leftTips } from "./create-page-elements/creating-hint-matrix";
const main = new СreatorElement(mainPage).getElement();
const leftTipsEl = new CreateleftTips(
  wraperLeftTips,
  gameСells,
  leftTips
).getElement();

const createConteiner = new PlayingField(
  wraperPlayingField,
  gameСells,
  gameMatrix
).getElement();

document.body.append(main);

main.append(leftTipsEl);
main.append(createConteiner);

choosingGameCell();


console.table(topTips);
console.table(leftTips);
console.table(gameMatrix);