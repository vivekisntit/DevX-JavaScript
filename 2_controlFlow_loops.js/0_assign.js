let v1;
let v2;
let v3;
v1 = v2 ?? 10 ?? v3;
// console.log(v1);

function user(un, loc, inn) {
  this.un = un;
  this.loc = loc;
  this.inn = inn;

  this.greet = function () {
    console.log(`Welcome ${this.un}`);
  };
  // to return all these values, use "this"
  return this;
}
const u1 = new user("vyom", "cnb", "no");
const u2 = new user("vish", "ndls", "no");
console.log(u1.greet());
// console.log(greet);


