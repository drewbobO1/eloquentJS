// #1
function range(first, last, step = 1) {
    let allNums = [];
    if (first < last) {
      for (let i = first; i <= last; i += step) {
        allNums.push(i);
      }
    }
    else if (first > last) {
      for (let i = first; i >= last; i += step) {
        allNums.push(i);
      }
    }
    return allNums;
  }
  
  function sum(arr) {
    let sum = 0;
    for (ind of arr) {
      sum += ind;
    }
    return sum;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55


  
//  #2
function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length-1; i >= 0; --i) {
      revArr.push(arr[i]);
    }
    return revArr;
  }
  
  function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length-1;
  
    while (left < right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
  
      left++;
      right--;
    }
  }
  
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray));
  // → ["C", "B", "A"];
  console.log(myArray);
  // → ["A", "B", "C"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]



//  #3
function arrayToList(arr) {
  let newList = {};
  let restVar = null;
  
  if (arr.length <= 0) {
    return 1;
  }
  else {
    for (let i = arr.length-1; i >= 0; --i) {
      let tmp = {}; 
      console.log("i: ", arr[i]);
      tmp.value = arr[i];
      tmp.rest = restVar;

      newList = tmp;
      restVar = tmp;
    }
    return newList;
  }
}
// ---
let newArr = [];

function listToArray(list) {
  newArr.push(list.value);
  if (list.rest != null) {
    return listToArray(list.rest);
  }
  else {
    return newArr;
  }
}
// ---
function prepend(frontVal, restObj) {
  let newObj = {};
  newObj.value = frontVal;
  newObj.rest = restObj;
  return newObj;
}
// ---
let nthIndex = 0;
let nthObj = {};

function nth(list, endIndex) {
  if (nthIndex == endIndex) {
    return list.value;
  }
  else {
    nthIndex += 1;
    nthObj = list.rest;
    return nth(nthObj, endIndex);
  }
}
// ---

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20



// #4
