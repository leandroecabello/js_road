/**
 * Complejidad Temporal -> O( n + 3 ) => simplificando => O(n) => suma bloque de código
 * Complejidad Espacial -> O( n + 1) => simplificando => O(n) => suma constantes(variables)
 * Espacio Auxiliar -> O( n ) - O( 1 ) => simplificando => 0( 1 )
 */

// Complejidad Espacial O(n)
function linearSearch(arreglo, clave) {
  // Complejidad Temporal O(n) / Complejidad Espacial O(1)
  for (let indice = 0; indice < arreglo.length; indice++) {
    // O(1)
    if (arreglo[indice] === clave) {
      // O(1)
      return indice;
    }
  }
  // O(1)
  return -1;
}

let algoritmo = (x) => x ** 2 + 5;
