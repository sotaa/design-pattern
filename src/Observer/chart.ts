import DataSource from "./dataSource";
import { Observer } from "./observer.interface";

class Chart implements Observer {
  private dataSource: DataSource;
  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }
  update(): void {
    console.log("Chart got updated." + this.dataSource.getValue());
  }
}

export default Chart;
