import Handler from "./handler";
import HttpRequest from "./httpRequest";

class WebServer {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  handle(request: HttpRequest): void {
    this.handler.handle(request);
  }
}

export default WebServer;
