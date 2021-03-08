import Handler from "./handler";
import HttpRequest from "./httpRequest";

class Authenticator extends Handler {
  constructor(next: Handler) {
    super(next);
  }

  doHandle(request: HttpRequest): boolean {
    const isValid =
      request.getUsername() == "admin" && request.getPassword() == "1234";
    console.log("Authentication");
    return !isValid;
  }
}

export default Authenticator;
