// Multiple the even number with 2 in the following array
let Even = [1, 2, 3, 4, 5, 6];
let even = Even.filter(val => {
  if (val % 2 === 0) {
    return val;
  }
});

let val = even.map(num => {
  return num * 2;
});
console.log(val);
