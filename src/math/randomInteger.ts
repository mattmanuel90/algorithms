export const randomInt = (start: number, before: number) => {
  return start + Math.floor(Math.random() * (before - start));
};