export interface DoublyLinkedListNode<T> {
  value: T;
  next?: DoublyLinkedListNode<T>;
  prev?: DoublyLinkedListNode<T>;
}

export class DoublyLinkedList<T> {
  public head?: DoublyLinkedListNode<T> = undefined;
  public tail?: DoublyLinkedListNode<T> = undefined;

  add(value: T) {
    const node = {
      value,
      next: undefined,
      prev: undefined
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head.prev = undefined;
    }
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = undefined;
      }
      return value;
    }
  }

  pop(): T | undefined {
    if (this.tail) {
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = undefined;
      }
      return value;
    }
  }

  size(): number {
    let size = 0;
    let current = this.head;
    while (current.next) {
      current = current.next;
      size++;
    }
    return size;
  }

  *values<T>() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}