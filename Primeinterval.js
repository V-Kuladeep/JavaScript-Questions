// program to print the prime  number in an interval

let lowestNum = 10;
let highestNum = 20;

for (i = lowestNum; i <= highestNum; i++) {
  let flag = 0;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
