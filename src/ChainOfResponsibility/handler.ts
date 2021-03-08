import HttpRequest from "./httpRequest";

abstract class Handler {
  private next: Handler | null;

  constructor(next: Handler | null) {
    this.next = next;
  }

  handle(request: HttpRequest): void {
    if (this.doHandle(request)) return;
    if (this.next != null) this.next.handle(request);
  }

  abstract doHandle(request: HttpRequest): boolean;
}

export default Handler;
