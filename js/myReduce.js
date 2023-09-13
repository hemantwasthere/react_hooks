Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, curr) =>
    curr > acc ? (acc = curr) : curr
  )
);
console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myReduce((acc, curr) =>
    curr > acc ? (acc = curr) : curr
  )
);
