// You are given N numbers on a circle, described by an array A. Find the maximum number of neighbouring pairs whose sums are even. One element can belong to only one pair.
// Write a function:
// function solution (A);
// that, given an array A consisting of N integers, returns the maximum number of neighbouring pairs whose sums are even.
// Examples:
// 1. Given A = 14, 2, 5, 8, 7, 3, 7], the function should return 2. We can create two pairs with even sums: (A[0], A[11) and (A|4], A[5]). Another way to choose two pairs is: (A[0], A[1]) and (A[5], A|6]).
// 5
// 7
// 8
// 8
// 2. Given A = [14, 21, 16, 35, 22], the function should return 1. There is only one qualifying pair: (A[0], A[4]).
// ／14
// 22
// 21
// 35
// 16
// 3. Given A = [5, 5, 5, 5, 5, 5], the function should return 3. We can create three pairs: (A[0], A[5]), (A[1], A[2]) and (A[3], A[4]).
// 5
// 5
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range |1.. 100,000];
// • each element of array A is an integer within the range 0.. 1,000,000,000].

function solution(A) {
  const nums = [...A, A[0]];
  const count1 = findMaxPair(0, nums.length - 2, nums);
  const count2 = findMaxPair(1, nums.length - 1, nums);
  return Math.max(count1, count2);
}

function findMaxPair(start, end, nums) {
  let count = 0;
  for (let i = start; i + 1 <= end; i++) {
    if ((nums[i] + nums[i + 1]) % 2 === 0) {
      count++;
      i++;
    }
  }
  return count;
}
