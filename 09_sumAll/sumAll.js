const sumAll = function (a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    if (a > b) {
      return ((a - b + 1) / 2) * (a + b);
    } else {
      return ((b - a + 1) / 2) * (a + b);
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
