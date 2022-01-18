//  Fibonic series for the given number without using built in methods

let NumberFib = 5;
let a = 0,
 b = 1;
let nextTerm;
for (i = 0; i <= NumberFib; i++) {
  console.log(a);
  a = b;
  nextTerm = a + b;
  b = nextTerm;
}
