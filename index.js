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
//For loop
for (let i = 0; i < 5; i++) {
  console.log(`This iteration in for loop is ${i}`);
}
// While look
let i = 0;
while (i < 5) {
  console.log(`This iteration in while loop is ${i}`);
  i++;
}
//Do while
i = 0;
do {
  console.log(`This iteration in do while loop is ${i}`);
  i++;
} while (i < 5);
//else if
let budget = 6500;
if (budget > 2000) {
  console.log("You can buy a car");
} else {
  console.log("You can't buy a car");
}

// Break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`This is for the break statement ${i}`);
}
//Continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  //Excluded in 5 bcz of continue
  console.log(`This is for the continue statement ${i}`);
}
//Logical Operator
//And &&,||,!
let password = "qwerty@55";
//both of them need to be true
if (password.length > 5 && password.includes("@")) {
  console.log("Password is strong");
}
//anyone of them need to be true
if (password.length > 5 || password.includes("@")) {
  console.log("Password is strong");
}
//! reverse the statement
let status = false;
if (!status) {
  console.log("User is not active");
}

//Priority for arithmetic operations
//Not
//AND,OR from left to right
let result = (true && true) || (false && !false);
console.log(result);
//Variables and Scopes

let scope = 90; //global scope
if (true) {
  let scope = 100; //local scope
  console.log(scope);
}
console.log(scope);
// Ternary Operator
result = 40;
if (result > 60) {
  console.log("Qualify");
} else {
  console.log("Fail");
}
//this if else statement can be written as
result > 60 ? console.log("Qualify") : console.log("Fail");
//switch
day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}
//Functions
//function declearation
function nameOfFunction() {
  console.log("You are ruinning code present inside this function");
}
nameOfFunction(); //function call
//anonymous function
let func = function () {
  console.log("You are ruinning code present inside this anonymous function ");
};
func();
//parameter functions
let invite = function (name, time = "12.22") {
  //default parameter value if time is not given through parameters
  console.log("Hello " + name + " welcome to the party at", time);
};
invite("Subham");
// we can also do it like
let funcResult = invite;
funcResult("Das", "1:33");
//Return
let invite1 = function (name) {
  return `Welcome to the party ${name} return function`;
};
console.log(invite1("subham"));
//Arrow function
let invite2 = (name) => `Welcome to the party ${name} arrow function`; // here we dont have to use return
console.log(invite2("subham"));
//Passing function as an argument (Higher order function)
let upperCase = function (str) {
  return str.toUpperCase();
};
let lowerCase = function (str) {
  return str.toLowerCase();
};
let transformer = function (str, func) {
  return func(str);
};

console.log(transformer("Subham Das", upperCase)); //Transforming to uppercase
console.log(transformer("Subham Das", lowerCase)); //Transforming to lowercase
//Function returning another function (Higher order function)
let compliment = function (msg) {
  return function (name) {
    console.log(msg + " " + name);
  };
};
//First method
compliment("You are a good coder")("Subham");

//Second method
let complimented = compliment("You are a good coder");
complimented("Subham");
//iife-Immediately Invoked Function Expression
(function () {
  console.log("This is a iife");
})();
//with parameteres
(function (name) {
  console.log("This is a iife", name);
})("Subham");

//Set timeout->Runs function once after the interval

function greetings(name) {
  console.log("Hello" + name);
}
// setTimeout(greetings, 3000, "Subham");

//Set interval->Runs  function  repetedly after the interval
function greetings1(name) {
  console.log("Hello1" + name);
}
// setInterval(greetings1, 3000, "Subham");

//Hoisting
//Variables
console.log(hostingVariable);
var hostingVariable = 23;
//Functions
test();
function test() {
  console.log("This is a test");
}
//Other function like anonymous function wont get hoisting
//It wont get hoisted , you have to delare the variable and then use it
// test1();

const test1 = () => {
  console.log("This is a test in arrow function");
};

//Objects
let car = {
  color: "Black",
  model: 2022,
  company: "Honda",
};
console.log(car);
//Accessing the properties of the object
console.log(car["color"]);
console.log(car["model"]);
console.log(car.color);
console.log(car.model);

//Modify the properties of the object
car["color"] = "Brown";
console.log(car["color"]);
car.model = 2024;
console.log(car.model);

//Deleting a property
delete car.color;
delete car["color"];
console.log(car.color);
let person = {
  firstname: "Subham",
  age: 23,
  address: "Kolkata",
  "phone number": 1234567890,
  ageCalculator: function (birthyear) {
    let age = new Date().getFullYear() - birthyear;
    return age;
  },
  //This-Use only by normal function not by arow function or some other function,
  printDetail: function () {
    return `The name is ${this.firstname}`;
  },
};
console.log(person.ageCalculator(2000));
console.log(person.printDetail());
//For each loop
dishes.forEach(function (element) {
  console.log(element);
});
//Math
let number = 7.6;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number)); //remove decimal part
console.log(Math.random()); //gives random number between 0 and 1
console.log(Math.round(100 * Math.random()));
console.log(Math.PI);

//Call and apply
let firstPlain = {
  plainName: "Indigo",
  plainColor: "Blue",
  bookings: [],
  bookTicket: function (flightId, name) {
    console.log(
      `${name} have booked a flight on ${this.plainName} with flight id ${flightId}`
    );
    this.bookings.push({ name, flightId, flightName: this.plainName });
  },
};
firstPlain.bookTicket(1221, "Subham");
firstPlain.bookTicket(122, "Anya");
console.log(firstPlain.bookings);
let book = firstPlain.bookTicket; //This wont work because it is not getting the context of this.plainName,so we need to use call
book.call(firstPlain, 12, "Subham"); //Now we can also give context to some other object, we can make secondPlain

console.log(firstPlain.bookings);

let secondPlain = {
  plainName: "Air India Express",
  plainColor: "White",
  bookings: [],
  bookTicket: function (flightId, name) {
    console.log(
      `${name} have booked a flight on ${this.plainName} with flight id ${flightId}`
    );
    this.bookings.push({ name, flightId, flightName: this.plainName });
  },
};

book.call(secondPlain, 554, "das");
//Similar will be apply but the arguments will be in form of a array
book.apply(secondPlain, [559, "Twilight"]);
console.log(secondPlain.bookings);
//Bind
function bookFlight(name, flightId) {
  console.log(
    `${name} have booked a flight on ${this.plainName} with flight id ${flightId}`
  );
}
bookFlight(888, "Subham"); //It will give undefined in plain name because we dont have any plain name
book = bookFlight.bind(firstPlain); //using bind function
book(888, "Subham");

//pass by value and reference
let arr = [1, 2, 3, 4, 5];
let arr1 = arr;
arr1[3] = 10;
console.log(arr); //this will change the value of index 3 in arr also
let arr2 = [...arr]; //spread operator
arr2[3] = 12;
console.log(arr);
console.log("arr2", arr2);

//For in loop
for (let key in car) {
  console.log(key + " " + car[key]);
}
//DOM
console.log(document);
//getting the elements
console.log(document.querySelector("p"));
console.log(document.querySelector(".helo"));
console.log(document.querySelector("#helo"));
//some other methods
let tagElement = document.getElementsByTagName("p");
console.log(tagElement);
tagElement = document.getElementsByClassName("helo");
console.log(tagElement);
tagElement = document.getElementById("helo");
console.log(tagElement);
console.log(document.querySelector("#helo").innerText);
console.log(document.querySelector("#helo").innerHTML);
document.querySelector("#helo").innerHTML =
  "<h1>Here is a  Inner HTML edit</h1>";
document.querySelector("#helo").innerText = "Helo coders";
