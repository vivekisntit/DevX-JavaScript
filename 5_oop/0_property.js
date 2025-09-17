let a = 89;
const ode = {
  name: "prometheus",
  wasGood: true,
  god: "grGod",
};

Object.defineProperty(ode, "god", {
  value: "PIEgod",
  writable: false,
  enumerable: false,
});

// when writable is false, this edit won't happen
// unless we make writable: false
ode.god = "arGod";

console.log(Object.getOwnPropertyDescriptor(ode, "god"));
