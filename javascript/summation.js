//Write a function that takes an array of numbers and returns the sum of all the even numbers.

const summation = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
};

console.log(summation([2, 2]));
