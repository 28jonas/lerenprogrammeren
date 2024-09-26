/*
iteraties
- for loops


for(intitialisatie; conditie; update;){

}

*/

// je kan ook getal 5 veranderen naar een variabele
/*for(let i =1; i<5; i++){ // 5 is niet meer kleiner dan 5 dus stopt de loop op 4
    console.log(`dit is nummer ${i}`)
}

 */

//optellen
/*let eindegetal = parseInt(prompt("Wat is het eindgetal"));

for(let i =1; i<eindgetal; i++){ // 5 is niet meer kleiner dan 5 dus stopt de loop op 4
    console.log(`dit is nummer ${i}`);
}

 */
// aftellen kan je doen met i--

//print alle evengetallen uit tot 20
/*for(let i=0; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }
}

 */

//oefening die niet in cursus staat
/* output= tafel van 1
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3

- vragen voor de tafel
- wat is het eindgetal
 */

//vragen voor tafel en eindgetal
/*let tafel = parseInt(prompt("What is de tafel:"));
let eindGetal = parseInt((prompt("What is het eindgetal:")))
let uitkomst = 0;

//maken for loop
for(let i=1; i <= eindGetal; i++){
    uitkomst = tafel * i;
    console.log(`${tafel} x ${i} = ${uitkomst}`);
}*/

//Schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10
// vraag 2 waarden waar tussen het gemiddelde ligt
let waarde1 = parseInt(prompt("Geef uw begin getal in:"))
let waarde2 = parseInt(prompt("Geef uw aatal getallen in:"))
let som = 0

//logica
for(var i=0; i<= waarde2; i++){
    som = som + i
}
console.log(i)
let gemiddelde = som/waarde2;
console.log(som);
console.log(gemiddelde);

