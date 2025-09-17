function ppl() {
  const name = "raven";
  const ar = [...name];
  console.log(ar);
}
// ppl();

function ur(name) {
  if (!name) {
    // if (name == undefined)
    return `enter ur name pls`;
  }
  return `sup ${name}`;
}
// console.log(ur("Vyom"));
// console.log(ur());

function cartTotal(...num) {
  // the "..." is the rest operator
  // used to input when no. of inputs are uncertain
  return num;
}
// console.log(cartTotal(133, 655, 100, 780));

function one() {
  const name = "vyom";
  // two()
  function two() {
    const n1 = "vaani";
    console.log(name);
    console.log(n1);
  }
  // console.log(n1);
  two();
}
// one();

// two diff ways to create funcs
function increment(num) {
  return num + 1;
}
// console.log(increment(4));

// to me, this looks like lambda func in python
// const increment1 = function (num) { return num + 1; } // just another way to put it...
const increment1 = function (num) {
  return num + 1;
};
// console.log(increment1(4));


