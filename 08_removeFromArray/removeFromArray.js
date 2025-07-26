const removeFromArray = function (arr, ...elements) {
  return arr.filter((element) => !elements.includes(element));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
