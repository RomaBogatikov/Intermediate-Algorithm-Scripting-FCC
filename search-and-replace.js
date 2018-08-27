
function myReplace(str, before, after) {
    let regex = /(?=^[A-Z])/;        //use regex to check if the first letter of 'before' is uppercase
    if (regex.test(before)) {          //if the first letter of 'before' is uppercase
        after = after.replace(after[0], after[0].toUpperCase())   //then change the first letter of 'after' to uppercase
    }
    return str.replace(before, after);     //replace the word 'before' in a 'str' with a word 'after'
} 
  
  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));




