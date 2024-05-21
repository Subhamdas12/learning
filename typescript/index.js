"use strict";
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
let nullNo = NaN;
console.log(nullNo);
let user = { name: "Subham", age: 23 };
console.log(user.name);
// console.log(user.surname);//It will give error directly here during the compiletime
