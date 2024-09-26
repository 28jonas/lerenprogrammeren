//controleren of een getal een priemgetal tussen 1 en 100

//klopt niet voor extreem grotere getallen
/*
for(let i =1; i<=100; i++){
    if(i%1 === 0 && i<2 || i%2 === 0 && i<3 || i%3 === 0 && i<4 || i%5 === 0 && i<6 || i%7 === 0 && i<10 ) {
        console.log(`${i} is een priemgetal`)
    }else if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0 ){
        console.log(`${i} is een priemgetal`)
    }else{

    }
}

 */
let priemGetal = true;
let nummer = 1;

for(nummer; nummer <=100; nummer++){
    if(nummer < 2) {
        priemGetal = false
    }else{
        for(let i =2; nummer/2 >= i; i++){
            if(nummer % i === 0){
                priemGetal =false;
                break

            }
        }
    }
    if(priemGetal){
        console.log(nummer)
    }
    priemGetal = true
}



