
class Person {
  constructor(name, age, birthday, siblings) {
    this.name = name
    this.age = age
    this.birthday = birthday
    this.siblings = [siblings]
  }
};

const person1 = new Person('Benjamin', 29, 'August-6-1992',  ['Chris', 'Spencer', 'Laura', 'Nathan', 'Matthew', 'Caitlin'])
const person2 = new Person('Melissa', 28, 'June-27-1993', ['Spencer', 'Kimberly', 'Natalie'])

const forIn = (person) => {
  for(let prop in person){
    console.log(person[prop])
  }
  for(let sibling of person.siblings){
    console.log(sibling)
  }
};


// forIn(person1)