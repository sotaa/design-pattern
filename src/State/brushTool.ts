import { Tool } from "./tool.interface";

class BrushTool implements Tool {
  mouseDown() {
    console.log("Brush icon");
  }
  mouseUp() {
    console.log("Draw a line");
  }
}

export default BrushTool;
