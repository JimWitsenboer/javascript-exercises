const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i]
  }
  return sumArray;
};

const multiply = function(...args) {
  let multipliedArgs = 1;
  for (let i = 0; i < args.length; i++) {
    multipliedArgs *= args[i]
  }
  return multipliedArgs;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let makeRange = 1;
  for (let i = num; i > 0; i--) {
    makeRange *= i;
  }
  return makeRange;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
