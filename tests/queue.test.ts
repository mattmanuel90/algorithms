import { Queue } from "../ts-build/queue/queue.js";

describe("Queue", () => {
  it("will always return FIFO", () => {
    let queue = new Queue();
    [1, 33, 2000, 4, 30, 1].forEach(x => queue.enqueue(x));
    expect(queue.dequeue()).toEqual(1));
  });

  it("will always return FIFO in order", () => {
    let queue = new Queue();
    [1, 33, 2000, 4, 30, 1].forEach(x => queue.enqueue(x));
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual(4));
  });
});