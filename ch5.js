// #1
/* 
    Use the reduce method in combination with the concat method to “flatten” an array of arrays 
    into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArr = arrays.reduce((currentArr, addlArr) => {
  return currentArr.concat(addlArr);
});

console.log(newArr);
// → [1, 2, 3, 4, 5, 6]



// #2
/* 
    Write a higher-order function loop that provides something like a for loop statement. 
    It should take a value, a test function, an update function, and a body function. 
    Each iteration, it should first run the test function on the current loop value and stop if that returns false. 
    It should then call the body function, giving it the current value, and finally 
    call the update function to create a new value and start over from the beginning.

    When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(val, testFunc, updateFunc, bodyFunc) {
    while (testFunc(val)) {
      bodyFunc(val);
      val = updateFunc(val);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1



// #3
