// 1. add
export const add = (a: number, b: number): number => a + b;

// 2. isPrime
export const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// 3. reverseString
export const reverseString = (str: string): string =>
  str.split("").reverse().join("");

// 4. getCharactersCount
export const getCharactersCount = (str: string): Record<string, number> => {
  return [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

// 5. formatDate
export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// 6. validatePassword
export const validatePassword = (password: string): boolean => {
  const regex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
};

// 7. maskCardNumber
export const maskCardNumber = (cardNumber: string): string => {
  const last4 = cardNumber.slice(-4);
  return "*".repeat(cardNumber.length - 4) + last4;
};

// 8. range (IMPORTANT)
export const range = (
  start: number,
  end: number,
  step = 1
): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

// 9. groupBy
export const groupBy = <T>(
  arr: T[],
  key: keyof T
): Record<string, T[]> => {
  return arr.reduce((acc, item) => {
    const group = String(item[key]);
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};

// 10. deepEqual (Bonus)
export const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};