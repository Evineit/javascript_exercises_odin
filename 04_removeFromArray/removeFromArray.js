const removeFromArray = function(arr, ...elements) {
    return arr.filter((elem) => !elements.includes(elem))
};

console.log(removeFromArray([1,2,3,4,5], 1, 5));
// Do not edit below this line
module.exports = removeFromArray;
