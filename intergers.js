//Find missing number in an array of integers
number = [1, 3, 4];

function findMissing(number) {
  let n = number.length + 1;
  let total = (n * (n + 1)) / 2;
  for (let i = 0; i < number.length; i++) {
    total -= number[i];
  }
  return total;
}
// console.log(findMissing(number));
