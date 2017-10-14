import { Heap } from "../ts-build/heap/heap.js";

describe("Heap", () => {
  it("will have correct size after populating heap", () => {
    let topDownHeap = new Heap<number>((a, b) => b - a);
    [1, 33, 2000, 4, 30, 1].forEach(x => topDownHeap.add(x));
    expect(topDownHeap.size()).toEqual(6));
  });

  it("will have correct size after populating heap and extracting rootNode", () => {
    let topDownHeap = new Heap<number>((a, b) => b - a);
    [1, 2000, 33].forEach(x => topDownHeap.add(x));
    topDownHeap.extractRoot();
    topDownHeap.extractRoot();
    expect(topDownHeap.size()).toEqual(1));
  });

  it("the peak value and size shall remain the same", () => {
    let topDownHeap = new Heap<number>((a, b) => b - a);
    [2000, 33, 1].forEach(x => topDownHeap.add(x));
    topDownHeap.extractRoot();
    topDownHeap.peek();
    topDownHeap.peek();
    topDownHeap.peek();
    expect(topDownHeap.peek()).toEqual(33));
  });

  it("will have correct output from largest to smallest", () => {
    let topDownHeap = new Heap<number>((a, b) => b - a);
    [2000, 4, 1].forEach(x => topDownHeap.add(x));
    expect(topDownHeap.extractRoot()).toEqual(2000));
  });

  it("will have correct output from smallest to largest", () => {
    let bottomDownHeap = new Heap<number>((a,b) => a - b);
    [2000, 6, 1].forEach(x => bottomDownHeap.add(x));
    expect(bottomDownHeap.extractRoot()).toEqual(1));
  });
});