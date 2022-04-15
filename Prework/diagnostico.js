var nombre; //string
var apellido; //string
var nombreUsuarioPlatzi; //string
var edad;  // number
var correoElectronico; //string
var mayorDeEdad; //boolean
var dineroAhorrado; //number
var deudas; //boolean

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

/*
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/
nombre = "alejandro";
apellido = "alvarez";
dineroAhorrado= 1700; 
deudas = 1000;

var nombreCompleto = nombre + " " + apellido ;
dineroReal = dineroAhorrado - deudas; 
console.log(nombreCompleto);
console.log(dineroReal);