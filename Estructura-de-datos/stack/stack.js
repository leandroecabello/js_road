class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode; // porque solo tendríamos este nodo
    } else {
      const holdingPointer = this.top; // para guardar el top actual y que no se pierda por el garbage collector
      this.top = newNode; // nuestro nuevo top
      this.top.next = holdingPointer; // el que esta debajo (el siguiente sacando el primero de la pila) del top
    }

    this.length++;

    return this;
  }
}

const myStack = new Stack();
