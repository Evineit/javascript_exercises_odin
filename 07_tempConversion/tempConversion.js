const ftoc = function(f) {
  return round1Decimals((f - 32) * (5/9))
};

const ctof = function(c) {
  return round1Decimals(c * (9/5) + 32 )
};

function round1Decimals(num) {
  return Math.round(num * 10) / 10
}

console.log(ftoc(100));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
