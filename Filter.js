// Filter the names having more than 5 letters
let name1 = ["shahsi", "shahikunal", "Balaji", "sooraj"];
let names = name1.filter(val => {
  if (val.length > 5) {
    return val;
  }
});
console.log(names);
