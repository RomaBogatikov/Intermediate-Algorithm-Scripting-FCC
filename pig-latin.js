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