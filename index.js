console.log("Helloworld");
// var can be assigned multiple times but let can't be assigned multiple times
var score = 34;
var score = 56;
console.log(score);
let points = 23;
const point = 32;
//it will give error because const is constant and can only be asigned once
// point = 4;
//Datatyypes

const s = "Subham";
console.log(s);
const f = true;
//null
let scar = null;
console.log(scar);
//undefined
let pel;
console.log(pel);
//String
console.log("this is a string");
console.log("this is a string");
console.log(`This is a string`);
let a = "My Name is";
let b = "Subham";
//This have a spacec,SPECIAL PROPERTY OF CONSOLE.LOG
console.log(a, b);
//This doesn't have a space
console.log(a + b);

//To uppercase
console.log("subham".toUpperCase());
//To lowercase
console.log("SUBHam".toLowerCase());
//Index of
console.log("Index of ".indexOf("e"));
//Trim
console.log("   Subham          ".trim());
//Last index of
console.log("Thes is a Last index of ".lastIndexOf("e"));
//include method
console.log("Subham".includes("ham"));
console.log("Subham".includes("nam"));
//slice
console.log("Subham".slice(0, 2));
//split
console.log("Subham".split(""));
console.log("place=Hair,Fall".split(","));
//String is immutable
let str = "Hello";
str[0] = "A";
//New memory location but string wont be modified
str = str + " There";
console.log(str);
//Typeof
console.log(typeof str);
//Methametical Operators
//+,-,*,/,%,**
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
//Methametical Expressions
//Using Priority and Precedence
//1 () Brackets
//2 ** Exponentiation
//3 * / % Multiplication, Division, Modulus
//4 + - Addition, Subtraction
console.log(2 + 2 * 2 - (2 % 2));
//Dynamic conversion
let num = 3;
console.log("The number is " + num);
//Loosly equal(==) vs strict equality (===)
//Give true
console.log(3 == "3");
//Give false
console.log(3 === "3");
//Type conversion
let stringType = "54";
console.log(typeof stringType);
//Number method
let numType = Number(stringType);
console.log(typeof numType);
//NaN- A string like "This" can't be converted into number(Not a Number)
stringType = "This";
numType = Number(stringType);
console.log(numType);
//Arrays
let dishes = ["Biriyani", "Parathay"];
console.log(dishes);
//Get individually in arrayys
console.log(dishes[0]);
console.log(dishes[1]);
//Override Array
dishes[0] = "Halim";
console.log(dishes);
//Indexof in Array
console.log(dishes.indexOf("Parathay"));

//Concat
let dishes2 = ["Rice", "Dal"];
console.log(dishes.concat(dishes2));
//Length
console.log(dishes2.concat(dishes).length);
let updatedDishes = dishes.concat(dishes2);
//This will return the length of array and not the array
console.log(updatedDishes.push("Biriyani"));
console.log(updatedDishes);
//This will get the updated length and also pop will work remove the last element
console.log(updatedDishes.pop());
console.log(updatedDishes);
//includes
let email = "let@gmail.com";
console.log(email.includes("@"));
