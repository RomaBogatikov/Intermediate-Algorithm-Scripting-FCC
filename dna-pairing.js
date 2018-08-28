function pairElement(str) {
    let array = str.split('');      //split a 'str' into an array
    let arrayPairing = array.reduce((total, value, index) => {   //replace A, C, T or G with corresponding base pairs
      if (value == 'A') {total[index] = "AT"};
      if (value == 'C') {total[index] = "CG"};
      if (value == 'T') {total[index] = "TA"}
      if (value == "G") {total[index] = "GC"};
      return total
    }, [])
    for (let i = 0; i < arrayPairing.length; i++) {     //split base pairs into an array
      arrayPairing[i] = arrayPairing[i].split('')
    }
  
    return arrayPairing;
  }
  
  
    console.log(pairElement("GCG"));