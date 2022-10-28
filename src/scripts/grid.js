import DrawOptions from "./drawOptions";
let isClicked = false;

export default class Grid {
  constructor(size) {
    let drawOptions = new DrawOptions(this);
    this.size = size;
    this.gridArray = [];
  }
  create() {
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    document.querySelector(".drawArea").appendChild(gridContainer);

    for (let i = 0; i < this.size * this.size; i++) {
      const gridSpace = document.createElement("div");
      gridContainer.appendChild(gridSpace);
      gridSpace.classList.add("gridSpace");
      this.gridArray.push(gridSpace);
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
    if (isClicked) {
      e.target.style.backgroundColor = drawOptions.getColor();
    }
  }

  //Doing it this way seemed to fix it. I think making this way makes it a public function and the way you currently have "changeColor" makes it private?
  getGridArray = function () {
    return this.gridArray;
  };
}
