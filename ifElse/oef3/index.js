/*
 lijn na lijn volgen => sequentie
 if-else statement => selectie
                    => iteratie
 */

let getal1 = 10;
let getal2 = 5;

//if-else voor 2 mogelijkheden
if(getal1 > getal2){
    //console.log(getal1 is groter dan getal2);
    console.log(`${getal1} is groter dan ${getal2}`);
} else{
    //console.log(getal2 is groter dan getal1);
    console.log(`${getal2} is groter dan ${getal1}`);
}

//elseif
if(getal1>getal2){
    console.log(`${getal1} is groter dan ${getal2}`);
}else if(getal1 == getal2){
    console.log(`${getal2} is gelijk aan ${getal1}`);
}else{
    console.log(`${getal2} is groter dan ${getal1}`);
}


