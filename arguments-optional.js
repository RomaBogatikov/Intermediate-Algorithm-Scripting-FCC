/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function addTogether(...restArgs) {
    
    for (let arg of restArgs) {                             //check if either of the arguments is not a number
        if (typeof arg !== "number") {return undefined}
    }
    
    let sum = 0;
    if (restArgs.length == 1) {                             //if only 1 argument provided
        return function sumTwoAnd(y) {                      //return a function
            if (typeof y !== "number") {return undefined}   //check that an argument in a second function is a number
            return restArgs[0] + y;                         //return sum of two arguments
        } 
    }
    else {for (let arg of restArgs) {                       //if two arguments were provided
        sum += arg};                                        //return their sum
        return sum
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));
