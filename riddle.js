// Rick is a fan of logic-based games. However, he is bored of the classic ones, like Sudoku :
// Mastermind, since he has solved so many of them. Recently he found a new game in whic one is given a string with some question marks in it. The objective is to replace all of the question marks with letters (one letter per question mark) in such a way that no letter app next to another letter of the same kind.
// Write a function:
// function solution (riddle);
// that, given a string riddle, returns a copy of the string with all of the question marks rep by lowercase letters (a-z) in such a way that the same letters do not occur next to each o The result can be any of the possible answers as long as it fulfils the above requirements.
// Examples:
// 1. Given riddle = "ab?ac?", your function might return "abcaca". Some other possible res
// are "abzacd", "abfacf"
// 2. Given riddle = "rd?e?wg??", your function might return "rdveawgab".
// 3. Given riddle ="????????", your function might return "codility".
// Write an efficient algorithm for the following assumptions:
// • the length of the string is within the range [1.. 100,000];
// • string riddle consists only of lowercases letters (a - z) or '?';
// • it is always possible to turn string 'riddle' into a string without two identical consecutive letters.

function solution(riddle) {
  const riddleArray = [...riddle];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let prevLetter = "";

  for (let i = 0; i < riddleArray.length; i++) {
    const ch = riddleArray[i];
    if (ch !== "?") {
      if (ch === prevLetter) {
        // Replace consecutive identical characters with a different one
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j] !== prevLetter) {
            riddleArray[i] = alphabet[j];
            prevLetter = alphabet[j];
            break;
          }
        }
      } else {
        prevLetter = ch;
      }
    } else {
      // Replace question mark with a valid lowercase letter that is different from prevLetter
      for (let j = 0; j < alphabet.length; j++) {
        if (
          alphabet[j] !== prevLetter &&
          (i === riddleArray.length - 1 || alphabet[j] !== riddleArray[i + 1])
        ) {
          riddleArray[i] = alphabet[j];
          prevLetter = alphabet[j];
          break;
        }
      }
    }
  }

  return riddleArray.join("");
}
