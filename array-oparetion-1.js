// isArray method
/* const number = 1;
console.log(Array.isArray(number));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Array.isArray(numbers)); */

// includes
const friends = ["rahim", "karim", "solim", "josim", "mahim"];

for (const friend of friends) {
  if (friend.includes("solim")) {
    console.log("i got friend", friend);
    break;
  } else {
    console.log("i didn't got friend");
  }
}

// concat
const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const secondNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const totalNumbers = firstNumbers.concat(secondNumbers);
console.log(totalNumbers);
