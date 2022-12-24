/**
 * Complejidad Temporal -> O( 1 + n * n + 1 + 1 + 1 + 1 + 1) => O( n * n + 6 ) => simplificando => O( n^2 )
 * Complejidad Espacial -> O( n + 4 (constantes/variables)) => O(n)
 * Espacio Auxiliar -> O( 4 ) => O(1)
 */

// Complejidad Espacial O( n )
function bubbleSort(arreglo) {
  // O(1)
  let longitud = arreglo.length;
  // Complejidad Temporal O(n) / Complejidad Espacial O(1)
  for (let i = 0; i < longitud; i++) {
    // Complejidad Temporal O(n) / Complejidad Espacial O(1)
    for (let j = 0; j < longitud; j++) {
      // O(1)
      if (arreglo[j] > arreglo[j + 1]) {
        // O(1)
        let temporal = arreglo[j];
        // O(1)
        arreglo[j] = arreglo[j + 1];
        // O(1)
        arreglo[j + 1] = temporal;
      }
    }
  }
  // O(1)
  return arreglo;
}
