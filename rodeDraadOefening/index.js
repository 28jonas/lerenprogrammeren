/*
Maak een programma dat de gebruiker helpt bij het kopen van producten. Gebruiker kan 1 product kiezen en er zijn
voorwaarden voor kortingen gebasserd op de prijs van het product

- Gebruiker kiest een product en de prijs van het product wordt vastgelegd
- Er is korting van toepassing afhankelijk van de prijs van het product
    ° Als de prijs meer dan 100euro is krijgt de klant 10% korting
    ° Als de prijs tussen 50 en 100 euro krijgt de klant 5% korting
    ° Als de prijs minder is dan 50 euro dan is er geen korting
 */

//Opvragen van het product en de prijs ervan
let product = parseInt(prompt("Geef het aantal producten:"));
let prijsProduct = parseFloat(prompt("Geef de prijs van het product"));
let nieuwePrijs = 0;

//Berekenen totale prijs
let totalePrijs = product * prijsProduct;

//toepassing korting
if(totalePrijs > 100){
    nieuwePrijs = totalePrijs *0.9;
} else if(totalePrijs > 50 && totalePrijs < 100){
    nieuwePrijs = totalePrijs * 0.95;
} else {
    nieuwePrijs = totalePrijs;
}

console.log(`De prijs van uw product bedraagt ${nieuwePrijs.toFixed(2)} euro`);