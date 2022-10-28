import Grid from "./grid";

export default class DrawOptions {
  constructor(grid) {
    this.grid = grid;
  }
  getColor() {
    let color = document.getElementById("colorPicker");
    return color.value;
  }
  clear() {
    grid.getGridArray();
  }
  eraser() {}
  pencil() {}
  showGrid() {}

  addEventListeners() {
    showGridButton = document.querySelector("showGrid");
    clearButton = document.querySelector("clear");
    eraserButton = document.querySelector("eraser");
    clearButton = document.querySelector("pencil");
  }
}
