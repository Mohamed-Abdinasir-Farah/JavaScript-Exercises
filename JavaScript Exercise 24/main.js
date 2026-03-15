// Default Parameter
function calculateArea (width, height = width) {
  return width * height;
}
console.log(calculateArea(12, 7));
console.log(calculateArea(12));

