/*
Kijken of de gebruiker 18j is en zelf dingen mag beslissen
 */

// vragen voor de leeftijd
let geboorteJaar = parseInt(prompt("Geef uw geboortejaar in:"));
let LopendeJaar = parseInt(prompt("Geef het jaar in:"));

//berkenen leeftijd
let leeftijd = LopendeJaar - geboorteJaar;

//if else kijken of de leeftijd 18j of ouder is
if(leeftijd>=18){
    console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen")
} else{
    console.log("Ik mag nog niks beslissen want ik ben geen 18j")
}