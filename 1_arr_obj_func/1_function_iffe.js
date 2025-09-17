// const add2 = (p1, p2) => p1 + p2;

// const city = function (code) {
//   let pin = code;
//   console.log(pin);
// };

// city("208022");
// city("110040");
// console.log(`The pin is ${add2(110040, 208022)}`);

//end me "()" ke bina envoke nhi hoga
(function pin() {
  console.log("208022");
})();

(function p2() {
  console.log("208022");
})();

((name) => {
  console.log(`is this your pincode ${name}?`);
})("vyom");
