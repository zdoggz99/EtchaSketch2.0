export default class DrawOptions {
  constructor() {}
  getColor() {
    let color = document.getElementById("colorPicker");
    return color.value;
  }
  clear() {}
  eraser() {}
  pencil() {}
}
