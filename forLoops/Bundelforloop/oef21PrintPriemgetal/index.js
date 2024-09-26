//controleren of een getal een priemgetal tussen 1 en 100
for(let i =1; i<=100; i++){
    if(i%1 === 0 && i<2 || i%2 === 0 && i<3 || i%3 === 0 && i<4 || i%5 === 0 && i<6 || i%7 === 0 && i<10 ) {
        console.log(`${i} is een priemgetal`)
    }else if(i%2 !== 0 && i%3 !== 0 && i%5 !== 0 && i%7 !== 0 ){
        console.log(`${i} is een priemgetal`)
    }else{

    }
}
