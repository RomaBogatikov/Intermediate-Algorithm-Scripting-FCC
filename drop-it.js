/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function dropElements (arr, func) {
    let index = arr.findIndex(func);    //find the index of the first element than satisfies 'func'
    if (index === -1) {                 //if no element satisfies 'func' return []
        return []
    } else {                            //else return rest of the 'arr'
        let result = arr.slice(index, arr.length + 1);
        return result
    }
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

