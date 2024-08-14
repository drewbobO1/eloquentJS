/*
    Chapter 3 work for EJS
    08/12/24
*/

// #1
/* 
    The previous chapter introduced the standard function Math.min
    that returns its smallest argument. We can write a function like 
    that ourselves now. Define the function min that takes two arguments 
    and returns their minimum.
*/
function min(num1, num2) {
    if (num1 < num2) {
      return num1;
    } 
    else if (num2 < num1) {
      return num2;
    }
    else if (num1 === num2) {
      return "Equal";
    }
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

// #2
/* 
We’ve seen that we can use % (the remainder operator) to test whether a number 
is even or odd by using % 2 to see whether it’s divisible by two. Here’s another 
way to define whether a positive whole number is even or odd:

Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function 
should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num) {
    if (num > 1) {
      num -= 2;
      return isEven(num);
    }
    else if (num < 0) {
      num *= -1;
      return isEven(num);
    }
    else if (num == 1) return false;
    else if (num == 0) return true;
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

  // #3
  /*
  Write a function called countBs that takes a string as its only argument and 
  returns a number that indicates how many uppercase B characters there are in the string.

  Next, write a function called countChar that behaves like countBs, except it takes a 
  second argument that indicates the character that is to be counted (rather than counting 
  only uppercase B characters). Rewrite countBs to make use of this new function.
  */

  function countBs(str) {
    let bQty = 0;
    for (let i = 0; i<str.length; ++i) {
      if (str[i] == "B") bQty += 1;
    }
    return bQty;
  }
  
  function countChar(str, char) {
    let charQty = 0;
    for (let i = 0; i<str.length; ++i) {
      if (str[i] == char) charQty += 1;
    }
    return charQty;
  }
