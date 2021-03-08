import AuditTrail from "./auditTrail";
import Task from "./task";

class GenerateReportTask extends Task {
  protected doExecute(): void {
    console.log("Generate Report");
  }
}

export default GenerateReportTask;
