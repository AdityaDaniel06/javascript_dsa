class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//  var first = new Node("Hi");
//  first.next = new Node("There");
//  first.next.next = new Node("How");
//  first.next.next.next = new Node("Are");
//  first.next.next.next.next = new Node("You");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding a new node
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removing a node
  pop(){
    
  }
}

let list1 = new SinglyLinkedList();
list1.push("hi");
list1.push("there");
