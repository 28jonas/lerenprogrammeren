//Print de getallenreeks 1, 2, 4, 8, 16, 32, ..., totdat de waarde groter is dan een door de gebruiker opgegeven getal

//Vraag maximum getal
let maxGetal = parseInt(prompt("Tot welk getal wilt u de rij hebben?"));
let output = "";
//for loop maken
for(let i = 1; i <= maxGetal; i *=2){
    if(i *2  < maxGetal){
        output = output + `${i},`
    }else{ //als hier bv 32 in i zit dan doeje nog een keer i *2 en dat is gelijk aan 64 wat groter is dan maxgetal
        output = output + `${i}`
    }

    //console.log(i)
}
console.log(output)