/*
Vragen voor een getal en kijken of het juist is
 */

//variabelen
let teRadenGetal = 5
let getalGebruiker = parseInt(prompt("Welk getal denk je dat het is tussen 1 en 10?"));


while(getalGebruiker !== teRadenGetal){
    if(getalGebruiker < teRadenGetal){
        console.log("Het getal dat u ingegeven hebt is te klein")
    }else if(getalGebruiker > teRadenGetal){
        console.log("Het getal dat u ingegeven hebt is te groot")
    }
    getalGebruiker = parseInt(prompt("Welk getal denk je dat het is tussen 1 en 10?"));
}
console.log("Het getal is juist")
