// // If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

// // const arr = [
// //   [1, 2], [3, 4], [5, 6]
// // ];

// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr[i].length; j++) {
// //     console.log(arr[i][j]);
// //   }
// // }
// // This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

// // Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

// function multiplyAll(arr) {The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

//   const ourArray = [];
//   let i = 0;

//   do {
//     ourArray.push(i);
//     i++;
//   } while (i < 5);
//   The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

//   const ourArray = [];
//   let i = 5;

//   while (i < 5) {
//     ourArray.push(i);
//     i++;
//   }
//   In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

//   const ourArray = [];
//   let i = 5;

//   do {
//     ourArray.push(i);
//     i++;
//   } while (i < 5);
//   In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

//   Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product = product * arr[i][j];
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// // Modify values below to test your code
// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i <= 10);
