
//Seleccionar tod elemento de clase form_input
//ciclo hasta la cantidad de elementos de array
var inputs = document.getElementsByClassName('formulario_input');
for (var i=0;i<inputs.length;i++){// de acuerdo a la cantidad de elementos del array
inputs[i].addEventListener('keyup',function(){  //lee si se termino de ingresar dato,inicia funcion
    if(this.value.length>=1){// si hay datos en la casilla entonces se fija la label
        this.nextElementSibling.classList.add('fijar');
    }else {
    this.nextElementSibling.classList.remove('fijar');// si no hay datos entonces no se fija

    }
}) 
}
///validacion de usuarios
var getData= function(){
    var name=document.getElementById("name").value;
    var contrasena=document.getElementById("password").value;
    if((name=="User.1984") && (contrasena=="x#707")){
    var  us=1;
    }
    else if((name=="User.2049") && (contrasena=="y$$l")){
    var  usud=2;
    }
    if((name=="User.1900") && (contrasena=="59yup")){
        var  use=3;
        }
    if((us==1)||(usud==2)||(use==3)){
        alert("Admitido");
        location.href="Pag2.html";
    }
    else{
        alert("Usuario o contraseña incorrecto(s)");
    }
}

