//write in the terminal tsc -w to keep the index.ts working
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
let myFavNFloatPos: number = 5.12;
let nullNo: number = NaN;
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
let isSubham: boolean = true;
console.log(isSubham);
console.log(!isSubham);
//Any-Dont use it
function getHero(): any {
  return "thor";
}
let hero: any = getHero(); //Any type of value
console.log(hero);
//Functions
//Function with no return type
// function addNumber(num) {//This function will give a error
//   num.toUpperCase();
//   return num + 2;
// }
// addNumber(2);
function addNumber(num: number) {
  return num + 2;
}
console.log(addNumber(23));
function getUpper(val: string) {
  //You have to give the type annotation
  return val.toUpperCase();
}
getUpper("Subham");
function signupUser(name: string, email: string, isPaid: boolean) {
  console.log(name, email, isPaid);
}
signupUser("subham", "subham@gmail.com", false);
//Return type check
function addThree(val: number) {
  return val + 3 + "Helo";
}
console.log(addThree(45)); //here we are getting 48helo,we can also give the return type
function addFour(val: number): number {
  return val + 4;
}
console.log(addFour(45));
let heros = ["Thor", "Spiderman", "Ironman"];
let newStr = heros.map((hero): string => `hero is ${hero}`);
console.log(newStr);
//Void
function handleError(errmsg: string): void {
  console.log("This function doesn't return anything");
}
//never
function handleError1(errmsg: string): never {
  throw new Error(errmsg);
}
//Bad behavior in objects
const User = {
  name: "subham",
  email: "subham@gmail.com",
  isAvailable: true,
};
// function createUser({ name: string; isPaid: boolean }) {}//it is not going to recognize the inline object insted you can use
function createUser(user: { name: string; isPaid: boolean }) {
  console.log(user.name, user.isPaid);
}

createUser({ name: "Subham", isPaid: false });
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}
console.log(createCourse());
//Type alliance
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser1(user: User): User {
  return user;
}
console.log(createUser1({ name: "SUbham", email: "", isActive: false }));
//ReadOnly and optional
type User1 = {
  readonly _id: string; //ReadOnly
  name: string;
  email: string;
  isActive: boolean;
  creditCartDetail?: boolean; //optional
};

type cardDetails = {
  cardNumber: number;
  cvv: number;
  bankName: string;
  dateOfBirth?: number; //optional
};
let myUser: User1 = {
  _id: "123",
  name: "Subham",
  email: "S@gmail.com ",
  isActive: true,
};
console.log(myUser);
// myUser._id = "344";//It will give error because it is a readonly
//We can use existing types to make new types
type personDetails = User1 &
  cardDetails & {
    address: string;
    pincode: number;
  };

let person1: personDetails = {
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
const superHeros: string[] = [];
const superHeros1: Array<string> = [];
superHeros.push("spidy", "superman");
superHeros1.push("spidy", "superman");
console.log(superHeros);
console.log(superHeros1);
const allPersonDetails: personDetails[] = [];
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
let score: number | string;
score = "33";
console.log(score);
let personDetails1: User1 | cardDetails;
personDetails1 = {
  _id: "123",
  name: "Subham",
  email: "s@gmail.com",
  isActive: true,
  creditCartDetail: true,
};
function getDbId(_id: string | number) {
  if (typeof _id === "string") return _id.toLowerCase();
  else return _id + 2;
}
console.log(getDbId("34"));

const data: number[] = [1, 2, 3];
console.log(data);
const data1: string[] = ["1", "2", "3"];
console.log(data1);
const data2: (string | number | boolean)[] = ["1", 2, "3"];
console.log(data2);
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment="crew"//It will give error becausae we dont have any type called as crew

//Touples
const person: [string, number, boolean] = ["Subham", 23, true];
console.log(person);
type rgb = [number, number, number];
const red: rgb = [1, 2, 3];
red.push(34);
console.log(red); //It can't catch a touple
//Enums
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = "middle",
  WINDOW = 3,
  FOURTH = "fourth",
}
let seatName = SeatChoice.WINDOW;
console.log(seatName);
seatName = SeatChoice.AISLE;
console.log(seatName);
//Interfaces
interface User3 {
  readonly id: number | string;
  name: string;
  email: string;
  startTrial: () => string;
  startTrial1(): string;
  getCoupon(couponname: string, value: number): number;
}
const userA: User3 = {
  id: 1,
  name: "Subham",
  email: "Sub@gmail.com",
  startTrial: () => {
    return "subham";
  },
  startTrial1: () => {
    return "Das";
  },
  getCoupon: function (name: "subham das", val: 23) {
    return val;
  },
  tokenName: "ERC",
};
console.log(userA);
//Difference between type and interface
//Type can't be modified after you declare it
interface User3 {
  tokenName: string;
}
interface Admin extends User3 {
  role: "admin" | "ta" | "learner";
}
let userB: Admin = {
  id: 1,
  name: "Subham",
  email: "Sub@gmail.com",
  startTrial: () => {
    return "subham";
  },
  startTrial1: () => {
    return "Das";
  },
  getCoupon: function (name: "subham das", val: 23) {
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
  email: string;
  name: string;
  private readonly city: string = "siliguri";
  constructor(email: string, name: string) {
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
  private readonly city: string = "siliguri";

  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }
}
//Getter and setters
class User6 {
  private readonly city: string = "siliguri";
  private courseAmount: number = 1;
  protected isFamily: boolean = false;
  constructor(public email: string, public name: string) {
    this.email = email;
    this.name = name;
  }
  get getCourseAmount(): number {
    return this.courseAmount;
  }
  set setCourseAmount(amount: number) {
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
  set setFamily(val: boolean) {
    this.isFamily = val;
  }
}

let newUser1 = new User7("s@gmail.com", "subham");
console.log(newUser1);
console.log(newUser1.getFamily);
newUser1.setFamily = true;
console.log(newUser1.getFamily);
//Interfaces usefulness in class
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface CreateStory {
  createStory(): void;
}

class Instagram implements TakePhoto, CreateStory {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  createStory(): void {
    console.log("create Story Implimented");
  }
}

const app = new Instagram("click", "voip", 34);
app.createStory();
//Abstract class
abstract class TakeVideo {
  constructor(public cameraMode: string, public filter: string) {}
  abstract clickVideo(): boolean;
}

class Mobile extends TakeVideo {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
    this.burst = burst;
  }
  clickVideo(): boolean {
    return true;
  }
}

let samsung = new Mobile("Click", "Wafa", 2);
console.log(samsung);
//Generics
const sc1: Array<number> = [];
const sc2: Array<string> = [];
function identityOne(val: number | string): number | string {
  //It can return any value of number or string , it may return string if you give it number as parameter
  return val;
}
function identityTwo(val: any): any {
  //It will return a datatype of any value given to it
  return val;
}

function identityThree<Type>(val: Type): Type {
  //Now it will only return the datatype value which is passed in the parameters like if you give it integer , it will return a integer
  return val;
}

//or you can also write identityThree function as
function identityFour<T>(val: T): T {
  return val;
}
console.log(identityFour(2));
//You can also make your own datatype using type or interface
console.log(
  identityFour<TakePhoto>({ cameraMode: "click", filter: "voib", burst: 3 })
);
//Generics in array and arrow function
let product: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function identityFive<T>(product: Array<T>): T {
  return product[2];
}
//You can also write as
function identitySix<T>(product: T[]): T {
  return product[2];
}
console.log(identityFive(product));
//For arrow functions
const identitySeven = <T>(product: Array<T>): T => {
  return product[3];
};
const identityEight = <T>(product: T[]): T => {
  return product[3];
};

console.log(identitySeven(product));
//Generic classes

function identityTen<T, U>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

console.log(identityTen(2, "subham"));
interface Database {
  connection: string;
  username: string;
  password: string;
}
function identityEleven<T, U extends Database>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

console.log(
  identityEleven(2, {
    connection: "MongoDB",
    username: "subham",
    password: "1234456676",
  })
);

class Sellable<T> {
  public cart: T[] = [];
  public addToCart(product: T) {
    this.cart.push(product);
  }
  get getCart(): T[] {
    return this.cart;
  }
}

let sel1 = new Sellable<number>();
sel1.addToCart(2);
sel1.addToCart(34);
console.log(sel1.getCart);
//Type Narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}
//Here the string can be a null like ""
//so we can use something like
function detectType1(val: string | number | null) {
  if (!val) {
    console.log("This is a null value");
    return val;
  } else if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 2;
}

detectType1("");

//Operator narrowing
interface UserLogin {
  name: string;
  email: string;
}
interface AdminLogin {
  name: string;
  email: string;
  isAdmin: boolean;
}
function isAdminLogin(account: UserLogin | AdminLogin): UserLogin | AdminLogin {
  if ("isAdmin" in account) {
    console.log("This is an admin account");
    return account;
  } else {
    console.log("This is a user account");
    return account;
  }
}
console.log(isAdminLogin({ name: "Subham", email: "s@gmail.com" }));
console.log(
  isAdminLogin({ name: "Subham", email: "s@gmail.com", isAdmin: false })
);
//InstanceOf
function logValue(
  x: Date | string | Array<number>
): Date | string | Array<number> {
  if (x instanceof Date) {
    return x.toUTCString();
  } else if (typeof x === "string") {
    return x.toUpperCase();
  } else {
    return x;
  }
}
console.log(logValue(new Date()));
console.log(logValue(new Array(1, 2, 3)));

//Type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    return "fish food";
  } else {
    return "bird food";
  }
}

console.log(
  getFood({
    swim: () => {
      console.log("This is for the fish");
    },
  })
);
console.log(
  getFood({
    fly: () => {
      console.log("This is for the bird");
    },
  })
);
//Descriminated Union and exhaustiveness checking
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;
function getArea(shape: Shape) {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind == "square") {
    return shape.sideLength ** 2;
  }
}

function getArea1(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.length * shape.breadth;
    default:
      const _exhaustiveCheck: never = shape; //If we remove any of these , the exhaustive check will give an error
      return _exhaustiveCheck;
  }
}
