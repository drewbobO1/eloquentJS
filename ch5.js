// #1
let arrays = [[1, 2, 3], [4, 5], [6]];

let newArr = arrays.reduce((currentArr, addlArr) => {
  return currentArr.concat(addlArr);
});

console.log(newArr);
// → [1, 2, 3, 4, 5, 6]



// #2
