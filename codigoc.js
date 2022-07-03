
var restaRet= function(){
    
    var x,y,suma,text;  
    x = 100;  
    y = document.getElementById("cant").value;  
    resta=parseFloat(x)-parseFloat(y);  
    text= resta;  
    if(resta<10){
        alert("El saldo no puede ser menor a 10$");
        yi = document.getElementById("cant");
        yi.value="";
        
    }
    else {
    document.getElementById("saldo").innerHTML = text;  
}
}
var sumaDep= function(){
    
    var x,y,suma,text;  
    x = 100;  
    y = document.getElementById("cant").value;  
    suma=parseFloat(x)+parseFloat(y);  
    text= suma;  
    if(suma>990){
        alert("El saldo no puede ser superior a 990$");
        yi = document.getElementById("cant");
        yi.value="";
    }
    else {
    document.getElementById("saldo").innerHTML = text;  
}
}
var cancel=function(){
    yi = document.getElementById("cant");
        yi.value="";
}