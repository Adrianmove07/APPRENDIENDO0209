/*registro*/
function registrarse(){
    var nombreRegistro = document.getElementById("nameregistro").value;
    var correoRegistro = document.getElementById("correoregistro").value;
    var contraseña = document.getElementById("contraseñaregistro").value;
    var ccontraseña = document.getElementById("ccontraseñaregistro").value;
    
    if (nombreRegistro==""){
        alert("El nombre de usuario es obligatorio");
        document.getElementById("nameregistro").focus();
    }else if (correoRegistro=="") {
        alert("El correo del usuario es obligatorio");
        document.getElementById("correoregistro").focus();
    }else if (contraseña=="") {
        alert("La contraseña es obligatoria");
        document.getElementById("contraseñaregistro").focus();
    }else if (ccontraseña==""){
        alert("Confirmar contraseña");
        document.getElementById("ccontraseñaregistro").focus();
    }else if (contraseña!=ccontraseña){
        alert("Las contraseñas no coinciden");
        document.getElementById("contraseñaregistro").focus();
    }else{
        alert("Registro exitoso");
        document.getElementById("nameregistro").value="";
        document.getElementById("correoregistro").value="";
        document.getElementById("contraseñaregistro").value="";
        document.getElementById("ccontraseñaregistro").value="";
       
        console.log({nombreRegistro, correoRegistro, contraseña, ccontraseña})
    }   
    }

/*login*/
function login(){
    var email = document.getElementById("correologin").value;
    var password = document.getElementById("contraseñalogin").value;
    if (correoRegistro!=email){
        alert("No se encontro en nuestros registros este correo");
        document.getElementById("correologin").value="";
    }else if (password!=contraseña){
        alert("la contraseña no coincide con el registro");
        document.getElementById("contraseñalogin").value="";
    }else{
        document.load("perfilusuario.html");
    }
}

/*registro datos usuario*/
function enviarperfil(){
    var nombreUsuario = document.getElementById("nombreuser").value;
    var apellidosUsuario = document.getElementById("apellidosuser").value;
    var fechanacimineto = document.getElementById("fechanacuser").value;
    var correoUsuario = document.getElementById("correouser").value;
    var telefonousuario = document.getElementById("telefonouser").value;
    var direccionUsuario = document.getElementById("direccionuser").value;
    var vercorreo = document.getElementById("correouser");
    var correoverif = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;

if (nombreUsuario==""){
    alert("El nombre de usuario es obligatorio");
    document.getElementById("nombreuser").focus();
}else if (apellidosUsuario==""){
        alert("Los apellidos del usuario son obligatorios");
        document.getElementById("apellidosuser").focus();
}else if(fechanacimineto==""){
        alert("La fecha de nacimiento es obligatoria");
        document.getElementById("fechanacuser").focus();
}else if (correoUsuario=="") {
    alert("El correo del usuario es obligatorio");
    document.getElementById("correouser").focus();
}else if (telefonousuario=="") {
    alert("El telefono es obligatorio");
    document.getElementById("telefonouser").focus();
}else if (direccionUsuario==""){
    alert("La direccion es obligatoria");
    document.getElementById("direccionuser").focus();
}else{
    alert("Registro exitoso");
    document.getElementById("nombreuser").value="";
    document.getElementById("apellidosuser").value="";
    document.getElementById("fechanacuser").value="";
    document.getElementById("correouser").value="";
    document.getElementById("telefonouser").value="";
    document.getElementById("direccionuser").value="";
   
    console.log({nombreUsuario, apellidosUsuario, fechanacimineto, correoUsuario, telefonousuario, direccionUsuario})
} 


}

function validarcorreo(correoUsuario){
    var correoUsuario = document.getElementById("correouser");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correoUsuario)){
        alert("La dirección de email " + correoUsuario + " es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
}