//1

let petname = "Bobby";
if (petname.length > 3) {
  console.log("Augintinio vardas yra ilgesnis nei 3 raidės.");
} else {
  console.log("Augintinio vardas nėra ilgesnis nei 3 raidės.");
}

//2

function getgrade(score) {
    if (score >= 90 && score <= 100) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score < 80) {
      return "C";
    } else if (score >= 60 && score < 70) {
      return "D";
    } else if (score >= 0 && score < 60) {
      return "F";
    } else {
      return "Netinkamas pažymys";
    }
  }
  
  console.log(getgrade(85));
  
  //3

  function calculateperimeter() {
    let length = parseFloat(prompt("Įveskite stačiakampio ilgį:"));
    let width = parseFloat(prompt("Įveskite stačiakampio plotį:"));
  
    if (isNaN(length) || isNaN(width)) {
      alert("Įvesti neteisingi duomenys.");
    } else {
      let perimeter = 2 * (length + width);
      alert("Stačiakampio perimetras yra: " + perimeter);
    }
  }
  
  calculateperimeter();
  