const sumAll = function(num1, num2) {
    if (num1<0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR"

    let sum = 0;
    let smallNumber
    let largeNumber
    if(num1 < num2) {
        smallNumber = num1
        largeNumber = num2
    } else {
        smallNumber = num2
        largeNumber = num1
    }
    for(smallNumber;smallNumber<=largeNumber;smallNumber++) {
        sum += smallNumber;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
