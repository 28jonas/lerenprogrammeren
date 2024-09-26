// Geef een getal bv 1234
let getal = parseInt(prompt("Geef een getal in:"));
let ingevoerdGetal = getal;
let somGetallen = 0;

// kijk hoeveel getallen er zijn en delen door 1, 10, 100, 1000,...
for(var i = 1; i <= getal; i *=10){
    somGetallen = somGetallen + ((getal % i) / (i / 10));
    getal = getal - (getal % i);
    console.log(somGetallen)
}

//laatste getal laten delen, for loop wil de laatste niet meer doen (1234>1000)
somGetallen = somGetallen + ((getal%i)/(i/10));
getal = getal - (getal%i);

//uitvoer
console.log(`De som van ${ingevoerdGetal} is ${somGetallen} `)