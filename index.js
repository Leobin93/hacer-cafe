
let latte = 0;
let flatwhite = 0;
let capuccino = 0;
let moka = 0;

function cafe (leche, cafe, espuma, chocolate, cafeDoble){
    latte = "leche" + " " + "cafe";
    flatwhite = "leche" + " " + "cafeDoble";
    capu = "leche" + " " + "cafe" + " " + "espuma";
    moka = "leche" + " " + "cafe" + " " + "chocolate";
}

function mostrar (mensaje){
    console.log(mensaje);
}

cafe();
mostrar();

let hacerCafe = prompt("ingresar bebida");
let = "leche";
let = "cafe";
let = "cafeDoble";
let = "espuma";
let = "chocolate";

switch(hacerCafe){
    case "latte":
        alert("leche" + "cafe");
        break;
    
    case "flatwhite":
        alert("leche" + "cafeDoble");
        break;

    case "capu":
        alert("leche" + "cafe" + "espuma");
        break;

    case "moka":
        alert("leche" + "cafe" + "chocolate");
        break;

    default: alert("sin cafe");
}








        
