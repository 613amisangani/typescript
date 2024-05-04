// {let myname:string = "meet"
// console.log(myname)}
// {let name:number = 43
// console.log(name)}
// {let myname:any = 1
// console.log(myname)}
// {let number1:number = 12
// let  number2:string ="23"
// let sum = (number1+number2)
// console.log(sum)}
// {let number1:number = 12
// let  number2:string ="23"
// let sum:number|string = (number1+number2)
// console.log(sum)}
// {let myname:string = "meet"
//  console.log(myname)}
{
    var demoname = "something";
    console.log(demoname.length);
}
{
    var demoname = "something";
    console.log(demoname);
}
{
    var demoname = 234.876;
    var routnumber = demoname.toFixed();
    console.log(routnumber);
}
var add = function (a, b) { return a + b; };
console.log(add(20, 2));
function newadd(a, b) {
    return a + b;
}
console.log(newadd(2, 3));
{
    var text = "Apple, Banana, Kiwi";
    var length_1 = text.slice(7, 13);
    console.log(length_1);
}
{
    var text = "Please visit SkillQode!";
    var replaceStr = text.replace("SkillQode", "Microsoft");
    console.log(replaceStr);
}
// {
// let text:string = "5";
// let padded:string = text.padEnd(4,"x"); 
// console.log(padded)
// }
// {let text:string = "I love cats. Cats are very easy to love. Cats are very popular.";
// console.log(text.replaceAll("Cats", "Dogs"));}
