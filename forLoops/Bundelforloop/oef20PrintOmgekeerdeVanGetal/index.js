//Vragen voor een eindgetal
let getal = parseInt(prompt("Geef het getal in dat u wil draaien:"))
let getalGedraaid = 0

for(let i =0; i<2; i++){
    if(getal>0){
        getalGedraaid = getalGedraaid * 10 + (getal%10);
        console.log(getalGedraaid)
        i=i-1
    }else{

    }
}
