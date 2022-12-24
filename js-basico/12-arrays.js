/* 
- Un Array es un tipo de estructura de datos, objeto. 
- Guarda los datos en forma de lista.
.lenght devuelve la longitud del array.
*/

/* 
Metodos que permiten mutar el array:
    .push() agrega elementos al final de array.
    .pop() elimina un elemento del array.
    .unshift() agrega un elemento al array, pero lo agrega en primer lugar.
    **.shift() **elimina el elemento que está en el inicio del array.
    **.indexOf ** devuelve la posición de un elemento del array.
*/

let fruits = ["banana", "manzana", "frutilla"];

// agregar al final del array
let moreFruits = fruits.push("uvas");

// eliminar el ultimo elemento del array
let fruitless = fruits.pop("uvas");

/* **************************************************************************************************** */
// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]); // Los arrays iician en "0"

// === Metodos para mutar arrays ===

// .push();

var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
console.log(frutas);

// .pop();

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final
console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);