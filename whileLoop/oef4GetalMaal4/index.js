/*
Vragen voor een getal en kijken of het juist is
 */

//variabelen
let startGetal = 1
let Maxwaarde = parseInt(prompt("Tot welke waarde wilt u weten?"))
while(startGetal <= Maxwaarde){
    console.log(startGetal)
    if(startGetal === 1){
        startGetal = startGetal * 4
    }else{
        startGetal = startGetal * startGetal
    }

}