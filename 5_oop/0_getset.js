// class ben {
//   constructor(series, alien) {
//     this.series = series;
//     this.alien = alien;
//     }
//     get series() {
//         return this._series.toUpperCase()
//     }
//     set series(val) {
//         this._series=val
//     }
// }
// const b1 = new ben("ultimate", "echo-echo");
// console.log(`changing to ${b1.series} ${b1.alien}`);

class Locker {
  constructor(protein) {
    this.protein = protein; // private-like variable
  }

  get protein() {
    if (this._protein) {
      return `${this._protein} scoops left`;
    } else {
      return;
    }
  }
  set protein(value) {
    if (value < 0) {
      console.log("You can't remove protein like that!");
    } else {
      this._protein = value;
    }
  }
}

let myLocker = new Locker(-9);
console.log(myLocker.protein); // "5 scoops left"
