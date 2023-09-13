console.time("filterAndMap");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredOddNumbers = numbers.flatMap((num) =>
  num % 2 !== 0 ? [num * num] : []
);

console.log(squaredOddNumbers); // [1, 9, 25, 49, 81]
console.timeEnd("filterAndMap");
