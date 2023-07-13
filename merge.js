// Merge Sorted Arrays: Given two sorted arrays, merge them into a
// length.
// single sorted array. Assume the arrays are of equal
// size and have enough space at the end to hold the merged result.
// Example:
// Input: [1, 3, 5, 7], [2, 4, 6, 8]
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
// function mergeSortedArrays(arr1, arr2) {
//   let mergedArray = [];
//   let arr1Item = arr1[0];
//   let arr2Item = arr2[0];
//   let i = 1;
//   let j = 1;
//   //Check input
//   if (arr1.length === 0) {
//     return arr2;
//   }
//   if (arr2.length === 0) {
//     return arr1;
//   }
//   while (arr1Item || arr2Item) {
//     if (!arr2Item || arr1Item < arr2Item) {
//       mergedArray.push(arr1Item);
//       arr1Item = arr1[i];
//       i++;
//     } else {
//       mergedArray.push(arr2Item);
//       arr2Item = arr2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

arr1 = [1, 3, 5, 7];
arr2 = [2, 4, 6, 8];
const mergeSortArray = (arr1, arr2) => {
  let mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;
  //Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
};
