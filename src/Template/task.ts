import AuditTrail from "./auditTrail";

abstract class Task {
  private auditTrail: AuditTrail;
  constructor() {
    this.auditTrail = new AuditTrail();
  }

  execute(): void {
    this.auditTrail.record();
    this.doExecute();
  }

  protected abstract doExecute(): void;
}

export default Task;
