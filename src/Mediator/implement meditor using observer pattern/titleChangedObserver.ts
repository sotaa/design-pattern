import { EventHandler } from "./eventHandler.interface";

class TitleChangedObserver implements EventHandler {
  private method: any;
  constructor(method: any) {
    this.method = method;
  }
  handle(): void {
    this.method();
  }
}

export default TitleChangedObserver;
