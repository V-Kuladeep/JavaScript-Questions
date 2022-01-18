// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function test37(x) {
  if (x % 3 == 0) {
    return true;
  }
  if (x % 7 == 0) {
    return false;
  }
}

console.log(test37(12));
console.log(test37(14));
console.log(test37(10));
console.log(test37(11));