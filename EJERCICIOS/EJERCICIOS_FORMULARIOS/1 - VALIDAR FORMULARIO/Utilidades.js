//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
//  e => Es el parámetro del evento onkeypress.


//  Permitir SOLO números con decimales. Separador es la coma (,):
function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
    var c = e.charCode || window.event.keyCode;
    //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
    if (c === 45) {
        if (this.value.indexOf("-") === -1)
            this.value = "-" + this.value;
        return false;
    }
    if (c === 44)
        return !((this.selectionStart === 0) || (this.value.indexOf(",") !== -1) || ((this.selectionStart === 1) & (this.value[0] === "-")))
    else if ((this.value.indexOf("-") !== -1) && (this.selectionStart === 0))
        return false;
    return ((c >= 48) && (c <= 57));
}

function ValidarDni(dni) {	// Retorna: true | false
    var letra='TRWAGMYFPDXBNJZSQVHLCKET';
    var numeroDni = dni.substr(0,dni.length-1);//desde cero hasta el tamaño de cad -1
    var let = dni.substr(dni.length-1,1).toUpperCase();

    if (letra.charAt(numeroDni % 23) === let)
        return true;	// DNI correcto


    return false;	// DNI incorrecto
}

//validamos dni
/*function ValidarDni(dni) {
    //validamos dni
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    //primero la longitud
    if (dni.length !=9) {
        return false;
    }
   var dni = dni.substr(0,8);
}*/

//funcion para pasar a mayuscula
function mayusculas() {
    this.value = this.value.toUpperCase();
}

//var maximoCaracteres = 5;
function limiteCadena(maximoCaracteres) {
    var cad = document.getElementById("text");

    if (cad.value.length >= maximoCaracteres) {
        return false;
    }
}

//solo permito numeros (Restriccion)
function soloSePermiteNumero(elEvento) {

    //para el chrome y mozilla
    var evento = elEvento || window.event;
    //para que funcione en todos los navegadores
    var codigoCaracter = evento.charCode || evento.keyCode;
    console.log(codigoCaracter);

    /* if((codigoCaracter >= 48) && (codigoCaracter <=57)&& (this.value.length <= maximoCaracteres)){
         return true;
     }else {
         return false;
     }*/
    return ((codigoCaracter >= 48) && (codigoCaracter <= 57));
}

//Solo se permite introducir números y caracteres en la caja.
function HanSoloNumeros(elEvento) {
    //para el chrome y mozilla
    var evento = elEvento || window.event;
    //para que funcione en todos los navegadores
    var codigoCaracter = evento.charCode || evento.keyCode;
    console.log(codigoCaracter);

    /*if((codigoCaracter >= 48) && (codigoCaracter <=57)&& (this.value.length <= 5)){
        return true;
    }else false;*/
//para que funcione mozilla
    return ((codigoCaracter >= 48) && (codigoCaracter <= 57) || (codigoCaracter === 8) ||
        (codigoCaracter === 46) || (codigoCaracter === 32) || (codigoCaracter === 37) || (codigoCaracter === 38) ||
        (codigoCaracter === 39) || (codigoCaracter === 40));
}

//8 = borrar
//46= suprimir
//32 = espacio
//37 = flecha izquierda
//38 = flecha arriba
//39 = flecha derecha
//40 = flecha abajo

//Solo se permite introducir letras en la caja.
function soloLetra(elEvento) {
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    console.log(codigoCaracter);
    /* if ((codigoCaracter >= 65) && (codigoCaracter <= 122))
          return true;
      else
          return false;
      */
    return ((codigoCaracter >= 65) && (codigoCaracter <= 122));
}

//################################################################
//SOLO SE PERMITE INTRODUCIR LETRAS Y ESPACIOS.
//################################################################
function PermiteSoloLetrasEspacios(elEvento){
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;

    console.log(codigoCaracter);

    return ((codigoCaracter >= 65) && (codigoCaracter <= 122) || (codigoCaracter === 32));
}

function validarFecha(ano,mes,dia) {
    var valor = new Date(ano,mes-1,dia);
    return !(dia !== valor.getDate() || (mes - 1) !== valor.getMonth() || ano !== valor.getFullYear());
}

//validar un radioButton
function validarRadio(OpcionElegidaSexo) {
    var seleccionado = false;

    for(var i=0; i<OpcionElegidaSexo.length && !OpcionElegidaSexo[i].checked; i++)
        seleccionado = true;

    return seleccionado;
}

// solo numeros decimales con coma
function soloNumerosDecimales(e){
    var c=e.charCode || window.event.keyCode;
    if (c === 44){
        return !((this.selectionStart === 0) || (this.value.indexOf(",") !== -1));
    }
    else{
        return ((c>=48) && (c<=57));
    }
}