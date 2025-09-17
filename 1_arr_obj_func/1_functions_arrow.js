// const peeps = {
//   nam: "han",
// };

// let g_name = "fin";

// const ppl = {
//   name: "vyom",
//   auraPoints: "10.7k",
//   g_name: "ferb",

//   intro: function () {
//     // when func in obj, it can only access vars of that obj
//     console.log(`Hi ${this.name}!`);
//     // can't access "nam" cz it's in another obj
//     console.log(`Hi ${this.nam}!`);
//     // can access now
//     console.log(`Hi ${peeps.nam}!`);
//     //
//     console.log(`Hi ${g_name}!`);
//     console.log(`Hi ${this.g_name}!`);
//   },
// };
// // console.log(ppl.name);
// ppl.intro();
// // ppl.name = "Ron";
// // ppl.intro();

// arrow function
// const add2 = (p1, p2) => {
//   return p1 + p2;
// }
const add2 = (p1, p2) => (p1 + p2)


const city = function (code) {
  let pin = code;
  console.log(pin);
};
city("208022");
city("110040");
console.log(`The pin is ${add2(110040,208022)}`)