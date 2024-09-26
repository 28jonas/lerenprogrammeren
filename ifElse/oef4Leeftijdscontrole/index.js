//invoeren van leeftijd
//bij prompt als het nummer is altijd parseInt
let leeftijd = parseInt(prompt("Voer je leeftijd in:"));

//if else met elseif voor 3 verschillende categorieën: volwassen, tiener of kind
if(leeftijd>=18){
    console.log("U bent volwassen");
} else if(leeftijd >=10){
    console.log("U bent een tiener");
} else{
    console.log("U bent een kind");
}


