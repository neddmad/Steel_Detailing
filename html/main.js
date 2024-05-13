var plusOne = function (digits) {
  if (digits[digits.length - 1] === 9) {
    return [1, 0];
  }
  let addOne = digits[digits.length - 1] + 1;
  digits[digits.length - 1] = addOne;
  return digits;
};

console.log(plusOne([1, 2, 5, 9]));
