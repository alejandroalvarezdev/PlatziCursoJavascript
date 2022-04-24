console.log("hello world");



const ladoCuadrado =5;

console.group("Cuadrados")

console.log("los lados del cuadrado miden" +" "+ ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log("el perimetro del cuadrado es" +" "+ perimetroCuadrado);

const areaCuadrada = ladoCuadrado * ladoCuadrado; 

console.log("el area del cuadrado es" +" "+ areaCuadrada );

console.groupEnd()

//codigo del triangulo

const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const ladoTrianguloBase =4;

console.group("triangulo")
console.log(`El primer lado mide ${ladoTriangulo1} cm `);
console.log(` El segundo lado mide ${ladoTriangulo2} cm`);
console.log(` La Base mide ${ladoTrianguloBase} cm`);
console.groupEnd();