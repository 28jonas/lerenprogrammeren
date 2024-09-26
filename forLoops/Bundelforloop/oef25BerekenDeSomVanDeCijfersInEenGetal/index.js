// Geef een getal bv 1234
let getal = parseInt(prompt("Geef een getal in:"));
let somGetallen = 0;
// kijk hoeveel getallen er zijn met deelbaarheid door 1, 10, 100, 1000,...
for(let i = 1; i <= getal; i *=10){
    if(getal % i){
        somGetallen = somGetallen + (getal%i) ;
    }
}
console.log(`De som van ${getal} is ${somGetallen} `)