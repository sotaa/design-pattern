import AddCustomerCommand from "./addCustomerCommand";
import BlackAndWhiteCommand from "./blackAndWhiteCommand";
import CompositeCommand from "./CompositeCommand";
import CustomerService from "./customerService";
import Button from "./fx/button";
import ResizeCommand from "./resizeCommand";

class Main {
  constructor() {
    const service = new CustomerService();
    const command = new AddCustomerCommand(service);
    const button = new Button(command);
    button.click();

    const composite = new CompositeCommand();
    composite.add(new ResizeCommand());
    composite.add(new BlackAndWhiteCommand());
    composite.execute();
  }
}

export default Main;
