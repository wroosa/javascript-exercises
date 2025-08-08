const fibonacci = function (member) {
  sequence = [1, 1];
  if (+member === 0) {
    return 0;
  } else if (+member === 1) {
    return sequence[0];
  } else if (+member === 2) {
    return sequence[1];
  } else if (+member < 0) {
    return "OOPS";
  } else {
    for (let i = 3; i < +member + 1; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 3]);
    }
    return sequence[+member - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
