// Ordering Supplies
// Hooray! The party has been given the go-ahead! Now it's time to write a function which will help us to order some supplies for the party.

// Northevents Events Supplies™️ sell a range of goods which can help us to throw an amazing party!

// The orderSupplies function takes two arguments: a supplies object with keys of party supplies and values of the cost of that supply, and the number of guests attending.

// It should return a number showing the total cost of ordering one of each item per guest!

// orderSupplies({cake: 2, iceCream: 7}, 2)
// // should return 18

// orderSupplies({plates: 2, cups: 1, forks: 1, partyHats: 4}, 20)
// // should return 160

function orderSupplies(supplies, guests) {
  // Your code goes here...

  // number showing the total cost of ordering one of each item per guest.
  const totalCost = Object.values(supplies).reduce((a, b) => a + b, 0) * guests;

  return totalCost;
}
