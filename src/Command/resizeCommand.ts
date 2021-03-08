import { Command } from "./fx/command.interface";

class ResizeCommand implements Command {
  execute(): void {
    console.log("Resize");
  }
}

export default ResizeCommand;
