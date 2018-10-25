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

    if (letra.charAt(numeroDni % 23) == let){

        return true;	// DNI correcto
    }

    return false;	// DNI incorrecto
}

//validamos dni
function ValidarDni(dni) {
    //validamos dni
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    //primero la longitud
    if (dni.length !=9) {
        return false;
    }
   var dni = dni.substr(0,8);
}


//var maximoCaracteres = 5;
function limiteCadena(maximoCaracteres) {
    var cad = document.getElementById("text");

    if (cad.value.length >= maximoCaracteres) {
        return false;
    }
}

//solo permito numeros (Restriccion)
function soloSePermiteNumero(event) {
    var codigoASCII = event.charCode || window.event.keyCode;
    return ((codigoASCII >= 48) && (codigoASCII <= 57));
}

function HanSoloNumeros(event) {
    var codigoASCII = event.charCode || window.event.keyCode;
    return new ((codigoASCII >= 48) && (codigoASCII <= 57) || (codigoASCII === 8) ||
        (codigoASCII === 46) || (codigoASCII === 32) || (codigoASCII === 37) || (codigoASCII === 38) ||
        (codigoASCII === 39) || (codigoASCII === 40));
}

function soloLetra(event) {
    var codigoASCII = event.charCode || window.event.keyCode;
    return ((codigoASCII >= 65) && (codigoASCII <= 122))
}

function PermiteSoloLetraEspacios(event) {
    var codigoASCII = event.charCode || window.event.keyCode;
    return ((codigoASCII >= 65) && (codigoASCII <= 122)) || (codigoASCII === 32);

}

// validar fecha
function validarFecha(ano,mes,dia) {
    var valor = new Date(ano,mes-1,dia);
    return !(dia !== valor.getDate() || (mes - 1) !== valor.getMonth() || ano !== valor.getFullYear());
}
