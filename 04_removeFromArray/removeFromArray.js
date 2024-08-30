const removeFromArray = function(arr, ...numbers) {
    const argsArray = Array.from(numbers)
    const finalArray = []
    let removeFromArray

    for (let arrNum of arr) {
      removeFromArray = false
      for (let argNum of argsArray) {
          if (argNum === arrNum) {
            removeFromArray = true;
            break;
          }
      }
      if(!removeFromArray) {
        finalArray.push(arrNum)
      }
    }
  
    return finalArray;
  } 

// Do not edit below this line
module.exports = removeFromArray;
