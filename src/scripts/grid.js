import DrawOptions from "./drawOptions";
let drawOptions = new DrawOptions();
let isClicked = false;

let gridArray = [];
export default class Grid {
  constructor(size) {
    this.size = size;
  }
  create() {
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    document.querySelector(".drawArea").appendChild(gridContainer);

    for (let i = 0; i < this.size * this.size; i++) {
      const gridSpace = document.createElement("div");
      gridContainer.appendChild(gridSpace);
      gridSpace.classList.add("gridSpace");
      gridArray.push(gridSpace);
      gridSpace.style.height = 100 / this.size + "%";
      gridSpace.style.width = 100 / this.size + "%";
      gridSpace.addEventListener("mouseover", this.changeColor);
      gridSpace.addEventListener("mousedown", this.changeColor);
      gridSpace.addEventListener("mouseup", this.changeColor);
    }
  }

  changeColor(e) {
    if (e.type == "mousedown") isClicked = true;
    if (e.type == "mouseup") isClicked = false;
    if (isClicked) e.target.style.backgroundColor = drawOptions.getColor();
  }
}
