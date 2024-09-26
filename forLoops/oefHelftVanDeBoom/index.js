/*
Programma waarin aan gebruiker vragen hoeveel getallen hij wil ingeven. Schrijf vervolgens totaal aantal ingegeven
getallen op het scherm + de som
 */

//Vragen hoeveel getallen de gebruiker wil ingeven
let aantalGetallen = parseInt(prompt("Hoeveel getallen wilt u ingeven:"));
let som = 0;

//for loop het vragen van de getallen + de som maken van die getallen
for(let i=1; i <= aantalGetallen; i++){
    let getal = parseInt(prompt(`Wat is het ${i} getal dat u wil ingeven:`));
    som = som + getal;
}

console.log(`De totale som van ${aantalGetallen} getallen is ${som}`)

