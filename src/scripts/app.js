import Grid from "./grid";
import "../styles/header.scss";
import "../styles/drawArea/drawArea.scss";
import DrawOptions from "./drawOptions";

let grid = new Grid(20);

function initWindow() {
  grid.create();
}

initWindow();
