const sumAll = function(min, max) {
  if ( (!Number.isInteger(min) || !Number.isInteger(max)) || (min < 0 || max < 0)) return "ERROR";
  if (min > max){ let temp = min; min = max; max = temp }

  let rangeArray = 0
  for (let i = min; i <= max; i++) {
    rangeArray += i
  };
  return rangeArray;
};

// Do not edit below this line
module.exports = sumAll;
