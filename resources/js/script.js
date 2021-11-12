/*Inicializar Variables*/
var vNombre = "";
var vEmail = "";
var vTelefono = 0;


function mostarAlert() {

    var validaInput = true;

    /*Establecer Variables*/
    vNombre = document.getElementById("nombre").value;
    vEmail = document.getElementById("email").value;
    vTelefono = document.getElementById("telefono").value;

    //Validando mi primer input
    if (vNombre.length === 0) {
        alert("Debe ingresar un nombre");
        validaInput = false
    }
    //Validando mi segundo input
    if (vEmail.length === 0) {
        alert("Debe ingresar un correo electronico");
        validaInput = false
    }
    //Validando mi tercer input
    if (vTelefono.length === 0) {
        alert("Debe ingresar un telefono de contacto");
        validaInput = false
    }

    if (validaInput == true) {
        alert(vNombre + ", te estaremos respondiendo al siguiente correo " + vEmail + " o espera nuestra llamada al n° " + vTelefono);
    }
}