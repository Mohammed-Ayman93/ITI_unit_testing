import { add, formatDate, isPrime } from "./math";

test("add tow numbers", () => {
  expect(add(2, 3)).toBe(5);
});
describe("is Prime tests for prime numbers", () => {
  test("is prime for 2 ", () => {
    expect(isPrime(2)).toBe(true);
  });
  test("is prime for 3 ", () => {
    expect(isPrime(3)).toBe(true);
  });
  test("is prime for 5 ", () => {
    expect(isPrime(5)).toBe(true);
  });
  test("is prime for 13 ", () => {
    expect(isPrime(13)).toBe(true);
  });
  test("is prime for 59 ", () => {
    expect(isPrime(59)).toBe(true);
  });
});

describe("is Prime tests for Composite numbers", () => {
  test("is prime for 4 ", () => {
    expect(isPrime(4)).toBe(false);
  });
  test("is prime for 16 ", () => {
    expect(isPrime(16)).toBe(false);
  });
  test("is prime for 49 ", () => {
    expect(isPrime(49)).toBe(false);
  });
  test("is prime for 66 ", () => {
    expect(isPrime(66)).toBe(false);
  });
  test("is prime for 100 ", () => {
    expect(isPrime(100)).toBe(false);
  });
});



  describe('formatDate', () => {
    test('should format date as YYYY-MM-DD', () => {
      const date = new Date('2024-03-05');
      expect(formatDate(date)).toBe('2024-03-05');
    });

    test('should pad single digit month and day', () => {
      const date = new Date('2024-01-09');
      expect(formatDate(date)).toBe('2024-01-09');
    });
  });
