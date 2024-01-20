import "../css/style.scss";
import PlayingField from './create-page-elements/creatjr-playing-field';
import {wraperPlayingField, gameСells} from './constants/constants-element-page';
import {workingMatrix} from './constants/constants-matrix';
import {choosingGameCell} from './game-process/choosing-game-cell';
const createConteiner = new PlayingField(wraperPlayingField, gameСells, workingMatrix).getElement();
document.body.append(createConteiner);
choosingGameCell()

