import Grid from "./grid";
import "../styles/header.scss";
import "../styles/drawArea/drawArea.scss";
import DrawOptions from "./drawOptions";

let grid = new Grid(16);
//let drawOptions = new DrawOptions(grid);
function initWindow() {
  grid.create();
}

initWindow();
