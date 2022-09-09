// Tracking the Ticket Prices
// You have been asked to update the guest list with the amounts that each guest is willing to pay for a ticket. Unfortunately, all of the ticket prices found in email messages have been sent to you as strings!

// The function trackAttendees takes an attendee object and a string representing how much they are willing to pay.

// It should return a modified attendee object, with an added property key of paidForTicket and value of the amount the attendee is willing to pay.

// Examples:

// trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25');
// // should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }

// trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0');
// // should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }

// trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13');
// // should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }
// Note: all other properties should remain unchanged.

function trackAttendees(person, ticketCost) {
  // Your code goes here...
  //use spread operator to copy all object properties
  const newPerson = { ...person };

  // attached paidForTicket property to newPerson object
  newPerson.paidForTicket = Number(ticketCost);

  return newPerson;
}
