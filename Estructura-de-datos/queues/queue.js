class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Si hay elementos el newNode se guardara en el nodo siguiente
      // si esta [1] y llega 2 --> este ira a la cola por eso se guarda en last --> [1,2]
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // Eliminar el primer elemento
  }
}

const myQueue = new Queue();

// Obs: No dejar elementos sin un pointer si no se borraran en memoria
