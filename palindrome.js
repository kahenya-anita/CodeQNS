//A function that takes a string input and
//determines if it's a palindrome

function isPalindrome(str) {
  const revString = reverseString(str);
  return revString === str;
}
console.log(isPalindrome("zipline"));

// function isPalindrome(str) {
//   const revString = str.split("").reverse().join("");
//   return revString === str;
// }
// console.log(isPalindrome("zipline"));
