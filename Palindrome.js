//  check given string is palindrome or not

let str = prompt("enter a string");

let reverse = str.split("").reverse().join("");
console.log(reverse);

if (str === reverse) {
  console.log("it is palindrome");
} else {
  console.log("not a palindrome");
}
