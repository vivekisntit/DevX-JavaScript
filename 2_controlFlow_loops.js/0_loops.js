let str = "raven";

// spreads it into an array
let make_array = [...str];

// spread it into a dict
let make_dict = { ...str };

console.log(str);
console.log(make_array);

// this kind of LOOP only works for iterables
for (const letter of make_array) {
  console.log(letter);
}

// ye bhi sahi h
// for (const letter of str){
//     console.log(letter)
// }

// ye bhi sahi h
// for (const letter of [...str]) {
//   console.log(letter);
// }