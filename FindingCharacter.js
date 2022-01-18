// To find the character whether present in the string
let stringmember = prompt("enter a string");
const checkString = prompt("enter a string value to search");

if (stringmember.includes(checkString)) {
  console.log(`string contains ${checkString}`);
} else {
    console.log("not contains")
}
