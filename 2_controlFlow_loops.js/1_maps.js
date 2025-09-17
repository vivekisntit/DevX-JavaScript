const map = new Map();
// key should be distinct, that's all
map.set("IND", "India");
map.set("USA", "United States of America");
map.set("FRN", "France");
map.set("GER", "India");

// console.log(map);
// a major diff b/w MAP & JsOBJ is that maps are iterable
// for (const [key, value] of map) {
//   console.log(key, ':-', value);
// }

// using filter()
// const lang2 = ["java", "python", "c", "JvScp"];
// const right_names2 = lang.filter((item) => {
//   return item.length > 4;
// });
// console.log(right_names);

//using map()
const lang = ["java", "python", "c", "JvScp"];
const right_names = lang.map((item) => {
  return item.length > 4;
});
console.log(right_names);

// chaining the map()
const lang3 = ["java", "python", "c", "JvScp"];
const right_names3 = lang3.map((item) => item.length > 4).map((val) => !val);
console.log(right_names3);
