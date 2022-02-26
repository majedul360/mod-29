// sort
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersSort = numbers.sort();
console.log(numbersSort); */

const numbers = [52, 7, 6, 32, 43, 14, 25];
const numbersSort = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbersSort);

// reverse
const friends = ["malek", "khalek", "robi", "kobi", "chobi", "bublu"];
const friendsReverse = friends.reverse();
console.log(friendsReverse);
