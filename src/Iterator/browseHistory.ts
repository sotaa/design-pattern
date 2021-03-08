import { Iterator } from "./iterator.interface";

class BrowseHistory {
  private urls: string[] = [];

  push(url: string) {
    this.urls.push(url);
  }
  pop() {
    const lastUrl = this.urls.pop();
    return lastUrl;
  }
  createIterator(): Iterator<string> {
    return new BrowseHistory.ListIterator(this);
  }

  static ListIterator = class implements Iterator<string> {
    private history!: BrowseHistory;
    private index: number = 0;

    constructor(history: BrowseHistory) {
      this.history = history;
    }

    hasNext(): boolean {
      return this.index < this.history.urls.length;
    }
    current(): string {
      return this.history.urls[this.index];
    }
    next(): void {
      this.index++;
    }
  };
}

export default BrowseHistory;
