type Listener<T> = (data: T) => void;

export class Observer<T> {
  private listeners: Listener<T>[] = [];

  subscribe(fn: Listener<T>) {
    this.listeners.push(fn);
  }

  unsubscribe(fn: Listener<T>) {
    this.listeners = this.listeners.filter(l => l !== fn);
  }

  notify(data: T) {
    this.listeners.forEach(fn => fn(data));
  }
}