export const add = (a: number, b: number) => {
  return a + b;
};

export const isPrime = (a: number) => {
  if (a === 1) {
    return false;
  }
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
};


export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}