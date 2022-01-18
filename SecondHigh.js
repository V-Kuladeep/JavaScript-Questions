//  To find the second highest Interger in an Array

let array = [10, 15, 24, 78, 29, 45, 89];

function SecondHighest(array) {
  let max = -Infinity;
  let result = -Infinity;

  for (const value of array) {
    if (value > max) {
      [result, max] = [max, value];
    } else if (value < max && value > result) {
      result = value;
    }
  }
  return result;
}
console.log(array);
console.log(SecondHighest(array));

//   (0r)
// using array methods
let array1 = [29, 81, 8, 90, 91];
let data = array1.sort();
console.log(data[array1.length - 2]);
