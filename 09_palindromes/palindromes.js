const palindromes = function (text) {
  let arr = text.toLowerCase().match(/[a-zA-Z]/g);
  let part1 = arr.slice(0, arr.length / 2);
  let part2 = arr.slice(Math.ceil(arr.length / 2));
  part2.reverse();
  for (let index = 0; index < part1.length; index++) {
    const element = part1[index];
    if (element != part2[index]) {
      return false;
    }
  }
  return true;
};

console.log(palindromes("raceecar!"));

// Do not edit below this line
module.exports = palindromes;
