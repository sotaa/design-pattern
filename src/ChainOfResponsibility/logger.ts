import Handler from "./handler";
import HttpRequest from "./httpRequest";

class Logger extends Handler {
  constructor(next: Handler) {
    super(next);
  }

  doHandle(request: HttpRequest): boolean {
    console.log("Log");
    return false;
  }
}

export default Logger;
