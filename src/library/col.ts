export const col = (n: number, c = 2) => {
  return ('0'.repeat(c) + n).slice(-c);
};