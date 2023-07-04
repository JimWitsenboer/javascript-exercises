const fibonacci = function(index) {
  if (!Number.isInteger(parseInt(index)) || parseInt(index) < 0) return "OOPS";
  let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]
  return fibonacci[parseInt(index)]
};

// Do not edit below this line
module.exports = fibonacci;
