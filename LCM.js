// To find the LCM of a given Two Numbers

let num1 = 5;
let num2 = 10;

let min = num1 > num2 ? num1 : num2;
while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(min);
  }
}
