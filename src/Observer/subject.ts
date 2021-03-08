import { Observer } from "./observer.interface";

class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    this.observers.filter((o) => o != observer);
  }
  notifyObserver(): void {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

export default Subject;
