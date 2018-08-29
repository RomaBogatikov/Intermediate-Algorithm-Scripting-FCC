
/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
/*
Procedure to find out the prime number:

Suppose A is given number.

Step 1: Find a whole number nearly greater than the square root of A. K ¿ square root(A) 
Step 2: Test whether A is divisible by any prime number less than K. If yes A is not a prime number. 
If not, A is prime number.
*/
function sumPrimes(num) {
    let arr = [];     //array for storing prime numbers
    let element = 2;  //first prime number
    let sqrt = 0;
  //for... loop to check every number between element and num if it is prime
    for (element; element <= num; element++) {  
      let arrSqrt = []; //array to store square roots of element
      console.log('element = ', element); //for debugging purposes
      if (Number.isInteger(Math.sqrt(element))) { // if square root is not integer, round it 
        sqrt = Math.sqrt(element) + 1             //to the biggest number, else add 1
      } else {
        sqrt = Math.ceil(Math.sqrt(element));
      }
      
      console.log('sqrt = ', sqrt); // for debugging purposes
  
      for (let element2 of arr) {   //form an array with all elements from arr that are less than sqrt of element
        console.log('element2 = ', element2);
        if (element2 < sqrt) { arrSqrt.push(element2) }
      }
  
      console.log('arrSqrt = ', arrSqrt); //for debugging purposes
  
      if (    //test whether element is divisible by all the elements of arrSqrt
        arrSqrt.some(function(arrayValues) {
          console.log('arrayValues = ', arrayValues)    //for debugging purposes
          return element % arrayValues == 0
        })
      ) {} else {
        arr.push(element); console.log('arrpushed = ', arr)  //if element is not divisible by any element of arrSqrt, it is prime
      }
      
    }    
    
    const result = arr.reduce((total, value) => {   //sum all prime numbers
      return total + value
    })
  
    return result;
  }
  
  console.log(sumPrimes(977));