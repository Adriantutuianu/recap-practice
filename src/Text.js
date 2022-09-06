// Hello, Northcoders Party Planner!
// Northcoders want to have a party, and have enlisted the use of your savvy coding skills to help them!

// Uh oh - you're ready to send out your invitations when you spot some typos...

// Some of the names from your database don't have capital letters, so you need to make sure you capitalise the first letter of all of the guests names.

// Your greetGuests function will take a string of a first name and should return a string of a greeting with the capitalised name, as shown in the example below.

// Examples:

// greetGuests("Douglas");
// // returns 'Hello Douglas!'

// greetGuests("maddie");
// // returns 'Hello Maddie!'

// greetGuests("poonam");
// // returns 'Hello Poonam!

function greetGuests(name) {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return `Hello ${capitalized}!`;
}
greetGuests("Douglas");
