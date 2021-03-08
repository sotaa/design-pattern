import { Tool } from "./tool.interface";

enum Tooltype {
  SELECTION,
  BRUSH,
  ERAER,
}

class Canvas {
  private currentTool!: Tool;
  constructor() {}

  mouseDown(): void {
    this.currentTool.mouseDown();
  }
  mouseUp(): void {
    this.currentTool.mouseUp();
  }

  getCurrentTool(): Tool {
    return this.currentTool;
  }
  setCurrentTool(currentTool: Tool): void {
    this.currentTool = currentTool;
  }
}

export default Canvas;
