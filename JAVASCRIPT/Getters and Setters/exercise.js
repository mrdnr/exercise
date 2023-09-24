class Person {
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
}

Object.defineProperty(Person,`fullName`,{
  
})

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);