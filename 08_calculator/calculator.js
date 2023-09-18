const add = function(n1,n2) {
	return n1+n2
};

const subtract = function(n1,n2) {
	return n1-n2
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i< nums.length; i++){
    sum += nums[i]
  }
  return sum
};

const multiply = function(nums) {
  let sum = 1
  for (let i = 0; i < nums.length; i++){
    sum *= nums[i]
  }
  return sum
};

const power = function(base,power) {
	return base ** power
};

const factorial = function(n) {
	if (n < 0) return;
  if (n < 2) return 1;
  return n * factorial(n - 1);
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
