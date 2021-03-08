import DataSource from "./dataSource";
import { Observer } from "./observer.interface";

class SpreadSheet implements Observer {
  private dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  update(): void {
    console.log("SpreadSheet got notified." + this.dataSource.getValue());
  }
}

export default SpreadSheet;
