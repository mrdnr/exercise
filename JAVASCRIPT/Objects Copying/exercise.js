const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {...person1};  //person1 properties copied to person2.
person2.firstName="Simon";  //person2's firstName has been modified using the obj property

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
