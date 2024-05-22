"use strict";
//write in the terminal tsc -w to keep the index.ts working
console.log("I am starting typescript");
//Typeannotation
// let num1 = 5;//Here typescript is smart that it can detect that it is a numebr, you can also declare it by :number
// @ts-ignore
let num1 = 5;
num1 = 23;
console.log(num1);
let num2 = 12;
const addTwoNumber = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumber(num1, num2));
let fullName = "Subham";
console.log(fullName);
console.log(typeof fullName);
let num3 = 34; //Any allows you to make it any type of variable
console.log(num3);
num3 = "Subham Das";
console.log(num3);
num3 = 34;
console.log(num3);
console.log(num3.toString());
//number-Integer or floating type number
let myFavNumPos = 5;
let myFavNumNeg = -5;
let myFavNFloatNeg = -5.12;
let myFavNFloatPos = 5.12;
let nullNo = NaN;
console.log(myFavNumPos);
console.log(myFavNumNeg);
console.log(myFavNFloatNeg);
console.log(myFavNFloatPos);
console.log(nullNo);
let user = { name: "Subham", age: 23 };
//Typescript gives error if key is not there in the object , but js wont
console.log(user.name);
// console.log(user.surname);
///boolean
let isSubham = true;
console.log(isSubham);
console.log(!isSubham);
//Any-Dont use it
function getHero() {
    return "thor";
}
let hero = getHero(); //Any type of value
console.log(hero);
//Functions
//Function with no return type
// function addNumber(num) {//This function will give a error
//   num.toUpperCase();
//   return num + 2;
// }
// addNumber(2);
function addNumber(num) {
    return num + 2;
}
console.log(addNumber(23));
function getUpper(val) {
    //You have to give the type annotation
    return val.toUpperCase();
}
getUpper("Subham");
function signupUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signupUser("subham", "subham@gmail.com", false);
//Return type check
function addThree(val) {
    return val + 3 + "Helo";
}
console.log(addThree(45)); //here we are getting 48helo,we can also give the return type
function addFour(val) {
    return val + 4;
}
console.log(addFour(45));
let heros = ["Thor", "Spiderman", "Ironman"];
let newStr = heros.map((hero) => `hero is ${hero}`);
console.log(newStr);
//Void
function handleError(errmsg) {
    console.log("This function doesn't return anything");
}
//never
function handleError1(errmsg) {
    throw new Error(errmsg);
}
//Bad behavior in objects
const User = {
    name: "subham",
    email: "subham@gmail.com",
    isAvailable: true,
};
// function createUser({ name: string; isPaid: boolean }) {}//it is not going to recognize the inline object insted you can use
function createUser(user) {
    console.log(user.name, user.isPaid);
}
createUser({ name: "Subham", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
console.log(createCourse());
function createUser1(user) {
    return user;
}
console.log(createUser1({ name: "SUbham", email: "", isActive: false }));
let myUser = {
    _id: "123",
    name: "Subham",
    email: "S@gmail.com ",
    isActive: true,
};
console.log(myUser);
let person1 = {
    _id: "123",
    name: "Subham",
    email: "s@gmail.com",
    isActive: true,
    creditCartDetail: true,
    cardNumber: 123456789,
    cvv: 123,
    bankName: "HDFC",
    address: "Pune",
    pincode: 411001,
};
console.log(person1);
//Array
const superHeros = [];
const superHeros1 = [];
superHeros.push("spidy", "superman");
superHeros1.push("spidy", "superman");
console.log(superHeros);
console.log(superHeros1);
const allPersonDetails = [];
allPersonDetails.push(person1);
allPersonDetails.push({
    _id: "123",
    name: "Subham",
    email: "s@gmail.com",
    isActive: true,
    creditCartDetail: true,
    cardNumber: 9876343434,
    cvv: 223,
    bankName: "SBI",
    address: "Maharastra",
    pincode: 33333,
});
console.log(allPersonDetails);
//Union Types
let score;
score = "33";
console.log(score);
let personDetails1;
personDetails1 = {
    _id: "123",
    name: "Subham",
    email: "s@gmail.com",
    isActive: true,
    creditCartDetail: true,
};
function getDbId(_id) {
    if (typeof _id === "string")
        return _id.toLowerCase();
    else
        return _id + 2;
}
console.log(getDbId("34"));
const data = [1, 2, 3];
console.log(data);
const data1 = ["1", "2", "3"];
console.log(data1);
const data2 = ["1", 2, "3"];
console.log(data2);
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment="crew"//It will give error becausae we dont have any type called as crew
//Touples
const person = ["Subham", 23, true];
console.log(person);
const red = [1, 2, 3];
red.push(34);
console.log(red); //It can't catch a touple
//Enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice[SeatChoice["WINDOW"] = 3] = "WINDOW";
    SeatChoice["FOURTH"] = "fourth";
})(SeatChoice || (SeatChoice = {}));
let seatName = SeatChoice.WINDOW;
console.log(seatName);
seatName = SeatChoice.AISLE;
console.log(seatName);
const userA = {
    id: 1,
    name: "Subham",
    email: "Sub@gmail.com",
    startTrial: () => {
        return "subham";
    },
    startTrial1: () => {
        return "Das";
    },
    getCoupon: function (name, val) {
        return val;
    },
    tokenName: "ERC",
};
console.log(userA);
let userB = {
    id: 1,
    name: "Subham",
    email: "Sub@gmail.com",
    startTrial: () => {
        return "subham";
    },
    startTrial1: () => {
        return "Das";
    },
    getCoupon: function (name, val) {
        return val;
    },
    tokenName: "ERC",
    role: "admin",
};
console.log(userB);
//you can't do this with type
console.log("tsc -w is working"); //use tsc -w to keep the index.ts running
//classes
class User4 {
    constructor(email, name) {
        this.city = "siliguri";
        this.email = email;
        this.name = name;
    }
}
const subham = new User4("s@h.com", "subham");
console.log(subham);
//private and public
// console.log(subham.city);//You can't access it because it is a private variable
// we can also declare user as
class User5 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "siliguri";
        this.email = email;
        this.name = name;
    }
}
