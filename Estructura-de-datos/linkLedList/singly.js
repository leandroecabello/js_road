// 1 --> 2 -- > 3 --> 4 --> 5 --> null (espacio en memoria disponible por ejemplo para cuando se agregue un "6")

// Como se vería un Linked List Singly
/* let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
}; */

// Estructura de un nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinKedList {
  // Para instanciar se debe crear un elemento inicial
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // Apunta al head porque no existe otro valor y debe agregar un primer valor

    // conteo de elementos de la lista
    this.length = 1;
  }

  // Agregar primer metodo (Append)
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // Agregar al inicio
  prepend(value) {
    const newNode = new Node(value);

    // Agregar la cabeza anterior al nuevo nodo y convertir el nuevo nodo como nueva cabeza
    newNode.next = this.head; // se agrega nodo a la lista
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    // index mayor o igual a la long de la lista
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    // primero buscamos el indice (ejemplo: 1 - 2 - 3 -> estamos buscando 3 entonces firstPointer se posicionara en 2 para
    // poder luego usar su next como espacio de guardado)
    const firstPointer = this.getTheIndex(index - 1); // buscar por indice (el -1 es para poder ligar el next del anterior nodo)

    //Nodo que precisamos no se borre y se encuentre a la espera de un nuevo valor sino actua el garbage collector y lo elimina
    // Ej: estamos en 2 - guardamos el espacio de 3 para poder insertar nuestro nuevo valor y desplazar
    // hacia el siguiente espacio a 3
    const holdingPointer = firstPointer.next;

    // Anterior -> Nuevo -> Mover
    firstPointer.next = newNode; // nuestro nuevo nodo
    newNode.next = holdingPointer; // de esta manera logramos 1 - 2 - 2.5 - 3

    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    // Recorrer la lista hasta el indice enviado
    while (counter !== index) {
      // mientras el counter sea distinto al index que pasamos
      // el nodo actual se combertira en el proximo nodo y así sucesivamente hasta que de con el index que se paso
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  Delete(indice) {
    if (indice === 0) {
      this.head = this.head.next;
      this.lenght--;
      return this;
    }

    if (indice >= this.lenght) {
      let currentNode = this.head;
      while (currentNode.next != this.tail) {
        currentNode = currentNode.next;
      }

      this.tail = currentNode;
      currentNode.next = null;
      this.lenght--;
      return this;
    }

    const NodoDelete = this.getIndex(indice);
    let Prev = this.head;
    while (Prev.next != NodoDelete) {
      Prev = Prev.next;
    }

    Prev.next = NodoDelete.next;
    this.lenght--;
    return this;
  }
}

// Instanciar
let mySinglyLinkedList = new MySinglyLinKedList(1);

/* 
// Agregar al final
List.AddEnd(2);
List.AddEnd(3);
List.AddEnd(4);
List.AddEnd(5);
// Agregar al inicio
List.AddFirst(0);
List.AddEnd(6)

// Eliminar el primero
List.Eliminar(0)
// Eliminar el último
List.Eliminar(7)
// Eliminar intermedio
List.Eliminar(3) */
