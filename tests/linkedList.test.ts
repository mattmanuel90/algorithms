import { LinkedList } from "../ts-build/linkedList/singleLinkedList.js";
import { DoublyLinkedList } from "../ts-build/linkedList/doublyLinkedList.js";

describe("Linked Lists", () => {

  it("will create the linked lists correctly", () => {
    let list = new LinkedList();
    [1, 8, 4, 2].map(x => list.add(x));
    expect(list.size()).toEqual(3); 
    //[1,8], [8,4], [4,2]

    list = new DoublyLinkedList();
    [1, 8, 4, 2].map(x => list.add(x));
    expect(list.size()).toEqual(3); 
  });

  it("will traverse the single linked list correctly", () => {
    let list = new LinkedList();
    [1, 8, 4, 2].map(x => list.add(x));
    var generator = list.values();
    generator.next();
    generator.next();
    expect(generator.next().value).toEqual(4);

    list = new DoublyLinkedList();
    [1, 8, 4, 2].map(x => list.add(x));
    expect(list.pop()).toEqual(2); 

  });
});