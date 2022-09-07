// Find Even Length Strings
// This function will take an array of values, and should return an array of all the even length strings.

// Anything that's not a string, or not a string of even length, should not be returned in the array.

// If there are no even length strings, it should return an empty array.

// Examples:

// findEvenLengthStrings(['hi', 'bye'])
// // returns ['hi']

// findEvenLengthStrings(['bye'])
// // returns []

function findEvenLengthStrings(items) {
  // Your code goes here...
  const even = [];

  items.forEach((item) => {
    if (item !== null && !Array.isArray(item) && item.length % 2 == 0) {
      even.push(item);
    }
  });

  console.log(even);
  if (!even.length) {
    return [];
  } else {
    return even;
  }
}
