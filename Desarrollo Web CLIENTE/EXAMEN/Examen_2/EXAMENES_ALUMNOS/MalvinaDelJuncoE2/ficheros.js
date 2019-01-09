//RESTRICCIONES
//mayúsculas
function pasarAmayuscula() {
    this.value = this.value.toUpperCase();
}

//se podrá PERMITIR ESPACIOS EN BLANCOS
function PermiteSoloLetrasEspacios(elEvento) {
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    console.log(codigoCaracter);

    return ((codigoCaracter >= 65) && (codigoCaracter <=122) || (codigoCaracter == 32));

}

//para ver si el dni  es correcto
function ValidarDni(dni) {	// Retorna: true | false
    var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var numeroDni = dni.substr(0, dni.length - 1);//desde cero hasta el tamaño de cad -1
    var let = dni.substr(dni.length - 1, 1).toUpperCase();

    if (letra.charAt(numeroDni % 23) == let) {
        return true;	// DNI correcto
    }
    return false;	// DNI incorrecto
}

//OTRA
function ValidarNIF(nif){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var numero = nif.substr(0, nif.length-1); //desde 0 hasta el tamaño de cad-1
    var letra = nif.substr(nif.length-1, 1).toUpperCase();

    if (letras.charAt(numero % 23) === letra){
        return true; //dni correcto
    }else{
        return false; //dni incorrecto
    }
}

//letras mayusculas u minusculas/numeros/ usuario
function numerosLerasMinusMayusculasNumerosCaracteres(elEvento){
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    console.log(codigoCaracter);

    return ((((codigoCaracter >= 65) && (codigoCaracter <= 90))  // Desde 'a' Hasta 'z'
        || ((codigoCaracter >= 97) && (codigoCaracter <= 122))) // Desde 'A' Hasta 'Z'
        || (codigoCaracter >= 48) && (codigoCaracter <=57)
        ||(codigoCaracter ===42) // *
        ||(codigoCaracter ===95)//_
        ||(codigoCaracter ===64)// @
        ||(codigoCaracter ===38)//&
        ||(codigoCaracter ===37)//%
        ||(codigoCaracter ===63)//?
        ||(codigoCaracter ===35));//#
}

//usuario
function ContarCaracteres(cadena){
    //var caracteres="* _ @ & $ % ? #";
    var contA=0;
    var contG=0;
    var contAr=0;
    var contAm=0;
    var contP=0;
    var contPor=0;
    var contI=0;
    var contAlm=0;

    for(i=0; i< cadena.length; i++){
        if (cadena.charAt(i) == '*'){
            contA ++;
        }else if( cadena.charAt(i) == '_'){
            contG ++;
        }else if(  cadena.charAt(i) == '@'){
            contAr ++;
        }else if( adena.charAt(i) == '&'){
            contAm ++;
        }else if(  cadena.charAt(i) == '$'){
            contP ++;
        }else if( cadena.charAt(i) == '%'){
            contPor ++;
        }else if( cadena.charAt(i) == '?'){
            contI ++;
        }else if(  cadena.charAt(i) == '#'){
            contAlm ++;
        }
    }
    if(contA > 1 || contG > 1 || contAr > 1 || contAm >1 || contP > 1 || contPor > 1 || contI >1 || contAlm > 1 ) {
        return false;
    } else{
        return true;
    }
}
//funciones para confirmar que el usuario ponga numeros
function confirmarNumeros(cadena) {
    var num = "0123456789";
    for(i=0; i<cadena.length; i++){
        if (num.indexOf(cadena.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}
//funcion para confirmar que el usuario ponga letras minusculas
function confirmarLetraMinuscula(cadena) {
    var letra = "abcdefghyjklmnñopqrstuvwxyz";
    for(i=0; i<cadena.length; i++){
        if (letra.indexOf(cadena.charAt(i))!=-1){
            return true;
        }
    }
    return false;
}

//letras mayusculas
function confirmarLetraMayusculas(cadena){
    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    for(i=0; i<cadena.length; i++){
        if (letras_mayusculas.indexOf(cadena.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}
//confirmar caracteres obligatorios
function confirmarCaracteres(cadena){
    var caracteres="* _ @ & $ % ? #";
    for(i=0; i<cadena.length; i++){
        if (caracteres.indexOf(cadena.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

//funcion para validar fecha
function ValidarFecha(ano, mes, dia){
    //Creamos la fecha con esos valores (los anteriores).
    var valor = new Date(ano, mes-1, dia);
    //Si no se cumple ninguna de estas condiciones...
    if(dia != valor.getDate() || (mes-1) != valor.getMonth() || ano != valor.getFullYear()){
        return false;  //fecha incorrecta.
    }else{
        return true;  //fecha correcta.
    }
}
//validando si el usuario es mayor de edad
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

//cuenta
//validar una cuenta corriente
function validarCuenta(numCuen){
    var numeroCuenta=document.getElementById(numCuen).value;

    var valores1=new Array(4, 8, 5, 10, 9, 7, 3, 6);
    var valores2=new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);

    var controlPrimerNumero=0;
    var controlSegundoNumero=0;
    for (i=0; i<=7; i++) {
        controlPrimerNumero += numeroCuenta.charAt(i) * valores1[i];
    }
    controlPrimerNumero = 11 - (controlPrimerNumero % 11);
    if (controlPrimerNumero == 11){
        controlPrimerNumero = 0;
    }
    else if (controlPrimerNumero == 10){
        controlPrimerNumero = 1;
    }

    var j=0;
    for (i=10; i<=19; i++) {

        controlSegundoNumero += (numeroCuenta.charAt(i)) * valores2[j];
        j++;
    }
    controlSegundoNumero = 11 - (controlSegundoNumero % 11);
    if (controlSegundoNumero == 11){
        controlSegundoNumero = 0;
    }
    else if (controlSegundoNumero == 10){
        controlSegundoNumero = 1;
    }

    var numero1=0;
    var numero2=0;
    numero1= numeroCuenta.charAt(8);
    numero2= numeroCuenta.charAt(9);
    if(numero1==controlPrimerNumero && numero2==controlSegundoNumero){
        return true;
    }else{
        return false;
    }
}

//sexo
function f(sexo) {
    var selSexo = false;
    for (var i=0; (!opSexo[i].checked) && (i< opSexo.length); i++);
    selSexo = selSexo || opSexo[i].checked;
    var selSexo = (i != opSexo.length);
    if (!selSexo){
        return  false;
    }else{
        return true;
    }
}