// Spread operator
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

// Rest operator
function multiply (...numbers) {
  return numbers.reduce((multiply, num) => multiply * num, 1)
}
console.log(multiply(12, 25, 20))