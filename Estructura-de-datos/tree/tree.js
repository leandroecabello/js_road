/*
      10 
  4       20
2   8   17  170 
*/

class Node {
  constructor(value) {
    // como se formara el nodo
    this.left = null; // valores del lado izquierdo - descendentes
    this.right = null; // valores del lado derecho - ascendentes
    this.value = value; // Valor de instancia del nodo
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Valor con el que iniciara el tree -  sera el primer nodo (elemento que se colocara)
  }

  // agregar nodos
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root; // si existe un root lo guardamos para ir siguiendo en el tree seguún corresponda
      while (true) {
        // si el value es menor al currentNode value, se agregara un elemento del lado izq
        if (value < currentNode.value) {
          // si no existe un elemento del lado izquierdo el currentNode pasara a tener el valor de un newNode
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left; // si existe inmediatamente va al lado izq debajo del root
        } else {
          // validación para agregar del lado derecho
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search() {
    // buscar un nodo
  }
}

const tree = new BinarySearchTree();
