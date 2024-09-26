//bepalen van de faculteit van een getal
// 5! = 5*4*3*2*1

//ingeven van getal
let getal = parseInt(prompt("Geef een getal in:"));
var faculteit = 1

//Bereken van de faculteit met for loop
for(let i = 1; i <= getal; i++){
    faculteit = faculteit * i;
    // faculteit *= i;
}
console.log(faculteit);
