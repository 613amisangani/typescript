{let array:[string , number , boolean];

array = ["One", 23, false];

console.log({message:array[0]});
console.log(array[1]);}

{let myArray:number[] = [1,2,3,5];

let yourArray:Array<string> = ["one", "Twoo"];}

{
    const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.length) ;
} // 4

{
    const fruits:Array<string> = ["Banana", "Orange", "Apple"];
    fruits[fruits.length] = "Lemon"; 
}// Adds "Lemon" to fruits

{
     const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.pop())
}

{
    const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.shift());
} 

{
    const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon"))
};


{
    const fruits:string[] = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon"))
};


{
    const fruits:string[] = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(2, 0, "Lemon", "Kiwi"))
};


{
    const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(2, 2, "Lemon", "Kiwi"))
};


{
    const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
     console.log(fruits.splice(0, 1))
};

{
    const fruits:Array<string> = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits.slice(1))
};

{
const fruits:Array<string> = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3))
}

{
const fruits:Array<string> = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
}

