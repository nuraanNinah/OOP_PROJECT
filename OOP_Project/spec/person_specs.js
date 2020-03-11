
let myTest = require("../src/person");

let person = new myTest.Person('Ryan', '30', 'male', ['being a hardarse','agile','ssd hard drives']);

describe("my function in a class of Person", function () {

    it("returns greeting", function () {
        expect(person.hello()).toBe('Hello, my name is Ryan and I am 30 years old.I am a male My interests are being a hardarse,agile,ssd hard drives');
    });

    it("should return name", function () {
        expect(person.name).toBe("Ryan");
    });

    it("should return age", function () {
        expect(person.age).toBe("30");
    });

    it("should return gender", function () {
        expect(person.gender).toEqual("male");
    });

    it("should return interests", function () {
        expect(person.interests).toEqual(['being a hardarse', 'agile', 'ssd hard drives']);
    });
});
