/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function myReplace(str, before, after) {
    let regex = /(?=^[A-Z])/;        //use regex to check if the first letter of 'before' is uppercase
    if (regex.test(before)) {          //if the first letter of 'before' is uppercase
        after = after.replace(after[0], after[0].toUpperCase())   //then change the first letter of 'after' to uppercase
    }
    return str.replace(before, after);     //replace the word 'before' in a 'str' with a word 'after'
} 
  
  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));




