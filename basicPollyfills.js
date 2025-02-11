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

//test 
// const arr = [1, 2, 3, 4, 5];
// const result = arr.myMap((a) => a * 2);
// console.log(result);

//includes   method in js
if (!Array.prototype.myInclude) {
  Array.prototype.myInclude = function (element) {
    if (!element) {
      throw new TypeError("no element in provided ");
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) return true;
    }
    return false;
  };
}

//test 
// const brr = [1, 2, 3, 4];
// console.log(brr.myInclude(3));
// console.log(brr.myInclude(5));
