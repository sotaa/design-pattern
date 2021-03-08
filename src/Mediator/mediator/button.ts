import DialogBox from "./dialogBox";
import UiControl from "./uiControl";

class Button extends UiControl {
  private isEnabled!: boolean;

  constructor(owner: DialogBox) {
    super(owner);
  }

  getEnabled(): boolean {
    return this.isEnabled;
  }
  setEnabled(isEnabled: boolean): void {
    this.isEnabled = isEnabled;
    this.owner.changed(this);
  }
}

export default Button;
