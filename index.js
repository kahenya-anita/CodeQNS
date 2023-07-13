//Find maximum value from an array of intergers
const findMax = (arr) => {
  arr.sort((a, b) => b - a);
  return arr[0];
};

console.log(findMax([12, 13, 24, 56, 89]));
