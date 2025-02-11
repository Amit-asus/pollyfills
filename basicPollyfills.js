// map function polyfill

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callBack) {
    if (typeof callBack !== "function") {
      throw new TypeError(callBack + "is not a function ");
    }

    let newArray = [];
    //iterating  over the array
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callBack(this[i]);
    }

    return newArray;
  };
}

const arr = [1, 2, 3, 4, 5];

const result = arr.myMap((a) => a * 2);

console.log(result);
