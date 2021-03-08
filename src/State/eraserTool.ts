import { Tool } from "./tool.interface";

class EraserTool implements Tool {
  mouseDown() {
    console.log("Eraser icon");
  }
  mouseUp() {
    console.log("Eraser something");
  }
}

export default EraserTool;
