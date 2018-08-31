/*
Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function binaryAgent(str) {
    let array = str.split(/\s/g);
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i], 2);
        array[i] = String.fromCharCode(array[i])
    } 
    return array.join('');
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

 /* 
function binaryAgent(str) {
    let array = str.split(/\s/g);
    array.forEach(function(element) {
        //console.log('element = ', array[i]);
        parseInt(element, 2);
        //array[i] = String.fromCharCode(array[i])

    })
    //return array.join('');
    return array;
  }
  */