const reverseString = function(text) {
    const textArray = text.split("")
    let result = ""
    for (let i = textArray.length -1 ; i>=0 ; i--) 
        result = result.concat(textArray[i])
    return result
};

// Do not edit below this line
module.exports = reverseString;
