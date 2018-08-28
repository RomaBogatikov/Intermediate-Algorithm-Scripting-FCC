/*
Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function translatePigLatin(str) {
    //check if the first letter is vowel (returns true or false)
    let checkVowel = /(?=^[aeiou])/;
    //if the first letter is vowel return str + 'way'
    if (checkVowel.test(str)) {
      return str + 'way'
    } else {        // if the first letter is consonant
      let array = str.split('');  // split str into an array
      let firstConsonants = str.match(/^[^aeiou]*/);    //match first consonant(s)
      // remove first consonants from the beginning of an array
      let arrayWithoutConsonants = array.slice(firstConsonants[0].length, array.length); 
      return (arrayWithoutConsonants.join('') + firstConsonants[0] + 'ay')
    }
}
  
console.log(translatePigLatin("glove"));