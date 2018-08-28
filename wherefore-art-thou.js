/*
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function whatIsInAName(collection, source) {
  const newArr = collection.reduce((total, value) => {
      //break up second object into an array of [key, value] pairs
    const entries = Object.entries(source);
      
      //console.log for debugging purposes
    console.log("value = ", value);
    console.log("entries = ", entries);
      
      //compareEntriesValue takes an array of [key, value] pair from second object (entries)
      //and checks if first object has a key and corresponding value
      //returns true if both conditions are met 
    function compareEntriesValue( array ) {

      // console.log for debugging purposes  
      console.log("array, value[array[1]] ", array, value[array[0]]);

      if (value.hasOwnProperty(array[0]) && array[1] == value[array[0]]) {
        return true
      } else {return false}
    };

      //iterate through every [key, value] pair in the second object and return true
      //if every [key, value] pair from the second object is in the first array of objects
    let marker = entries.every(compareEntriesValue);
      //console.log for debugging purposes
    console.log("marker = ", marker);
    if (marker) {total.push(value)};
      //console.log for debugging purposes
    console.log("total =", total)

    return total
  }, [])
    
  return newArr;
};

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })