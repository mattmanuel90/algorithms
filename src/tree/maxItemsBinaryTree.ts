export const maxItems = (height: number) => {
  return 2 ** height - 1;
};

export const maxHeight = (items: number) => {
  return Math.log2(items + 1);
};