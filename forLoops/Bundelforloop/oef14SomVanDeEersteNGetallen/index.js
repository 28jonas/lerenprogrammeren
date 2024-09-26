//Vraag een getal waarop naar toe geteld moet worden
let getal = parseInt(prompt("Tot welk getal moet er opgeteld worden?:"));
let som = 0;
for(let i = 1; i <= getal; i++){
    som = som + i;
}
console.log(som);