/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    // find elements in arr1 not present in arr2 and add them to array newArr1
    const newArr1 = arr1.reduce((total, amount) => {
        if (!arr2.includes(amount)) {
        total.push(amount);
        }
        return total
    }, []);
    // find elements in arr2 not present in arr1 and add them to array newArr 
    //(initial value of total is newArr1)
    const newArr = arr2.reduce((total, amount) => {
        if (!arr1.includes(amount)) {
            total.push(amount);
        }
        return total
    }, newArr1);
    return newArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

