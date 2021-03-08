import { Command } from "./fx/command.interface";

class CompositeCommand implements Command {
  private commands: Command[] = [];

  add(command: Command) {
    this.commands.push(command);
  }

  execute(): void {
    this.commands.forEach((command) => {
      command.execute();
    });
  }
}

export default CompositeCommand;
