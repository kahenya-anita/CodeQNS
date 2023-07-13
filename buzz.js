//Print no 1 to n. But for Multiples of 3 print "Fizz"instead of the number
//instead of the number multiple of 5 "Buzz multiple of 3 &5 "FizzBuzz instead of the number
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz(15));
