// Taxi Fare Calculator
// Northdrivers Taxi Company™️ have asked for your help writing a function which will calculate the cost of getting to the party! Journeys are priced as follows:

// Journeys up to 3 minutes long have a flat base rate cost of £5
// Every minute after the first 3 will cost an extra 70p
// The length of the journey is always rounded up to a whole number of minutes
// The calculateTaxiFare function should take a number representing the length of a taxi journey in seconds, and return a number representing the cost of that journey in pence.

// calculateTaxiFare(150);
// // should return 500

// calculateTaxiFare(360);
// // should return 710

// calculateTaxiFare(491);
// // should return 920

function calculateTaxiFare(seconds) {
  // Your code goes here...

  let cost = 0;
  let flatBase = 500;

  // Calculate the cost of journey- pence
  if (seconds <= 180) {
    cost = flatBase;
  } else {
    // Convert seconds to minutes
    const minutes = Math.ceil(seconds / 60);
    console.log(minutes);
    const taxableMinutes = minutes - 3;
    const totalMinutes = taxableMinutes * 70;
    console.log(totalMinutes);
    cost = flatBase + totalMinutes;
  }
  return cost;
}
