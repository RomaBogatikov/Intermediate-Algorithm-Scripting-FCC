/*

Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
var Person = function(firstAndLast) {
    let firstName = '';
    let lastName = '';

    this.getFullName = function() {
        return this.getFirstName() + ' ' + this.getLastName();
    };

    this.getFirstName = function() {
        firstName = firstAndLast.match(/^\w*/);
        return firstName[0];
    };

    this.getLastName = function() {
        lastName = firstAndLast.match(/(\w+)\W*$/);
        return lastName[0]
    }

    this.setFirstName = function(first) {
        firstAndLast = firstAndLast.replace(/^\w*/, first)
        return firstAndLast;
           
    }

    this.setLastName = function(last) {
    firstAndLast = firstAndLast.replace(/(\w+)\W*$/, last)
        return firstAndLast;
    }
    this.setFullName = function(firstAndLast1) {
        firstAndLast = firstAndLast1
        return firstAndLast
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');


console.log(bob.getFirstName());
console.log(bob.getLastName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
bob.setLastName("Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
bob.setFullName("Haskell Curry");
console.log(bob.getLastName());




  /*
  bob.setFirstName("Haskell");
  console.log(bob.getFullName());
*/
  
  