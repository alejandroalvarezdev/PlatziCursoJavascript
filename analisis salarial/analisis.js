const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
); 

const salarioSort = salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;
    }
);

function esPar (numero){
    return (numero % 2 == 0 )
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)) {
    
        const personaMitad = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const promedio = (personaMitad2 + personaMitad) /2;
        return promedio;
    }else{

        return personaMitad;

    }

}
