// Objects and BrowserEvents in Js are key to masterign it

// Primitive
// 7 types:
String;
Number;
Boolean;
null;
undefined;
Symbol;
BigInt;

// Reference (Non-primitive)
// all the non-prim type are called objects 
// except func., it is called function object
Array;
Object;
Function;

// test
// symbol
const vid = Symbol("123");
const sid = Symbol("123");
console.log(vid);
console.log(sid);
console.log(vid == sid);

// bigint
const num1 = 9177688446848416848646841468;
console.log(typeof num1);
const num2 = 9172n;
console.log(typeof num2);

// object
const xplore = ["wd", "ml", "ds"];
let myObj = {
  name: "Vlad",
  age: 22,
};
console.log(xplore);
console.log(typeof xplore);
console.log(myObj);
console.log(typeof myObj);

// function
const myFunc = function () {
  console.log("doin wd, checkin hype");
};
console.log(myFunc);
console.log(typeof myFunc);
