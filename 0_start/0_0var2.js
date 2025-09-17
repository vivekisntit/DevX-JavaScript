"use strict"; // newer version

// alert(3+3) // works in browser, we are using nodejs

let name = "vyom";
let check = 27;
// console.log(!check) // true when!=0, false when==0

// object
// console.log(typeof check);
// console.log(typeof (check));

let f1 = "john";
let val = Number(f1);
console.log(typeof f1);
console.log(typeof f1);

let x = -90;
console.log(Boolean(x)); // true when!=0, false when==0

let s1 = "sci";
let s2 = "bdi";
// console.log(s1 + s2); // concatenation
// console.log(s1 + "kit");
// console.log(12 + s1);

console.log(9 * Number(+true + "0"));  // crazy syntax
console.log(typeof (9 * Number(+true + "0")));
// console.log(+true + "0");

let n1, n2, n3;
n1 = n2 = n3 = 2 + 2;
// let n1, n2, n3 = 4;
console.log(n3);

// comparisons
console.log(2 == 9);
console.log(2 == 2);
console.log("2" == 2);
console.log("2" === 2);  // also checks data-type
console.log(null==0);
console.log(!null);  // idk why it gives true....

