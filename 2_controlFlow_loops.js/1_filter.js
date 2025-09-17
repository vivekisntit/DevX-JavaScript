const lang = ["java", "python", "c", "JvScp"];

// .forEach() can't return values
// so we have .filter() for that
// const right_names = lang.filter((item) => item.length > 4);
// console.log(right_names);

// we can only use "return" when we use scope
const right_names = lang.filter((item) => {
    return item.length > 4;
});
console.log(right_names);