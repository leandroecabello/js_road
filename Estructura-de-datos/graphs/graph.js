/*
     2   -   0 // 2 conectado con 0 (nodos)
    / \   // pointers
   1 - 3 // 1 conectado con 3 (nodos)
*/

// Edge List
// Representa las conecciones en arrays que existen y las guarda en una array nuevo
const graphEL = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// indice     0     1       2       3
const graphAL = [[0], [2, 3], [0, 1, 3], [1, 2]];
// como objeto
const graphHT = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjancent Matrix

const graphAM = [
  [0, 0, 1, 0], // se coloca 1 como un true en la posición (indice) con el que conecta indice 0 conecta con indice 2
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

// como objeto
const graphObject = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
