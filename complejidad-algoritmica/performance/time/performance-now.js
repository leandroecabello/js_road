const performance = require("perf_hooks");

function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let initialTime = performance.performance.now();
count(5);
let finishTime = performance.performance.now();
const duration = finishTime - initialTime;

console.log(`El algoritmo contar ha durado: ${duration} ms`);
