// Find the Useful Emails
// The Northcoders party invitations have been sent and responses are coming in! In the interest of inclusivity, Northcoders has opted to make this a pay-what-you-want event.

// The finance team need to keep track of how much people are willing to pay for a ticket. You have been asked to write a function which will tell the team if an email contains information about a ticket price or not.

// The findTicketPrices function will take a string, and should return a value of true if the string contains a number, and false if it does not.

// Examples:

// findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
// // returns true

// findTicketPrices("I would be willing to pay 30 for a ticket");
// // returns true

// findTicketPrices("Thanks for making this event pay what you can afford!");
// // returns false

function findTicketPrices(emailString) {
  // Your code goes here...
  if (/\d/.test(emailString)) {
    return true;
  } else {
    return false;
  }
}
