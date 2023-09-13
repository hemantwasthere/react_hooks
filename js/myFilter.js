Array.prototype.myFilter = function (callback) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

console.log([1, 2, 3, 4].filter((num) => num % 2 === 0));
console.log([1, 2, 3, 4].myFilter((num) => num % 2 === 0));
