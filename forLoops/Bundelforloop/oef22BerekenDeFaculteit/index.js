//vraag voor een nummer
let getal = parseInt(prompt("Van welk getal wil je de faculteit kennen:"));
let faculteit = 1

for(let i =1; i <= getal; i++){
    faculteit = faculteit * i;
}
console.log(faculteit)