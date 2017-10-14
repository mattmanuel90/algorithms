import { binarySearch } from "../ts-build/tree/binarySearch.js";

describe("Queue", () => {
  it("will search for an element in a binary search tree", () => {
    expect(binarySearch([61,3213,6,1,312,7,14,61,7,3], 312)).toEqual(4);
  });
});