// Geef een getal bv 1234
let getal = parseInt(prompt("Geef een getal in:"));
let hoeveelGetallen = 1;
// kijk hoeveel getallen er zijn met deelbaarheid door 1, 10, 100, 1000,...
for(let i = 1; i <= getal; i *=10){
    if(getal % i){
        hoeveelGetallen = hoeveelGetallen + 1;
    }
}
console.log(`Het getal ${getal} bestaat uit ${hoeveelGetallen} getallen`)