// check given num is  prime number r not
let number = 6;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    break;
  }
}

if (number == 0) {
  console.log(`${number} is a prime number`);
} else {
  console.log(`${number} is a not prime number`);
}
