
var porcentaje = document.getElementById("porcentaje");
var descuento = document.getElementById("descuento");


function des(){
    let p = porcentaje.value;
    let d = descuento.value;
    
    let des = (d * 100) / p; 
    let precioFinal = p - des;

    alert("el precio final es de " + precioFinal) 
    console.log(p,d);
}


