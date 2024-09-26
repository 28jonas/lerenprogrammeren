/*
Schrijf een programma die het volgende op het scherm weergeeft: ge gebruiker geeft het maximum aantal sterren in bv 5
*
**
***
****
*****
 */

// vraag voor het aantal sterren"
let aantal = parseInt(prompt("Hoeveel sterren wil je?:"))

//declareren ster
let ster = "*"; //ster is een string dus tussen "" !!!


//automatisch laten generenen met for loop
for(let i=1; i <= aantal; i++){
    console.log(ster)  // hier eerst de console doen en dan pas de value van ster aanpassen omdat je anders niet de eerste ster hebt!!
    ster = ster + "*";

}


