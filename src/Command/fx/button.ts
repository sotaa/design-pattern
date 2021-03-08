import { Command } from "./command.interface";

class Button {
  private label!: string;
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  click() {
    this.command.execute();
  }

  getLabel(): string {
    return this.label;
  }
  setLabel(label: string): void {
    this.label = label;
  }
}

export default Button;
