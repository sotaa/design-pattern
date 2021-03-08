import Canvas from "./canvas";
import BrushTool from "./brushTool";
import EraserTool from "./eraserTool";
import SelectionTool from "./selectionTool";

class Main {
  constructor() {
    const canvas = new Canvas();
    // canvas.setCurrentTool(new SelectionTool());
    // canvas.setCurrentTool(new BrushTool());
    canvas.setCurrentTool(new EraserTool());
    canvas.mouseDown();
    canvas.mouseUp();
  }
}

export default Main;
