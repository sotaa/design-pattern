import UiControl from "./uiControl";

class Button extends UiControl {
  private isEnabled!: boolean;

  getEnabled(): boolean {
    return this.isEnabled;
  }
  setEnabled(isEnabled: boolean): void {
    this.isEnabled = isEnabled;
    this.notifyObserver();
  }
}

export default Button;
