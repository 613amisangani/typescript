// CLASS 
var Person = /** @class */ (function () {
    function Person(name, ageNumber, hobbies) {
        this.name = name;
        this.age = ageNumber;
        this.hobbies = hobbies;
    }
    return Person;
}());
// Intence 
var personOne = new Person("nirbhay", 23, ["Chess", "criket"]);
var personAmi = new Person("Ami", 20, ["Slepping", "bolling"]);
var personAnkush = new Person("Ankush", 17, ["criket", "ridding"]);
console.log(personOne);
console.log(personAmi);
console.log(personAnkush);
// console.log(personOne.name);
// console.log(personOne.age);
// console.log(personOne.hobbies);
// Generic:- 
function indentity(arg) {
    return arg;
}
var output1 = indentity("myDemo");
var output2 = indentity(12323);
console.log(output1);
console.log(output2);
