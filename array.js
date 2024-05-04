{
    var array = void 0;
    array = ["One", 23, false];
    console.log({ message: array[0] });
    console.log(array[1]);
}
{
    var myArray = [1, 2, 3, 5];
    var yourArray = ["one", "Twoo"];
}
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.length);
} // 4
{
    var fruits = ["Banana", "Orange", "Apple"];
    fruits[fruits.length] = "Lemon";
} // Adds "Lemon" to fruits
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.pop());
}
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.shift());
}
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon"));
}
;
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon"));
}
;
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
}
;
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(2, 2, "Lemon", "Kiwi"));
}
;
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.splice(0, 1));
}
;
{
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits.slice(1));
}
;
{
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits.slice(1, 3));
}
{
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.sort());
}
