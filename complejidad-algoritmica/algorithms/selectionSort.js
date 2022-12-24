/**
 * Complejidad Temporal -> O( n * n + 10 ) => simplificando => O( n^2 )
 * Complejidad Espacial -> O( n + 5 ) => simplificando => O(n)
 * Espacio Auxiliar -> O( 5 ) => simplificando => O(1)
 */

// Complejidad Espacial O(n)
function selectionSort(arreglo) {
  // O(1)
  let longitud = arreglo.length;
  //  Complejidad Temporal O(n) / Complejidad Espacial O(1)
  for (let i = 0; i < longitud; i++) {
    // O(1)
    let minimo = i;
    //  Complejidad Temporal O(n) / Complejidad Espacial O(1)
    for (let j = i + 1; j < longitud; j++) {
      // O(1)
      if (arreglo[j] < arreglo[minimo]) {
        // O(1)
        minimo = j;
      }
    }
    // O(1)
    if (minimo != i) {
      // O(1)
      let temporal = arreglo[i];
      // O(1)
      arreglo[i] = arreglo[minimo];
      // O(1)
      arreglo[minimo] = temporal;
    }
  }
  // O(1)
  return arreglo;
}
