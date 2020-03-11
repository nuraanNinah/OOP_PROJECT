class Person {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;

    }

    hello() {
        let Hello = `Hello, my name is ${this.name} and I am ${this.age} years old.I am a ${this.gender} My interests are ${this.interests}`;

        return Hello;
    }
}

let person = new Person('Ryan', 30, 'male', ['being a hardarse', 'agile' , 'ssd hard drives'])
let greeting = person.hello()
console.log(greeting)

module.exports = { Person }