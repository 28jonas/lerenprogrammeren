/*
Schrijf een programma die je alle potentiele mogelijk combinaties geeft in een 2-decimale vorm uitgeprint met een komma
ertussen tot en met 99
ouput: 00;01,02,03,04,05,06,07,10,11,...99
 */

let output = ""


for(let i=0; i<=99; i++){
    if(i<=9){
        i = "0"+i;
        output = output + `${i},` //optellen van een extra string
        //console.log(`${i},`);
    }else if(i<99){
        //console.log(`${i},`);
        output = output + `${i},`
    }else{
        output = output + `${i}`
    }
}
console.log(output)



