function addNumbers() {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }

  return sum;
}

const getSum = addNumbers(5, 5, 10, 20, 30);
console.log(getSum);
