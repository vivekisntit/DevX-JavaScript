function time(place, year, city) {
  this.place = place;
  this.year = year;
  this.city = city;
  this.print = () => console.log(`${this.city} was sacked in ${this.year}`);

  return this;
}
const u1 = new time("India", 1544, "Delhi");
const u2 = new time("Greece", 1544, "Cnst.");
console.log(u1.print());
