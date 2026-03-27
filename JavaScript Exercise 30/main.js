// Callbacks

function operate(x, y, callback) {
  return callback(x, y);
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log("Product is ", operate(12, 7, multiply));
console.log("Quotient is ", operate(12, 6, divide));