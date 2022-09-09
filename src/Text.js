// Making the Guest List
// We need to keep track of the party guests, but the data we currently have combines the guests first and last names into a single name. You have been asked to separate the names to make the data easier to work with.

// The makeGuestList function takes an object with a name property whose value will be a string consisting of a first name and a last name, separated by a space. The function should return an object.

// The function should remove the name property, replace it with firstName and lastName properties, as shown in the examples below.

// Examples:

// makeGuestList({ name: "Hannah Fry", age: 46 })
// // should return { firstName: "Hannah", lastName: "Fry", age: 46 }

// makeGuestList({ name: "Paul Erdős", age: 46 })
// // should return { firstName: "Paul", lastName: "Erdős", age: 46 }
// Note: all other properties should remain unchanged.

function makeGuestList(person) {
  // Your code goes here...
  const name = person.name;

  const first = name.substring(0, name.indexOf(" "));
  const second = name.substring(name.indexOf(" ") + 1);

  //create a new object with all values without name
  const newPerson = {
    ...person,
  };
  delete newPerson.name;
  newPerson.firstName = first;
  newPerson.lastName = second;

  return newPerson;
}
