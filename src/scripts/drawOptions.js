import Grid from "./grid";

let gridShown = true;
let storedColorValue = "";
let color = document.getElementById("colorPicker");
let showGridButton = document.querySelector(".showGrid");

export default class DrawOptions {
  //DrawOptions should be static, meaning it doesn't get an instance, so the constructor is never used

  //To make something static, you use the keyword static
  static getColor() {
    return color.value;
  }

  static clear(grid) {
    grid.getGridArray().forEach((element) => {
      element.style.backgroundColor = "white";
    });
  }
  static eraser() {
    storedColorValue = color.value;
    color.value = "#FFFFFF";
  }
  static pencil() {
    color.value = storedColorValue;
  }
  static showGrid(grid) {
    grid.getGridArray().forEach((element) => {
      if (gridShown) {
        element.style.border = "none";
        showGridButton.innerHTML =
          'Show Grid <i class="fa-regular fa-eye"></i>';
      } else {
        element.style.border = "thin solid black";
        showGridButton.innerHTML = 'Show Grid <i class="fa-solid fa-eye"></i>';
      }
    });
    gridShown = !gridShown;
  }
}
