import Grid from "./grid";
import "../styles/header.scss";
import "../styles/drawArea/drawArea.scss";
import DrawOptions from "./drawOptions";

let grid = new Grid(16);

function addAllEventListeners() {
  let showGridButton = document.querySelector(".showGrid");
  let clearButton = document.querySelector(".clear");
  let eraserButton = document.querySelector(".eraser");
  let pencilButton = document.querySelector(".pencil");
  clearButton.addEventListener("mousedown", () => DrawOptions.clear(grid));
  eraserButton.addEventListener("click", () => DrawOptions.eraser());
  pencilButton.addEventListener("click", () => DrawOptions.pencil());
  showGridButton.addEventListener("click", () => DrawOptions.showGrid(grid));
}

addAllEventListeners();
