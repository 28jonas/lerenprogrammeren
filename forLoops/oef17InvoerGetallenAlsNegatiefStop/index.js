/*
SChrijf een programma die een aantal getallen inleest en eindigt wanneer de gebruiker een negatief getal ingeeft
schrijf daarna de som van die getallen op het scherm
 */

//declareren van variabelen
let getal = 1
let output = 0

for(let i = 1; i < 2; i++){
    getal = parseInt(prompt("Geef een waarde voor uw getal:"));
    if(getal > 0){
        output = output + getal;
        i= i-1
    }else {

    }
}

console.log(output)


