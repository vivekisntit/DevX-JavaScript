let user1 = {
  name: "Vivek",
  passion: "dunno",
};
let user2 = user1;
// console.log(user1.passion);
user2.passion = "i'll know";
// console.log(user2.passion);
// console.log(user1.passion);

// fstring in js
// console.log(`heloo ${user2.name}`);
const x = new String("hank");
console.log(x[0]);
console.log(x.__proto__);
console.log(x.charAt(1));
console.log(x.indexOf("k"));

sent = "ron-von-kon";
// console.log(sent.split("-"));
c = sent.split("-");
console.log(`${c}`);
console.log(c);
