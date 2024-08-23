// #1
function range(first, last, step = 1) {
    let allNums = [];
    for (let i = first; i <= last; i += step) {
      allNums.push(i);
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

//  #3
