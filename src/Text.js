// Retrieve Password
// Write a function that takes a user object, which represents a user of the Northcoders website, and returns the value of the password key from that object.

// If the user object does not contain a password key, the function should instead return undefined.

// A typical user object might look like this:

// { name: 'Lucy', password: 'n0rthc0derzzz' }
// Examples:

// retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' })
// // returns 'n0rthc0derzzz'

// retrievePassword({ name: 'Sam', password: 'hi!' })
// // returns 'hi!'

// retrievePassword({ name: 'Halima', favouriteFood: 'pizza' })
// // returns undefined

function retrievePassword(user) {
  // Your code goes here...
  if (!user.password) {
    return undefined;
  } else {
    return user.password;
  }
}
