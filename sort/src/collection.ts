
abstract class Sorter  {
    abstract length: number;

    sort() {
    
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (this.compare(j, j + 1) === true) {
            this.swap(j, j + 1);
          }
        }
      }
    }
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract  compare(leftIndex: number, rightIndex: number): boolean;
  }


export class NumberCollection extends Sorter {
  constructor(public data: number[]) { super()}
 
  length = this.data.length;

  swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}

export class CharCollection  extends Sorter {
  data: string[];

  length = this.data.length;

  constructor(public text: string) {
    super();
    this.data = text.split('');
  }

  swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }
}

export class Node {
  next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
 

  private head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  add(value: number) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next =  new Node(value)
    }
  }

  at(index: number): Node {
    if (this.head === null) {
      throw 'out of range';
    }
    let pos = 0;
    let node = this.head;
    while (node !== null) {
      if (pos === index) {
        return node;
      }
      pos++;
      node = node.next;
    }
    throw 'out of range';
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.value > rightNode.value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.value;

    leftNode.value = rightNode.value;
    rightNode.value = temp;
  }
}
