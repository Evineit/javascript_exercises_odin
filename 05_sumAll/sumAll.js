const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    if (a < 0 || b < 0) return "ERROR"
    let sum = 0
    const start = a < b ? a : b
    const end = a < b ? b : a
    for (let i = start; i <= end; i ++ ){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
