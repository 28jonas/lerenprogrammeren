// 3 soorten variabelen: let, var, const
// let blockscope
// var universeel
// const is vaste waarde (pi, maanden, seizoen,...)

// datatypes
5 // number
"5" // string

let getal = 5; //output = number
let tekst = "Jonas";
let keuze = 1; // 1 = true, 0 = false => boolean, je mag ook waarde true of false in plaats van cijfer
let getal2; //Null, geen value aanwezig
Object //samenvoegen van meerdere variabelen
Array // numeriek of associatief


// geen 2x declareren
let strNum = "123";
strNum = parseInt(strNum); //parseInt = zet de strNum om van string naar int

let strNum1 = "123";
strNum1 = parseInt(strNum1); //parseFloat voor kommagetallen

let result = strNum + strNum1;
console.log(typeof(result)); //typeof om te kijken welk type resultaat is en toon het in de console.log

//object
let person = {
    name :"Jonas",
    leeftijd: 30,
    isStudent: false
}
console.log(typeof(person)); // person zal hier object zijn
console.log(person.name);


//In de les oefening: 1e var familie naam, 2e var geboortejaar, 3e huidigjaar
// zorg dat verschil tussen geboortejaar en huidigjaar te zien is in console.log
// let is beter om te gebruiken zodat je zeker bezig bent met zelfde variabelen
 var familieNaam = "Vandecasteele";
 var geboortejaar = 2002;
 var huidigjaar = 2024;

 var verschilJaren = huidigjaar - geboortejaar;
 console.log(verschilJaren);

 /*
 De leeftijd van "vandecasteele" is 22 jaar
 =>
 De leeftijd van familieNaam is 22 jaar
 =>
 De leeftijd van familieNaam is verschilJaren jaar
 =>
 "het resultaat van " + familieNaam + " is " + verschilJaren + " jaar"
 of
 "het resultaat van " , familieNaam , " is " , verschilJaren , "jaar"
  */

//ES5 Notatie
console.log("het resultaat van " + familieNaam + " is " + verschilJaren + "jaar");
console.log( "het resultaat van " , familieNaam , " is " , verschilJaren , "jaar");

//ES6 Notatie (backtick operator)
console.log(`het resultaat ${familieNaam} is ${verschilJaren} jaar`);

// oefening les: 2 getallen declareren met de 4 basisbewerkingen
// declareren van de variabelen
let getal1 = 3;
let getal3 = 2;

//uitvoeren van de bewerkingen
let optelling = getal1 + getal3;
let aftrekking = getal1 - getal3;
let vermenigvuldiging = getal1 * getal3;
let deling = getal1 / getal3;

//console.log van de bewerkingen + juist tonen in de console log
console.log(`${getal1} + ${getal3} = ${optelling} `);
console.log(`${getal1} - ${getal3} = ${aftrekking} `);
console.log(`${getal1} * ${getal3} = ${vermenigvuldiging} `);
console.log(`${getal1} / ${getal3} = ${deling} `);

// nieuwe functie prompt: in prompt krijg je altijd string => als getallen om te rekenen zijn dan omzetten met parseInt
let getal4 = parseInt(prompt("Voer je eerste getal in:"));
let getal5 = parseInt(prompt("Voer je tweede getal in:"));

let optelling1 = getal4 + getal5;
let aftrekking1 = getal4 - getal5;
let vermenigvuldiging1 = getal4 * getal5;
let deling1 = getal4 / getal5;
let modulus1 = getal4 % getal5;
let macht = getal4 ** getal5;
//incrementeel en decrementeer werken niet met getallen, maar wel met lussen

//console.log van de bewerkingen + juist tonen in de console log
console.log(`${getal4} + ${getal5} = ${optelling1} `);
console.log(`${getal4} - ${getal5} = ${aftrekking1} `);
console.log(`${getal4} * ${getal5} = ${vermenigvuldiging1} `);
console.log(`${getal4} / ${getal5} = ${deling1} `);
console.log(`${getal4} % ${getal5} = ${modulus1} `);
console.log(`${getal4} ** ${getal5} = ${macht} `);

//shorthand notatie
let getal6 = 5;
getal6 +=1; //zelfde als getal6 = getal6 + 1, kun je ook doen met aftrekken, vermenigvuldigen,.....

//
console.log(5=='5') // dit geeft true omdat de waarde 2x 5 is
console.log(5==='5') // dit geeft false omdat ook gekeken wordt naar het datatype







