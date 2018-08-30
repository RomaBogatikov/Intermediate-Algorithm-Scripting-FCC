/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function steamrollArray(arr) {

    const checkArray = function (element) {  //function to check if an element in the array is array
      return Array.isArray(element) == true
    }
    let result = [];
    while (arr.some(checkArray)) {    //while at least 1 element in che array 'arr' is array do
      result = arr.reduce((total, value) => {   //flatten the array 'arr'
        return total.concat(value)
      }, []);
      arr = result      //assign the flattened array to array 'arr' and repeat flattening if there is still an array as an element of 'arr'
    }
    return arr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([[["a"]], [["b"]]]));
  console.log(steamrollArray([1, [], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));