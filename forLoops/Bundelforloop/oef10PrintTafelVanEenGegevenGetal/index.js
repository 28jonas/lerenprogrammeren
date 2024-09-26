//Vragen aan gebruiker voor een getal
let getal = parseInt(prompt("Van welk getal wil u de tafel?:"))

//for loop geven de tafels van het gegeven getal
for(let i = 1; i <= 10; i++){
    let product = i * getal;
    console.log(`${i} x ${getal} = ${product}`);
}
