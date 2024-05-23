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
//Getter and setters
class User6 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "siliguri";
        this.courseAmount = 1;
        this.isFamily = false;
        this.email = email;
        this.name = name;
    }
    get getCourseAmount() {
        return this.courseAmount;
    }
    set setCourseAmount(amount) {
        this.courseAmount = amount;
    }
}
let newUser = new User6("s@gmail.com", "subham");
console.log(newUser.getCourseAmount);
newUser.setCourseAmount = 12;
console.log(newUser.getCourseAmount);
//protected-isFamily is protected in User6
class User7 extends User6 {
    get getFamily() {
        return this.isFamily;
    }
    set setFamily(val) {
        this.isFamily = val;
    }
}
let newUser1 = new User7("s@gmail.com", "subham");
console.log(newUser1);
console.log(newUser1.getFamily);
newUser1.setFamily = true;
console.log(newUser1.getFamily);
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("create Story Implimented");
    }
}
const app = new Instagram("click", "voip", 34);
app.createStory();
//Abstract class
class TakeVideo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Mobile extends TakeVideo {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.burst = burst;
    }
    clickVideo() {
        return true;
    }
}
let samsung = new Mobile("Click", "Wafa", 2);
console.log(samsung);
//Generics
const sc1 = [];
const sc2 = [];
function identityOne(val) {
    //It can return any value of number or string , it may return string if you give it number as parameter
    return val;
}
function identityTwo(val) {
    //It will return a datatype of any value given to it
    return val;
}
function identityThree(val) {
    //Now it will only return the datatype value which is passed in the parameters like if you give it integer , it will return a integer
    return val;
}
//or you can also write identityThree function as
function identityFour(val) {
    return val;
}
console.log(identityFour(2));
//You can also make your own datatype using type or interface
console.log(identityFour({ cameraMode: "click", filter: "voib", burst: 3 }));
//Generics in array and arrow function
let product = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function identityFive(product) {
    return product[2];
}
//You can also write as
function identitySix(product) {
    return product[2];
}
console.log(identityFive(product));
//For arrow functions
const identitySeven = (product) => {
    return product[3];
};
const identityEight = (product) => {
    return product[3];
};
console.log(identitySeven(product));
//Generic classes
function identityTen(valOne, valTwo) {
    return { valOne, valTwo };
}
console.log(identityTen(2, "subham"));
function identityEleven(valOne, valTwo) {
    return { valOne, valTwo };
}
console.log(identityEleven(2, {
    connection: "MongoDB",
    username: "subham",
    password: "1234456676",
}));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
    get getCart() {
        return this.cart;
    }
}
let sel1 = new Sellable();
sel1.addToCart(2);
sel1.addToCart(34);
console.log(sel1.getCart);
//Type Narrowing
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
//Here the string can be a null like ""
//so we can use something like
function detectType1(val) {
    if (!val) {
        console.log("This is a null value");
        return val;
    }
    else if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
detectType1("");
function isAdminLogin(account) {
    if ("isAdmin" in account) {
        console.log("This is an admin account");
        return account;
    }
    else {
        console.log("This is a user account");
        return account;
    }
}
console.log(isAdminLogin({ name: "Subham", email: "s@gmail.com" }));
console.log(isAdminLogin({ name: "Subham", email: "s@gmail.com", isAdmin: false }));
//InstanceOf
function logValue(x) {
    if (x instanceof Date) {
        return x.toUTCString();
    }
    else if (typeof x === "string") {
        return x.toUpperCase();
    }
    else {
        return x;
    }
}
console.log(logValue(new Date()));
console.log(logValue(new Array(1, 2, 3)));
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "fish food";
    }
    else {
        return "bird food";
    }
}
console.log(getFood({
    swim: () => {
        console.log("This is for the fish");
    },
}));
console.log(getFood({
    fly: () => {
        console.log("This is for the bird");
    },
}));
function getArea(shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind == "square") {
        return shape.sideLength ** 2;
    }
}
function getArea1(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _exhaustiveCheck = shape; //If we remove any of these , the exhaustive check will give an error
            return _exhaustiveCheck;
    }
}
