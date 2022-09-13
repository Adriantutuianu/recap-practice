// Who are the Winners?
// The Northcoders party is nearly over & it's time to select the winners of the prize draw raffle!

// You have been asked to write a function which will select the winners based on two factors: how much they paid, and their seat number. If both of these numbers are odd, the attendee wins a prize!

// The pickWinners function will be passed an array of numbers representing ticket costs as its only argument. The index position represents the seat number.

// Your task is to return an array of objects. Each object should contain two keys. The first key is seat with a value of the odd index. The second key is ticketCost with a value of the ticket price at that index in the input array.

// Examples below.

// pickWinners([6, 7, 12, 49])
// // should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
// pickWinners([1, 3, 5, 7, 9, 11])
// // should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
// pickWinners([1, 6, 13, 8, 29, 50])
// // should return []

function pickWinners(numbers) {
  // Your code goes here...
  const numbersObject = [];

  numbers.map((item, index) => {
    if (item % 2 && index % 2) {
      numbersObject.push({ seat: index, ticketCost: item });
    }
  });
  return numbersObject;
}
