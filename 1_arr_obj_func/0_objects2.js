// const tinderUser = new Object() // singelton method
const tinderUser = {};

tinderUser.id = "241221901";
tinderUser.name = "Vyom";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Vushu",
      lastname: "Raina",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "zx@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "vue.js",
  price: "$0.00",
  courseInstructor: "vaani",
};
// console.log(course["price"]);
// console.log(course.courseInstructor);

const { courseInstructor: intr } = course;

// console.log(course.courseInstructor);
console.log(intr);
