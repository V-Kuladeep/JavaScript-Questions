//  Reverse a string without using reverse method

let str = "kuladeep";

function reverseString(str) {
  let result = "";
  let len = str.length;
  for (i = 0; i <= str.length - 1; i++) {
    result = result + str[len - i - 1];
  }
  return result;
}
console.log(reverseString(str));
