/*
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function spinalCase(str) {
  let regex = /(([A-Z])?[a-z]+)/g;
  let str1 = str.match(regex).join('-').toLowerCase()
  return str1
}