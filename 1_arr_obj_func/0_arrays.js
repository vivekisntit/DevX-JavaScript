const arr = ["cc", "jay", 9];
// console.log(arr[0]);
// console.log(typeof arr[1]);
// console.log(arr[2]);
// console.log(typeof arr[2]);

// // insertion
// arr.push(true);
// arr.push("y");
// console.log(typeof arr[3]);
// console.log(arr);
// // arr.pop();
// arr.shift();
// arr.shift();
// arr.unshift("ron");
// console.log(arr);

// // checks
// arr.push(true);
// console.log(arr);
// console.log(arr.includes(9));
// console.log(arr.indexOf("jay"));
// console.log(arr.indexOf(true));

// slice-splice
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log("Original: ", arr1);
console.log("Sliced: ", arr1.slice(1, 4));
console.log("After Slice: ", arr1);
console.log("Spliced: ", arr1.splice(1, 4));
console.log("After Splice: ",arr1);
