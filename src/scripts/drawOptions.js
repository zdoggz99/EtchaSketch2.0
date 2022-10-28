import Grid from "./grid";

export default class DrawOptions {
  //DrawOptions should be static, meaning it doesn't get an instance, so the constructor is never used
  
  //To make something static, you use the keyword static
  static getColor() {
    let color = document.getElementById("colorPicker");
    return color.value;
  }
  static clear() {
    console.log('clear')
    let gridArray = Grid.getGridArray();
    gridArray.forEach(element => {
      element.style.backgroundColor = 'white'
    });
  }
  static eraser() {}
  static pencil() {}
  static showGrid() {}

  
}

