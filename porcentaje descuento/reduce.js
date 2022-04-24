let valores = [1, 2, 3, 4, 5,6];
    
function red(lista){
    const sumar = lista.reduce(
        function(a =0,b){
            let resultado = a + b;
            console.log(resultado);
    }
    );
}


let resultado = valores.reduce((a,b) => a+b);
console.log(resultado);

red(valores)