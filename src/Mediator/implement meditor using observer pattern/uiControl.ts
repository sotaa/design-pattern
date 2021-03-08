import { EventHandler } from "./eventHandler.interface";

abstract class UiControl {
  private eventHandlers: EventHandler[] = [];

  addEventHandler(eventHandler: EventHandler): void {
    this.eventHandlers.push(eventHandler);
  }

  protected notifyObserver(): void {
    this.eventHandlers.forEach((eventHandler) => {
      eventHandler.handle();
    });
  }
}

export default UiControl;
