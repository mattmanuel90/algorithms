import { Stack } from "../ts-build/stack/stack.js";

describe("Stack", () => {
  it("will always return LIFO", () => {
    let stack = new Stack();
    [14, 33, 2000, 4, 30, 1].forEach(x => stack.push(x));
    expect(stack.size()).toEqual(6));
  });

  it("will return correct value after popping", () => {
    let stack = new Stack();
    [14, 33, 2000].forEach(x => stack.push(x));
    expect(stack.pop()).toEqual(2000));
  });
});