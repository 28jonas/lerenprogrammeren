/*
Vindt de grootste deler van een getal: vraag getal aan gebruiker en gebruik een for loop om grootste deler van dat
getal anders dan het getal zelf te vinden
 */

//vragen voor getal
let getal = parseInt(prompt("Van welk getal wil je de grootste gemeenschappelijk deler vinden?"))
let grootsteDeler = 0;
let deler = 0

for(let i = 2; i <= getal; i++){
    //getal delen door i
    deler = getal / i;
    if(deler%1 === 0){
        //de grootste eruithalen
        if(deler > grootsteDeler){
            grootsteDeler = deler;
        }
    }

}

console.log(grootsteDeler)
