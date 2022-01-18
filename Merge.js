// program to merge property of two objects
let person = {
  name: "smith",
  age: 21,
  sal: 2000,
};
let emp = {
  gender: "male",
};
// in both object if we use same name it update the value
// let merge = Object.assign(person, emp);
let merge = { ...person, ...emp };
console.log(merge);
