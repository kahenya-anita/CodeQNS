// Two Sum: Given an array of integers, return indices of the two numbers
//such that they add up to a specific target.
// For example, given [2, 7, 11, 15] and target 9,
// the output should be [0, 1].
function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      //here we are checking if the value of the key is undefined or not
      return [map[arr[i]], i]; //then we return the value of the key and the index of the element
    } else {
      map[target - arr[i]] = i; //else we create a new key with the value of the target - the element
    }
  }
  return []; // finaly we return an empty array if the above condition is not met.
}
console.log(twoSum([2, 7, 11, 15], 9));
