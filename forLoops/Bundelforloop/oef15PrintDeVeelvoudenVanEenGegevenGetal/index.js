// Welk getal wil de gebruiker veelvouden van
let veelvoud = parseInt(prompt("Van welk getal wilt u de veelvouden?:"));
let product = 1;

//for loop om weer te geven welke veelvouden er zijn tot 100
for(let i = 1; product <= 100; i++){
    console.log(product);
    product = i * veelvoud;
}