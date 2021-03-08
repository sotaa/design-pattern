import { Command } from "./fx/command.interface";

class BlackAndWhiteCommand implements Command {
  execute(): void {
    console.log("Black And White");
  }
}

export default BlackAndWhiteCommand;
