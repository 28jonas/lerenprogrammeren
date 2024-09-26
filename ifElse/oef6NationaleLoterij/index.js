/*
Oefening nationale loterij oef 1
*/

//Vragen naar de leeftijd
/*let leeftijd = parseInt(prompt("Geef uw leeftijd in:"));

//if else boven of onder de 18j
if(leeftijd>=18){
    console.log(`Je bent ${leeftijd} oud. Je mag deelnemen aan gokspelen`);
}else{
    console.log(`Je bent ${leeftijd}. Dit is te jong. Om te mogen gokken moet je minstens 18j zijn`);
}*/

/*
Oefening nationale loterij oef 2 (uitbreiding oef 1)
*/

//Vragen naar de leeftijd
let leeftijd = parseInt(prompt("Geef uw leeftijd in:"));

//if else boven of onder de 18j
if(leeftijd>=18){
    console.log(`Je bent ${leeftijd} oud. Je mag deelnemen aan gokspelen`);

    //voor hoeveel vakjes wordt er gespeeld
    let aantalVakjes = parseInt(prompt("Voor hoeveel vakjes wil je spelen? Kies uit 2,4,6,8,10 of 12:"));

    // tonen welke vakjes en hoeveel ze kosten
    // kan korter met aantalvakjes *2 voor de prijs van vakjes onder de 10
    if(aantalVakjes === 12){
        console.log(`Voor ${aantalVakjes} is de kostprijs 20 euro`);
    } else if (aantalVakjes === 10){
        console.log(`Voor ${aantalVakjes} is de kostprijs 18 euro`);
    } else if (aantalVakjes === 8) {
        console.log(`Voor ${aantalVakjes} is de kostprijs 16 euro`);
    } else if (aantalVakjes === 6) {
        console.log(`Voor ${aantalVakjes} is de kostprijs 12 euro`)
    } else if (aantalVakjes === 4) {
        console.log(`Voor ${aantalVakjes} is de kostprijs 8 euro`)
    }else if (aantalVakjes === 2) {
        console.log(`Voor ${aantalVakjes} is de kostprijs 4 euro`)
    } else{
        console.log(`Geef het juiste aantal vakjes in`)
    }
}else{
    console.log(`Je bent ${leeftijd}. Dit is te jong. Om te mogen gokken moet je minstens 18j zijn`)
}
