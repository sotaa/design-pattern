import Authenticator from "./authenticator";
import Compressor from "./compressor";
import HttpRequest from "./httpRequest";
import Logger from "./logger";
import WebServer from "./webServer";

class Main {
  constructor() {
    // authenticator --> logger --> compressor
    const compressor = new Compressor(null);
    const logger = new Logger(compressor);
    const auhtenticator = new Authenticator(logger);

    const server = new WebServer(auhtenticator);

    server.handle(new HttpRequest("admin", "1234"));
  }
}

export default Main;
