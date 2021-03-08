import AuditTrail from "./auditTrail";
import Task from "./task";

class TransferMoneyTask extends Task {
  protected doExecute(): void {
    console.log("Transfer Money");
  }
}

export default TransferMoneyTask;
