//Remove duplicates from an array
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      //We check if the element is already in the array or not
      newArr.push(arr[i]); //If it's not in the array we push it to the new array
    }
  }
  return newArr;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 6, 2, 10]));
