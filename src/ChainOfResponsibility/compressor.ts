import Handler from "./handler";
import HttpRequest from "./httpRequest";

class Compressor extends Handler {
  constructor(next: Handler | null) {
    super(next);
  }

  doHandle(request: HttpRequest): boolean {
    console.log("Compress");
    return false;
  }
}

export default Compressor;
