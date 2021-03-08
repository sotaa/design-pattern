import UiControl from "./uiControl";

abstract class DialogBox {
  abstract changed(uiControl: UiControl): void;
}

export default DialogBox;
