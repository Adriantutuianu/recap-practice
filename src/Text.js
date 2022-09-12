// How Many Tables?
// Hooray! The party can go ahead, the guest list is finalised, and it's almost time to make the seating plan. But first, you need to figure out how many tables we need!

// The number of guests may not divide evenly by the number of seats, so we will have to add some extra chairs to a few of the tables for them.

// The function calculateTables takes two arguments, the number of guests and the number of seats around a table.

// It should return an object with two properties: a key of tables with the value of the number tables, and a key of remainingGuests with a value of the number of guests without a seat who will need to be added to one of the other tables.

// Examples Below.

// calculateTables(4, 2);
// // should return { tables:2 , remainingGuests: 0}

// calculateTables(14, 6);
// // should return { tables:2 , remainingGuests: 2}

// calculateTables(26, 5);
// // should return { tables:5 , remainingGuests: 1}

function calculateTables(guests, seats) {
  // Your code goes here...

  // Calculate the number of tables needed
  const neededTables = Math.floor(guests / seats);
  console.log(neededTables);
  // Calculate remaining guests
  const remainingGuests = guests % seats;
  console.log(remainingGuests);

  return { tables: neededTables, remainingGuests: remainingGuests };
}
