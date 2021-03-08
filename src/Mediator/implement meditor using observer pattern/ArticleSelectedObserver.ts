import { EventHandler } from "./eventHandler.interface";

class ArticleSelectedObserver implements EventHandler {
  private method: any;
  constructor(method: any) {
    this.method = method;
  }
  handle(): void {
    this.method();
  }
}

export default ArticleSelectedObserver;
