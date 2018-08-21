function diffArray(arr1, arr2) {
    const newObj = arr1.concat(arr2).reduce((tally, value) => {
      tally[value] = (tally[value] || 0) + 1;
      return tally;
    }, {});
    return newObj;
}
    
    // Same, same; but different.
    
  
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));