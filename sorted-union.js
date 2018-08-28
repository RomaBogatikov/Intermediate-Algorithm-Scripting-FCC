
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