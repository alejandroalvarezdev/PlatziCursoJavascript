
var lado1 =document.getElementById("lado1"); 
var lado2 = document.getElementById("lado2");
var base = document.getElementById("base");;

function area(){
let l1 = lado1.value; 
let l2 = lado2.value;
let b = base.value; 
if (l1 != l2) {
    alert("esto no es un isoceles")
}else{
    
    response = Math.sqrt((l1**2) - (b**2/4));
    alert(response)
}
    console.log(l1,l2);
}