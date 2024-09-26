/*
Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft: vb
- vraag getal aan de gebruiker
- wanneer getal bijvoorbeeld 100 is dan de volgende reeks de uitkomst:
    - 1, 2, 4, 8, 16, 32, 64
- wanneer getal bijvoorbeeld 130 is dan de volgende reeks de uitkomst:
    - 1, 2, 4, 8, 16, 32, 64,124
 */
// vragen aan gebruiker voor een getal
let getal = parseInt(prompt("geef hier een getal in:"))


// declareren variabele voor output
let output = 1;
//hier dirty fix gedaan met output = 1 en i beginnen op 2
for(let i = 2; i<=getal; i*=2){ // in plaats van i++ i*=2 doen zodat je inplaats van +1 doet direct je i vermenigvuldigt
    output = output + `,${i}`;
}
console.log(output);

// met if else
/*
// declareren variabele voor output
let output = "";

for(let i = 2; i<=getal; i*=2){ // in plaats van i++ i*=2 doen zodat je inplaats van +1 doet direct je i vermenigvuldigt
    if(i * 2 < getal){
    output = output + `${i},`;
    } else{
    output = output + `${i}`
    }

}
console.log(output);

 */


