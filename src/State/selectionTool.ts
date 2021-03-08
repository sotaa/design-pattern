import { Tool } from "./tool.interface";

class SelectionTool implements Tool {
  mouseDown() {
    console.log("Selection icon");
  }
  mouseUp() {
    console.log("Draw dashed rectangle");
  }
}

export default SelectionTool;
