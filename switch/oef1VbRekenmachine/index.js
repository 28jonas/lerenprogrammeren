/*
hardcoded rekenmachine
 */

//variabelen
let nummer1 = 10;
let nummer2 = 5;
let operatie = "optellen";
let resultaat;

//switch beetje hetzelfde als een if
switch (operatie){
    case "optellen":
        resultaat = nummer1 + nummer2;
        break; //om te zorgen dat hij niet ook de andere cases oplost
    case "aftrekking":
        resultaat = nummer1 - nummer2;
        break; //zorg dat er altijd een break staat bij een case!!
    case "vermenigvuldiging":
        resultaat = nummer1 * nummer2;
        break;
    case "deling":
        if(nummer2!==0){
            resultaat = nummer1 / nummer2;
        }else{
            resultaat = "ik kan niet delen door 0"
        }
        break;
    default: //default is een beetje zoals de else in een else if
        resultaat = "ongeldige operatie"
}