class Stopwatch {
  private isRunning: boolean = false;
  click(): void {
    if (this.isRunning) {
      this.isRunning = false;
      console.log("Stopped");
    } else {
      this.isRunning = true;
      console.log("Running");
    }
  }
}

export default Stopwatch;
