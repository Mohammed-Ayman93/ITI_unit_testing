import { vi } from "vitest";
import { Observer } from "./observer";

describe("Observer Pattern", () => {
  test("should notify subscribers", () => {
    const observer = new Observer<number>();
    const fn = vi.fn();

    observer.subscribe(fn);
    observer.notify(10);

    expect(fn).toHaveBeenCalledWith(10);
  });

  test("should unsubscribe correctly", () => {
    const observer = new Observer<number>();
    const fn = vi.fn();

    observer.subscribe(fn);
    observer.unsubscribe(fn);
    observer.notify(5);

    expect(fn).not.toHaveBeenCalled();
  });
});