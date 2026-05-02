import {
  add,
  isPrime,
  reverseString,
  getCharactersCount,
  formatDate,
  validatePassword,
  maskCardNumber,
  range,
  groupBy,
  deepEqual
} from "./utils";

describe("Utils Functions", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("isPrime", () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(8)).toBe(false);
  });

  test("reverseString", () => {
    expect(reverseString("abc")).toBe("cba");
  });

  test("getCharactersCount", () => {
    expect(getCharactersCount("aab")).toEqual({ a: 2, b: 1 });
  });

  test("formatDate", () => {
    expect(formatDate(new Date("2024-01-01"))).toBe("2024-01-01");
  });

  test("validatePassword", () => {
    expect(validatePassword("Abc123!@")).toBe(true);
    expect(validatePassword("weak")).toBe(false);
  });

  test("maskCardNumber", () => {
    expect(maskCardNumber("1234567812345678"))
      .toBe("************5678");
  });

  test("range", () => {
    expect(range(1, 5)).toEqual([1,2,3,4,5]);
  });

  test("groupBy", () => {
    const data = [
      { type: "a" },
      { type: "b" },
      { type: "a" }
    ];
    expect(groupBy(data, "type")).toEqual({
      a: [{ type: "a" }, { type: "a" }],
      b: [{ type: "b" }]
    });
  });

  test("deepEqual", () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
  });
});