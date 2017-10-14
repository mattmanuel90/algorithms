import { MinimumArray, MaximumArray } from "../ts-build/array/array.js";

describe("Array", () => {
  it("will always return the minimum value ", () => {
    let minimumArray = new MinimumArray();
    [1, 33, 2000, 4, 30, 1].forEach(x => minimumArray.add(x));
    expect(minimumArray.extract()).toEqual(1));
  });

  it("will always return the maximum value ", () => {
    let maximumArray = new MaximumArray();
    [1, 33, 2000, 4, 30, 1].forEach(x => maximumArray.add(x));
    expect(maximumArray.extract()).toEqual(2000));
  });

});