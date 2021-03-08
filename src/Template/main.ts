import GenerateReportTask from "./generateReportTask";
import TransferMoneyTask from "./transferMoneyTask";

class Main {
  constructor() {
    const task = new TransferMoneyTask();
    task.execute();
    const task2 = new GenerateReportTask();
    task2.execute();
  }
}

export default Main;
