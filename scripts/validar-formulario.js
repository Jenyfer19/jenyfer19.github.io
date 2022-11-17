document.addEventListener("DOMContentLoaded",function(){
document.getElementById("formulario_contacto").addEventListener('submit',validacionformulario);
});

var msjerror = document.getElementById("msjerror");

//función para validar los campos de entrada del fromulario
function validacionformulario(evento){
    evento.preventDefault(); // para evitar ejecutar el formulario de manera predeterminada

    //Comprueba si el campo nombre y paellido es válido(no está vacío)
    var nombre = document.getElementById("txtnombresapellidos").value;
    //"alert(nombre)" para comprobar si lee correctamente
    if(nombre == null || nombre.length==0){
        msjerror.innerHTML="El nombre y apellido no debe estar vacío";
        nombre.focus();
        return false;
    }

    var regExpSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    if(regExpSoloLetras.test(nombre)==false){
        msjerror.innerHTML="El nombre solo debe contener letras y espacios";
        return false;
    }


    //Comprueba si el campo telefono es válido(no está vacío)
    var telefono = document.getElementById("txtcelular").value;
    if(telefono == null || telefono.length==0){
        msjerror.innerHTML="El campo teléfono no debe estar vacío";
        telefono.focus();
        return false;
    }
    //Comprueba si el teléfono tiene solo números
    var regExpSoloNumeros=/^[0-9]+$/;
    if(regExpSoloNumeros.test(telefono)==false) {
        msjerror.innerHTML="El teléfono debe contener solo números";
        return false;
    }

    //Comprueba si la direccion de correo tiene formato válido
    var correo = document.getElementById("txtcorreo").value;
    if(correo == null || correo.length==0){
        msjerror.innerHTML="El campo correo no debe estar vacío";
        correo.focus();
        return false;
    }
    var regExpCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(regExpCorreo.test(correo)==false) {
        msjerror.innerHTML="El correo electrónico ingresado no tiene un formato válido";
        return false;
    }

    //Comprueba si ha seleccionado un elemento de la lista
    var i = document.getElementById("listservicios").selectedIndex;
    if(i == null || i==0){
        msjerror.innerHTML="Debe seleccionar un servicio de la lista";
        return false;
    }

    //Comprueba si ha seleccionado el checkbox de terminos y condiciones
    var acepto = document.getElementById("chkacepto").checked;
    if(acepto == false){
        msjerror.innerHTML="Debe aceptar los términos y condiciones de privacidad";
        return false;
    }

    //Si pasó todas las ases de validación, entonces ejecutará el programa PHP
    this.submit();


}
