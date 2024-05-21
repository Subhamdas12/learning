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
//IndexOf
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
//setting attributes
document
  .querySelector("a")
  .setAttribute("href", "https://github.com/Subhamdas12");
document.querySelector("a").style.color = "Blue";
document.querySelector("a").style.backgroundColor = "Red";
document.querySelector("a").style.fontSize = "5rem";
document.querySelector("a").classList.add("newClass");
document.querySelector("a").classList.replace("newClass", "newClass1");
document.querySelector("a").classList.remove("newClass1");
//Children
console.log(document.querySelector(".childrenDiv").children);
console.log(Array.from(document.querySelector(".childrenDiv").children)); //Array from convert the elements into an array
let element = document.querySelector(".childrenDiv");
//Like this we can add class in each element
Array.from(document.querySelector(".childrenDiv").children).forEach(function (
  element
) {
  element.classList.add("cotton");
});

console.log(Array.from(document.querySelector(".childrenDiv").children)); //Array from convert the elements into an array
console.log(document.querySelector(".childrenDivClasses").parentElement); //Gives the parent
console.log(
  document.querySelector(".childrenDivmiddleChildren").previousElementSibling
); //Gives the prev sibling
console.log(
  document.querySelector(".childrenDivmiddleChildren").nextElementSibling
); //Gives the next sibling

//Events
document.querySelector("#first").addEventListener("click", function (e) {
  console.log("You clicked on first");
  console.log(e);
});
document.querySelectorAll(".childrenDiv").forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.target.style.textDecoration = "line-through";
  });
});
//Create and remove element
document.querySelectorAll(".childrenDiv").forEach(function (e) {
  e.addEventListener("click", function (e) {
    e.target.remove();
  });
});

document.querySelector(".clickMe").addEventListener("click", function () {
  let newElem = document.createElement("h4");
  newElem.innerText = "Helo";
  console.log("This is working");
  let childrenClassessDiv = document.querySelector(".childrenDiv");
  console.log(childrenClassessDiv);
  childrenClassessDiv.append(newElem); //Add in the end
});
document.querySelector(".clickMe1").addEventListener("click", function () {
  let newElem = document.createElement("h4");
  newElem.innerText = "Helo";
  console.log("This is working");
  let childrenClassessDiv = document.querySelector(".childrenDiv");
  console.log(childrenClassessDiv);
  childrenClassessDiv.prepend(newElem); //Add in the start
});
//Bubbling and deligation

//ARRAYS
let letter = [1, 2, 3, 4, 5];
//Reverse-It mutates the array
letter.reverse();
console.log(letter);
//Concat-Non mutating
let letter2 = [6, 7, 8];
console.log(letter.concat(letter2));
//Join
console.log(letter.join("-"));
//slice-it makes a new array,doesnot mutate the original array
console.log(letter.slice(0, 2));
//splice-Mutating method
let letter3 = letter.concat(letter2);
console.log(letter3);
console.log(letter3.splice(1, 1, 1));
console.log(letter3); //Here the original array will be changed
console.log(letter3.splice(1, 1, 1, 0, 0));
console.log(letter3); //It added the elements
//At
console.log(letter3.at(-1)); //Getting the element

//Map
let salary = [12000, 5000, 7000, 9000];
let newSalary = salary.map((salary) => {
  return salary * 2;
});
console.log(newSalary);
//Filter
newSalary = salary.filter((salary) => {
  return salary != 12000; //The one which will be true will only be kept
});

console.log(newSalary);
//Reduce

arr = [1, 2, 3];
let sum = arr.reduce(function (total, current) {
  console.log(total + " " + current);
  return total + current;
}, 0);
console.log(sum);
//Find methods
//It returns the first element we are looking for
let student = [
  { id: 1, name: "Subham" },
  { id: 2, name: "Das" },
  { id: 3, name: "Alas" },
];
result = student.find((student) => {
  return student.id == 1;
});
console.log(result);
//Find index
console.log(student);
result = student.findIndex((student) => {
  return student.id == 2;
});
console.log(result);
//some and every
//in some any of the element should satisfy the condition
console.log(
  salary.some((salary) => {
    return salary > 5000;
  })
);
//in every all the elements should satisfy the condition
console.log(
  salary.every((salary) => {
    return salary > 5000;
  })
);
//flat
//It will remove the subarray
arr = [12, 14, 54, [5, 4, 3, [62, 22]], 12, 66];
console.log(arr);
console.log(arr.flat()); //by default, it will flat 1 value
console.log(arr.flat(2)); //here you need to say the amount of level you want to flat

//flatmap
console.log(student);
let newStudent = student.flatMap((item) => {
  if (item.id === 3) {
    return [
      item,
      {
        id: 4,
        name: "Aman",
      },
    ];
  } else {
    return [item];
  }
});
console.log(newStudent);
//sorting array
num = [1, 2, 3, 4, 5, -1, -2, -4];
str = ["a", "b", "c", "d", "m", "f", "u"];
console.log(str.sort());
console.log(num.sort()); //here it is sorting according to the string
//to use for the numbers

console.log(num.sort((a, b) => a - b)); //Ascending sorting
console.log(num.sort((a, b) => b - a)); //Descending sorting
//Chaining of method
num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.slice(0, 3).splice(2, 1, 7).push(1, 2, 3)); //this is called chaining where me use multiple functions together
console.log(num); //It is not changed because slice creates a new array
let num2 = num.slice(0, 3);
console.log(num2);
num2 = num2.splice(2, 1, 7);
console.log(num2); //It is giving 3 because it returns the removed element
console.log(num2.push(1, 2, 3)); //push returns the length of the array
console.log(num2);
//Date and time
let currentDate = new Date(2021, 2, 21); //Year Month Day
console.log(currentDate);
console.log(new Date(0)); //0th is the time when started
console.log(new Date().getTime()); //Total time in ms from the start date that is Thu Jan 01 1970 05:30:00
console.log(new Date().getFullYear()); //get full year
console.log(new Date().getMonth());
console.log(new Date().getDay());
console.log(new Date().getHours());

//Making a clock
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let seconds = document.querySelector(".second");

setInterval(() => {
  hour.textContent =
    new Date().getHours() > 12
      ? new Date().getHours() - 12
      : new Date().getHours();
  minute.textContent = new Date().getMinutes();
  seconds.textContent = new Date().getSeconds();
}, 1000);
//Localstorage
console.log(localStorage);
//setitem
localStorage.setItem("name", "Rahul");
localStorage.setItem("age", 24);
//getItem
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
//update item
localStorage.setItem("name", "Rukesh"); //Override the previous value
console.log(localStorage);

//Removing/Delete
localStorage.removeItem("name");
console.log(localStorage);
localStorage.clear();
//Remove all data
console.log(localStorage);
//using localstorage
let vehicle = [
  { company: "Honda", model: 2009 },
  { company: "Maruti", model: 2023 },
];

console.log(JSON.stringify(vehicle));
localStorage.setItem("vehicle", JSON.stringify(vehicle)); //we need to convert it into string format
console.log(localStorage);
let objectFormat = localStorage.getItem("vehicle");
console.log(objectFormat); //It is a string format
vehicle = JSON.parse(objectFormat); //Used to covert string into object again
console.log(vehicle);
//OOPS
//Constructor and new operator
let Car = function (company, model) {
  this.company = company;
  this.model = model;
  //writing a function inside a function is not a good practice , insted you can use prototype
  this.startEngine = function () {
    console.log("Engine started");
  };
};
let newInstance = new Car("Volvo", 2023);
console.log(newInstance instanceof Car); //Going to give true or false
console.log(newInstance);
let instance = new Car("Maruti", 2024);
console.log(instance);
Car.prototype.startEngine1 = function () {
  console.log("start Engine");
};
let newInstance1 = new Car("BMW", 2021);
console.log(newInstance1);
newInstance.startEngine();
newInstance1.startEngine1();
console.log(newInstance1.__proto__);
//ES6
class Car1 {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }
  startEngine() {
    console.log("Engine started");
  }
}

let honda = new Car1("Red", 2022);
console.log(honda);
honda.startEngine();

//Important points
//classes are not hoisted
//classes are also first class citizens(pass as an object)
//Classes are executed in strict mode

//Getters and Setters
class Car2 {
  constructor(company, model) {
    this.company = company;
    this.model = model;
  }

  carMethod() {
    console.log("Car Method");
  }
  get getCompanyDetails() {
    return this.company;
  }

  get getDescription() {
    return this.company + " " + this.model;
  }
  set setCompanyName(company) {
    this.company = company;
  }
}

honda = new Car2("Honda", 2023);
console.log(honda.getCompanyDetails);
honda.setCompanyName = "BMW";
console.log(honda.getCompanyDetails);
console.log(honda.getDescription);
//Static method
Car2.breakMethod = function () {
  console.log("Break Method");
};
Car2.breakMethod(); //static method
//uses of static method
console.log(JSON.stringify(vehicle));
console.log(JSON.parse(JSON.stringify(vehicle)));
console.log(Number.parseInt("22"));
console.log(Array.from(document.querySelector(".childrenDiv").children)); //Array from convert the elements into an array

//Inheritance
class Bike extends Car2 {
  //Add some new properties and "methods" as well
  constructor(company, model, engineCapacity) {
    super(company, model); //sets in the color and model in th e
    this.engineCapacity = engineCapacity;
  }
  bikeMethod() {
    console.log("Bike Method");
  }
}
let newBike = new Bike("Suzuki", 2022, "2000CC");
console.log(newBike);
newBike.bikeMethod();
console.log(newBike.__proto__); //shows the prototype methods of bike
console.log(newBike.__proto__.__proto__); //shows the prototype methods of car
//Chaining of methods
class lockerBook {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.operations = [];
  }
  get getOperations() {
    return this.operations;
  }
  deposit(amount) {
    this.operations.push(amount);
    return this;
  }
  withdraw(amount) {
    this.deposit(-amount);
    return this;
  }
}

let account = new lockerBook("Subham", 123);
console.log(account);
account.deposit(53);
console.log(account.getOperations);
account.withdraw(33);
console.log(account.getOperations);
//using chaining
account.deposit(23).withdraw(11);
console.log(account.getOperations);
//Asynchronous Javascript
//Async
console.log(1);
console.log(2);

setTimeout(() => {
  // console.log(3);
}, 1000); //It is not going the block the below code because of async nature
console.log(4);
console.log(5);
//Making HTTP requests

//value   state           Description
//0        UNSENT         The request has been created. The open() method has not been called yet.
//1        OPENED         The open() method has been called.
//2        HEADERS_RECEIVED The send() method has been called, and the HTTP request headers and status code are available.
//3        LOADING        The responseText property has some partial data.
//4        DONE           The responseText property has the complete response.

//HTTP Response status code
//Informational resonse(100-199)
//Successful response(200-299)
//Redirection(300-399)
//Client error(400-499)
//Server error(500-599)

function todos(callbacks) {
  let request = new XMLHttpRequest();
  console.log(request);
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos1");//giving 404 error
  request.send();
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState); //It is showing the ready state
    if (request.readyState == 4 && request.status === 200) {
      // console.log(request.responseText, request.status); //It is showing the response text

      callbacks(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callbacks("Data could not be fetched", undefined);
    }
  });
}
//callbacks
todos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(JSON.parse(data)); //changing the string into object
  }
});
console.log(1); //It is to show that the todos is a async code
//Callback hells
todos = (resource, callback) => {
  let request = new XMLHttpRequest();
  // console.log(request);
  request.open("GET", resource);
  request.send();
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState); //It is showing the ready state
    if (request.readyState == 4 && request.status === 200) {
      // console.log(request.responseText, request.status); //It is showing the response text

      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("Data could not be fetched", undefined);
    }
  });
};
//Callback hell
todos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
  if (err) {
    // console.log(err);
  } else {
    // console.log(JSON.parse(data)); //changing the string into object
  }
  todos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
    if (err) {
      // console.log(err);
    } else {
      // console.log(JSON.parse(data)); //changing the string into object
    }
    todos("https://jsonplaceholder.typicode.com/todos/2", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(JSON.parse(data)); //changing the string into object
      }
    });
  });
});
//Promise
let getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve("Some data");
    reject("Some error");
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

todos = (resource) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status === 200) {
        resolve(request.responseText);
      } else if (request.readyState === 4) {
        reject("Could not fetch the data");
      }
    });
  });
};

todos("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    // console.log(JSON.parse(data));
    return todos("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    // console.log(JSON.parse(data));
    return todos("https://jsonplaceholder.typicode.com/todos/3");
    // return todos("https://jsonplaceholder.typicode.com/todos1/3");//This will only give one error,not multerrors like promises
  })
  .then((data) => {
    // console.log(JSON.parse(data));
  })
  .catch((error) => {
    console.log(error);
  });
//FetchAPI
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // console.log("promise resolved", response);
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.log("error occured", err);
  });

// async/await
function getProduct() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (response.status != 200) {
        throw new Error("response not got");
      }
      const data = await response.json();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
}
getProduct()
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//Array destructuring
console.log(num);
[first, second] = num;
console.log(first);
console.log(second);
[first, , , fourth] = num;
console.log(fourth);
//swipping numbers using destrcturing
[first, fourth] = [fourth, first];
console.log("first", first);
console.log("fourth", fourth);
//Object destructuring
let hotel = {
  name: "hotel",
  location: "Street xyz",
  price: 1000,
  customer: ["Subham", "Dehitara", "Cux"],
};
let { name, price } = hotel;
console.log(name);
console.log(price);
let { name: hotelName, price: hotelRent } = hotel;
console.log(hotelName);
console.log(hotelRent);
//We can give a default value also
let { nameOfHotel = "Dex", customer = [] } = hotel;
console.log(nameOfHotel);
console.log(customer);
//spread operators
console.log(...num);
let newNum = [1, 2, 3, ...num, 33, 44];
console.log(newNum);
console.log(...str);
str = "subham das";
console.log(...str);
//Rest Operator
let [num1, num4, ...newNum2] = newNum;
console.log(num1);
console.log(num4);
console.log(newNum2);
//Short circuiting
//False value=>0,False,null,undefined,''(empty string)
result = "programmers" && "coders";
console.log(result);
result = "" && "coders";
console.log(result);
result = "" || "coders";
console.log(result);
result = "programmers" || "coders";
console.log(result);
//Nullish Qualescing - only null and undefined are falsy value
result = "programmers" ?? "coders";
console.log(result);
result = "" ?? "coders";
console.log(result);
result = 0 ?? "coders";
console.log(result);
result = null ?? "coders";
console.log(result);
console.log(newNum);
//forof loop
for (const iterator of newNum) {
  console.log(iterator);
}
//This will give index also
for (const [key, iterator] of newNum.entries()) {
  console.log(key, iterator);
}

for (const key in newNum) {
  console.log(key); //Here we can also use for in but it will give us a string value
}
//Optional chaining

let obj1 = {
  name: "Subham",
  place: "Siliguri",
  talent: { blockchain: 90, webDev: 44 },
};
console.log(obj1.name); //if it is available it will just give the output
// console.log(obj1.talent1.cpp);//It will give undefined because talent1 is not available
console.log(obj1.talent1?.cpp); //It will check first whether talent1 is available or not otherwaise it will give a undefined,its like
if (obj1.talent1 && obj1.talent1.cpp) {
  console.log(obj1.talent1.cpp);
}
//Getting keys and values in objects
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
//Sets
let itemSet = new Set([1, 2, 3, 4, 3, 3, 2, 34, 3, 234, 23, 423]);
console.log(itemSet);
console.log(itemSet.size);
console.log(itemSet.has(2));
console.log(itemSet.has(9));
//Maps
let ownerMap = new Map();
ownerMap.set(1, "Subham");
ownerMap.set(2, "Das");
ownerMap.set("FirstName", "Subham");
ownerMap.set("Surname", "Das");
console.log(ownerMap);
console.log(ownerMap.get(2));
console.log(ownerMap.get("FirstName"));
ownerMap.set(true, "I am available today").set(false, "I am closed today");
console.log(ownerMap);
console.log(second);
