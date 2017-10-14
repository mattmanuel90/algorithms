export const repeatedItem = <T>(array: T[]): T => {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) return item;
    else set.add(item);
  }
  throw new Error("No item repetition");
};