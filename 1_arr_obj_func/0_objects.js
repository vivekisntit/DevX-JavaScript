// // singleton
//symboll...
const mySym = Symbol("key1");

const JsUser = {
  name: "Vivv",
  "full name": "VyomVushu",
  [mySym]: "lost",
  age: 18,
  location: "UCDBNN",
  email: "vivek.vna.official@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

// console.log(JsUser);
// JsUser.email = "algex@imperium.com";
// Object.freeze(JsUser)
// JsUser.email = "algex@microsoft.com";
// console.log(JsUser);

JsUser.greet = function () {
  console.log("Hello JS user");
};
JsUser.greet2 = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greet());
console.log(JsUser.greet2());
