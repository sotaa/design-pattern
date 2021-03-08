import DialogBox from "./dialogBox";

class UiControl {
  protected owner: DialogBox;
  constructor(owner: DialogBox) {
    this.owner = owner;
  }
}

export default UiControl;
