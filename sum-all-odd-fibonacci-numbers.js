/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function sumFibs(num) {
    let arr = [1, 1];   //initialize array with first Fibonacci numbers
    
    let element = 2;    //set element as the next Fibonacci number after 1
    let i = 0;          // will be used in a for... loop 
   
    for (element; element <= num; element = arr[i] + arr[i+1]) {    //build array of all Fibonacci numbers <= num
      arr.push(element);
      i++
    }
  
    const result = arr.reduce((total, value) => {       //sum all odd Fibonacci numbers
      if (value % 2 == 1) {
        total += value;
        return total
      } else { return total }
    }, 0)
  
    return result;
  }
  
  console.log(sumFibs(75024));