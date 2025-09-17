function world(country){
    let ctr = country;
    function city() {
        let cty = "Delhi";
        console.log(cty + ", " + ctr);
    }
    function state() {
      let stt = "UP";
      console.log(stt);
    }
    return city;
}
const w1 = new world("Inida");
w1();
