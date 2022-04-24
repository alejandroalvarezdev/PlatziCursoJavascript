lista = [1,2,7,7,5,4,3,6,5,3,2,9,7,5,4];

listCount={};

lista.map(
    function(elemento){
        if(listCount[elemento]){
            listCount[elemento] +=1;
        } else{
            listCount[elemento] = 1;
        }
    }
);

