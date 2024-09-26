/*
Gebruik een for-loop om de eerste 10 getallen van de fibonacci-reeks te printen
1 - 1 - 2 - 3 - 5 - 8 - 13 - 21 - 34 - 55
 */

let getal = 0;

/*
for(let i = 1; i <= 50 ; i = getal - i){
    getal = getal + i;
    console.log(getal)
}

 */

let j = 1
let output = " "

for(let i = 1; i <= 10 ; i++){
    j = getal - j
    getal = getal + j;
    //console.log(getal*(-1))
    if(i<10){
        output = output + `${getal*(-1)} - `
    }else{
        output = output + `${getal*(-1)}`
    }

}

console.log(output)
