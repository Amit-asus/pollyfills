Array.prototype.customReduce = function (acc, callBack) {
  let newAcc = acc ??  this[0];
  for (let i = 0; i < this.length; i++) {
    newAcc = callBack(newAcc, this[i]);
  }
  return newAcc;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.customReduce(0, (a, curr) => a + curr))
