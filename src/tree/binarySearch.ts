export const binarySearch = (
  array: number[],
  element: number,
  start = 0,
  end = array.length - 1
): number => {
  if (end < start) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if(element === array[middle]) {
    return middle;
  } else if (element < array[middle]) {
    return binarySearch(array, element, start, middle - 1)
  } else {
    return binarySearch(array, element, middle + 1, end);
  }
};
