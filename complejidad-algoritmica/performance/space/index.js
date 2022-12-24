function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(array) {
  let repeatArray = array;
  return repeatArray;
}

function convertToString(array) {
  let resolve = array.map((element) => element.toString());
  return resolve;
}

// console.log(convertToString([1, 2, 3]));

function twoDimensional(value) {
  let x = new Array(value);
  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0);
  }
  return x;
}

console.log(twoDimensional(5));
