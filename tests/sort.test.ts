import { bubbleSort } from "../ts-build/sort/bubbleSort.js";
import { heapSort } from "../ts-build/sort/heapSort.js";
import { insertionSort } from "../ts-build/sort/insertionSort.js";
import { mergeSort } from "../ts-build/sort/mergeSort.js";
import { quickSort } from "../ts-build/sort/quickSort.js";
import { radixSort } from "../ts-build/sort/radixSort.js";

describe("Sort", () => {
  it("will bubble sort correctly", () => {
    expect(bubbleSort([14, 33, 2000, 4, 30, 1])).toEqual([1,4,14,30,33,2000]);
  });

  it("will heap sort correctly", () => {
    expect(heapSort([14, 33, 2000, 4, 30, 1], (a, b) => a - b)).toEqual([1,4,14,30,33,2000]);
    expect(heapSort([14, 33, 2000, 4, 30, 1], (a, b) => b - a)).toEqual([2000,33,30,14,4,1]);
    
  });

  it("will insertion sort correctly", () => {
    expect(insertionSort([14, 33, 2000, 4, 30, 1])).toEqual([1,4,14,30,33,2000]);
  });

  it("will merge sort correctly", () => {
    expect(mergeSort([14, 33, 2000, 4, 30, 1])).toEqual([1,4,14,30,33,2000]);
  });

  it("will quick sort correctly", () => {
    expect(quickSort([14, 33, 2000, 4, 30, 1])).toEqual([1,4,14,30,33,2000]);
  });

  it("will radix sort correctly", () => {
    expect(radixSort([14, 33, 2000, 4, 30, 1])).toEqual([1,4,14,30,33,2000]);
  });
});