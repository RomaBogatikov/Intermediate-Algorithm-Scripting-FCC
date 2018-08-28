/*
Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function uniteUnique(...restArrs) {
    let result = []; //create an empty array to store
      for (let arr of restArrs) {   // iterate over all the arrays
          console.log(arr);         //for debugging purposes       
          const iteration = arr.reduce( function(total, value) {    // iterate over each value of the array
             console.log('total, value = ', total, ' ', value);         //for debugging purposes
                if (total.includes(value)) {            // if the element is already in the total(result points at the same array) 
                  return total                  // return array (result) without adding a new element
                } else {
                  total.push(value);            // otherwise add a unique element to the array(result)
                  return total
              }
            
          }, result)
          
          console.log('iteration, result = ', iteration, result)        // for debugging purposes
    
      }
      
      return result;
      
    }
    
    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);