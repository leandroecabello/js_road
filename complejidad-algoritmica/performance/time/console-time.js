function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time("Duración-contar");
count(5);
console.timeEnd("Duración-contar");
