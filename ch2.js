/*
    Chapter 2 work for EJS
    08/07/24
*/

// #1
let outputStr = "#";
let singleHash = "#";

for (let i = 0; i < 7; ++i) {
  console.log(outputStr);
  outputStr += singleHash;
  }

// #2
for (let i = 1; i <= 100; ++i) {
    switch (true) {
        case (i%3 === 0 && !(i%5 === 0)):
            console.log("Fizz");
            break;
        case (i%5 === 0 && !(i%3 === 0)):
            console.log("Buzz");
            break;
        case ((i%3 === 0) && (i%5 === 0)):
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
            break;
    }
}

// #3
let size = 8;
let outputStr2 = "";

for (let i = 0; i < size; ++i) {
  if (i===0 || i%2===0)
    for (let j = 0; j < size; ++j) {
        if (j%2===0) {
            outputStr2 += " ";
          }
        else {
          outputStr2 += ("#");
        }
      }
  else if (i===1 || i%1===0) {
    for (let j = 0; j < size; ++j) {
        if (j%2===0) {
            outputStr2 += "#";
          }
        else {
          outputStr2 += (" ");
        }
      }
  }
  
  outputStr2 += "\n";
  }

console.log(outputStr2);