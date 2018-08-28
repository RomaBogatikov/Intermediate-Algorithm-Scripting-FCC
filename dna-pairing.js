/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function pairElement(str) {
    let array = str.split('');      //split a 'str' into an array
    let arrayPairing = array.reduce((total, value, index) => {   //replace A, C, T or G with corresponding base pairs
      if (value == 'A') {total[index] = "AT"};
      if (value == 'C') {total[index] = "CG"};
      if (value == 'T') {total[index] = "TA"}
      if (value == "G") {total[index] = "GC"};
      return total
    }, [])
    for (let i = 0; i < arrayPairing.length; i++) {     //split base pairs into an array
      arrayPairing[i] = arrayPairing[i].split('')
    }
  
    return arrayPairing;
  }
  
  
    console.log(pairElement("GCG"));