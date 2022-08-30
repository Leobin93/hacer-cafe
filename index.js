let cafe = [

    {
    
    nombre: "latte",
    
    descripcion: "50% cafe y 50% leche",
    
    precio: 350,
    
    id: 01
    
    },
    
    {
    
    nombre: "moka",
    
    descripcion: "cafe con chocolate y un poco de leche",
    
    precio: 450,
    
    id: 02
    
    }
    
    ]
    
    let pregunta = Number(prompt("queres un moka elegi 1 y si queres latte elegi 2"))
    
    function cafeElegido(indice){
    
    alert("tu cafe contiene: " + cafe[`${indice}`].descripcion);
    
    }
    
    for (i = 0; i < cafe.length; i++){
    
    console.log("el cafe " + cafe[i].nombre + " contiene " + cafe[i].descripcion + "y sale ")
    
    }
    
    cafeElegido(pregunta)
    
    if(pregunta == 1){
    
    console.log("tu cafe sale: " + cafe[0].precio);
    
    } else {
    
    console.log("tu cafe sale: " + cafe[1].precio);
    
    }








        
