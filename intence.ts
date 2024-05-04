// CLASS 

class Person{
    name:string;
    age:number;
    hobbies:string[];

    constructor(name:string, ageNumber:number , hobbies:string[]){
        this.name = name;
        this.age = ageNumber;
        this.hobbies = hobbies;
    }

}

// Intence 

const box = new Person("nisha",23,["Chess","criket"]);
const box1 = new Person("ok",20,["Slepping","bolling"]);
const box2 = new Person("Anati",17,["criket","ridding"]);

console.log(box);
console.log(box1);
console.log(box2);
// console.log(personOne.name);
// console.log(personOne.age);
// console.log(personOne.hobbies);



// Generic:- 

function indentity<Type>(arg:Type):Type{
    return arg
}

let output1 = indentity<string>("myDemo");
let output2 = indentity<number>(12323);

console.log(output1);
console.log(output2);