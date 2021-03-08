import CustomerService from "./customerService";
import { Command } from "./fx/command.interface";

class AddCustomerCommand implements Command {
  service: CustomerService;

  constructor(service: CustomerService) {
    this.service = service;
  }

  execute(): void {
    this.service.addCustomer();
  }
}

export default AddCustomerCommand;
