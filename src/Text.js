// Gathering Feedback
// Phew! All your hard work paid off and the event was a success! Now that you have had some time to relax, it's time to consider the guests feedback.

// You decide to break the feedback into three groups: positive (7-10), negative (0-3) or neutral (4-6).

// The function gatherFeedback takes an array of arrays, each of these arrays contains both a string of the name of the attendee and a number showing how they rated the party out of 10.

// It should return an object with three properties: a key of positive with a value of the number of positive reviews; a key of negative with a value of the number of negative reviews; and, a key of neutral with a value of the number of neutral reviews.

// Examples:

// gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// // returns {positive: 1, negative: 1, neutral:1}

// gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
// // returns {positive: 3, negative: 0, neutral:0}

// gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);
// // returns {positive: 2, negative: 1, neutral:0}

function gatherFeedback(feedbackArray) {
  // Your code goes here...

  let positive = 0;
  let negative = 0;
  let neutral = 0;

  feedbackArray.map((item) => {
    const number = item[1];

    if (number >= 7 && number <= 10) {
      positive = positive + 1;
    } else if (number >= 4 && number <= 6) {
      neutral = neutral + 1;
    } else if (number >= 0 && number <= 3) {
      negative = negative + 1;
    }
  });

  return { positive: positive, negative: negative, neutral: neutral };
}
