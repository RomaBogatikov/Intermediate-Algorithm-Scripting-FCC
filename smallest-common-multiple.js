/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
evenly divisible by all numbers between 1 and 3. The answer here would be 6.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function smallestCommons(arr) {
    let min = Math.min(...arr); //min element of 'arr'
    let max = Math.max(...arr); //max element of 'arr'
    let array = [];     //array to store all the values between 'min' and 'max' included
    let minComMult = 0; // declare smallest common multiple variable

    for (let j = min; j <= max; j++) {  // create an array of all numbers between 'min' and 'max' ('min' and 'max' included)
        array.push(j)
    }

/*for debugging purposes (IMPORTANT: runs slow with large numbers)
    console.log('min = ', min, ' max = ', max); 
    console.log('array = ', array);
*/

    

    const product = array.reduce((total, value) => {    //Find the product of all the numbers in the array
        return total *= value                           //in case this is the smallest common multiple (SCM)
    }, 1)

    //console.log('product = ', product)

    for (let i = 1; i <= product; i++) {                //let 'i' be a multiple ranging from one to 'product'
        
       // console.log(' i = ', i);

        if (                                            //if the product of 'i' and 'min' is divisible by every element in the 'array' (true)
            array.every(function(isFactorOf) {
              //  console.log('modulus = ', (min *i) % isFactorOf);
                return (min * i) % isFactorOf == 0
            })
        ) {
            minComMult = min * i;   //smallest common multiple is here!!!
            return minComMult
        }
    }
    return minComMult;
  }
  
  
  console.log(smallestCommons([1,13]));