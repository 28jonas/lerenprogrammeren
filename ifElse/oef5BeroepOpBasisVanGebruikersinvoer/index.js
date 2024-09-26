/*
Voorbeeld 2: Beroep op basis van gebruikersinvoer
De gebruiker wordt gevraagd hun naam en beroep in te voeren. Afhankelijk van de invoer toont het programma een aangepast bericht.
    Dit is een voorbeeld van een if - else if - else structuur waarin meerdere condities worden gecontroleerd
*/

// declaren variabelen met prompt
let naam = prompt("Geef uw naam in:");
let beroep = prompt("Geef uw beroep in, maak een keuze uit: bediende, arbeider of werkzoekend:");


// if elseif else structuur
if(beroep === "bediende"){
    console.log(`Uw naam is ${naam} en u bent bediende`);
} else if(beroep === "arbeider"){
    console.log(`Uw naam is ${naam} en u bent arbeider`);
} else {
    console.log(`Uw naam is ${naam} en u bent werkzoekend`);
}

// ook string gebruiken in if else statement
// beroepen kun je ook veranderen met ${beroep}
