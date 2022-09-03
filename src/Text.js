// Odd or Even?
// Write a function that takes a single integer and returns a string of "odd" if it is an odd number, or "even" if it is even.

// Example:

// oddOrEven(1);
// // returns "odd"

// oddOrEven(2);
// // returns "even"
// Note that in many other programming languages, "integer" is a data type. JavaScript only has the Number type, which includes both integers and decimals. For the purpose of this exercise, integer means "whole number"

function oddOrEven(num) {
  // Your code goes here...
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
