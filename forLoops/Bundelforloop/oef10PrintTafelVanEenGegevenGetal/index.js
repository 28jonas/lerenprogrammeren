//Vragen aan gebruiker voor een getal
let getal = parseInt(prompt("Van welk getal wil u de tafel?:"))

//for loop geven de tafels van het gegeven getal
for(let i = 1; i <= 10; i++){
    let product = i * getal;
    console.log(`${i} x ${getal} = ${product}`);
}

//oplossing nog niet genoeg gezien omdit eigenlijk te doen maar je kan het doen met een wiskundige formule

let number = parseInt((prompt("Welk getal wil je omdraaien:")))
let reversed = 0
for(let i = number; i>0; i = (i-(i%10)/10)){
    let laatstecijfer = i%10;
    reversed = reversed * 10 + laatstecijfer;
} console.log(reversed)