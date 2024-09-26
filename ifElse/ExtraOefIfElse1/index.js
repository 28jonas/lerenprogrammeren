/*//Bepalen of het ingevoerde getal negatief of positief is

//Invoeren van getal
let getal = parseInt(prompt("Geef een getal in:"));

// if else kijken of getal positief of negatief is
if(getal < 0){
    console.log(`Je ingevoerde getal ${getal} is negatief`);
} else{
    console.log(`Je ingevoerd getal ${getal} is postief`)
}
*/

/*// Kijken of een jaar een schrikkeljaar of niet?
//invoeren jaartal
let jaar = parseInt(prompt("Welk jaar tal wil je bekijken?:"));

//controleren of jaartal deelbaar is door 4
let schrikkeljaarDoorVier = jaar % 4;
let schrikkeljaarDoorHonderd = jaar % 100
let schrikkeljaarDoorVierHonderd = jaar % 400

if(schrikkeljaarDoorVier === 0 && schrikkeljaarDoorHonderd !== 0 || schrikkeljaarDoorVierHonderd === 0 ){
    console.log(`het jaartal ${jaar} is een schrikkeljaar`)
}
else{
    console.log(`Het jaartal ${jaar} is geen schrikkeljaar`)
}
*/

/*//getal even of oneven
// vragen voor getal
let getal = parseInt(prompt("Geef een getal in:"))

//Kijken of getal postief of negetaief is
if(getal%2 === 0){
    console.log(`Het getal ${getal} is postief` )
} else{
    console.log(`Het getal ${getal} is negatief`)
}

 */

/*
 maak programma dat 3 cijfers van ee ngebruiker accepteert en het grootste van de drie weergeeft
 De 3 variabelen mogen gewoon gedeclareerd worden


// vragen van de 3 cijfers
let cijfer1 = parseInt(prompt("Geef hier uw eerste getal in:"));
let cijfer2 = parseInt(prompt("Geef hier uw tweede getal in:"));
let cijfer3 = parseInt(prompt("Geef hier uw derde getal in:"));

if(cijfer1 >= cijfer2 && cijfer1 >= cijfer3){
    console.log(`Het eerste cijfer ${cijfer1} is het grootste`)
} else if(cijfer2 >= cijfer1 && cijfer2 >= cijfer3){
    console.log(`Het tweede cijfer ${cijfer2} is het grootste`)
} else{
    console.log(`Het derde cijfer ${cijfer3} is het grootste`)
}

 */

/*
Maak een programma dat een nummer invoert en controleert of het deelbaar is door 3 en 5, of door geen van beide


//opvragen nummers
let nummer = parseInt((prompt("Geef hier uw nummer in:")))

//Kijken of het nummer deelbaar is door 3 en 5
if(nummer % 3 === 0 && nummer % 5 === 0){
    console.log(`Het nummer ${nummer} is deelbaar door 3 en 5`)
}else{
    console.log(`Het nummer ${nummer} is niet deelbaar door 3 en 5`)
}
*/

/*
Schrijf programma voor BMI die gebruik maakt van lengte in meter en gewicht in kilogram. De formule is bmi = gewicht/(lengte * lengte)
BMI-waarden
- ondergewicht: BMI < 18.5
- Normaal: 18,5 <= BMI < 25
- Overgewicht: 25 <= BMI < 30
- Obesitas: BMI >=30
 */

//vragen van de lengte en gewicht (beide kunnen een komma getal zijn)
let lengte = parseFloat(prompt("Geef uw lengte in meter in:"))
let gewicht = parseFloat(prompt("Geef uw gewicht in kilogram in"))

//berekenen BMI
let BMI = gewicht / (lengte * lengte)
console.log(BMI.toFixed(2)) //toFixed om het getal afteronden op een bepaald aantal getallen na de komma

//Kijken in welke categorie het BMI licht (BMI nog in tekst steken)
if(BMI < 18.5){
    console.log("U hebt ondergewicht")
} else if(18.5 <= BMI && BMI < 25){ // 18,5 <= BMI < 25 dit mag je niet doen, altijd met en functie werken
    console.log("U hebt een normaal BMI")
} else if(25 <= BMI && BMI < 30){
    console.log("U hebt overgewicht")
} else{
    console.log("U hebt obesistas")
}

/*
Schrijf een programma dat het totaal bedrag berekent dat je moet betalen in een winkel op basis van het aantal producten
dat je koopt en de prijs per product. Als je meer dan 10 producten koopt, krijg je 10% korting, anders betaal je
de volle prijs
 */
// ingeven van het aantal producten en de prijs per product
let aantalProducten = parseFloat(prompt("Wat is het aantal producten dat u koopt?"));
let prijsPerProduct = parseFloat(prompt("Wat is de prijs van het product?"));
let totalePrijs = 0 ;

// Bepalen totale prijs, indien meer dan 10 producten heb je 10% korting
if(aantalProducten>10){
    totalePrijs = (aantalProducten * prijsPerProduct) * 0.9;
} else{
    totalePrijs = (aantalProducten * prijsPerProduct);
}

console.log(totalePrijs.toFixed(2));
