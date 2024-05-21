console.log("I am starting typescript");
//Typeannotation
// let num1 = 5;//Here typescript is smart that it can detect that it is a numebr, you can also declare it by :number
// @ts-ignore
let num1: number = 5;
num1 = 23;
console.log(num1);
let num2: number = 12;
const addTwoNumber = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(addTwoNumber(num1, num2));
let fullName: string = "Subham";
console.log(fullName);
console.log(typeof fullName);
let num3: any = 34; //Any allows you to make it any type of variable
console.log(num3);
num3 = "Subham Das";
console.log(num3);
num3 = 34;
console.log(num3);
console.log(num3.toString());
//number-Integer or floating type number
let myFavNumPos: number = 5;
let myFavNumNeg: number = -5;
let myFavNFloatNeg: number = -5.12;
let nullNo: number = NaN;
console.log(nullNo);
let user = { name: "Subham", age: 23 };
//Typescript gives error if key is not there in the object , but js wont
console.log(user.name);
// console.log(user.surname);
