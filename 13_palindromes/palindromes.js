const palindromes = function (str) {
  const regy = /[^\w]|_/g;
  let baseString = str.replace(regy, "").toLowerCase();
  return baseString === baseString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
