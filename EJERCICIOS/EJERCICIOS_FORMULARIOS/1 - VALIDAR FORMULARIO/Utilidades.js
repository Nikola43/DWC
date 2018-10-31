
/*
	Solo permite del 0-9
*/
function soloNumeros(event){
  return (((event.charCode || window.event.keyCode) >= 48) && ((event.charCode || window.event.keyCode) <=57));
}

/*
    Permite caracteres especiales en el navegador mozilla
 */
function soloCaracteresEspecialesMozilla(event){
  var codigoASCII = event.charCode || window.event.keyCode;
  return ((codigoASCII >= 48) && (codigoASCII <= 57) || (codigoASCII === 8) ||
          (codigoASCII === 46) || (codigoASCII === 32) || (codigoASCII === 37) ||
          (codigoASCII === 38) || (codigoASCII === 39) || (codigoASCII === 40));
}

/*
    Permite letras de la a-z
 */
function soloLetras(event){
    return (((event.charCode || window.event.keyCode) >= 65) && ((event.charCode || window.event.keyCode) <= 122));
}



/*
    Permite letras de la a-z y espacios (32)
 */
function soloLetrasEspacios(event){
    var codigoASCII = event.charCode || window.event.keyCode;

    //         Desde 'a'              Hasta 'Z'           O    Desde 'A'              Hasta 'Z'             O  Espacio
    return ((((codigoASCII >= 65) && (codigoASCII <= 90)) || ((codigoASCII >= 97) && (codigoASCII <= 122))) || (codigoASCII === 32));
}


/*
    Permite numeros decimales, separados por ,
 */
function soloNumerosDecimalesComa (event){
    var codigoASCII = event.charCode || window.event.keyCode;
    return codigoASCII === 44 ? !((this.selectionStart === 0) || (this.value.indexOf(",") !== -1)) : ((codigoASCII >= 48) && (codigoASCII <= 57));
}


/*
    Permite numeros decimales, separados por .
 */
function soloNumerosDecimalesPunto (event){
    var codigoASCII = event.charCode || window.event.keyCode;
    return codigoASCII === 44 ? !((this.selectionStart === 0) || (this.value.indexOf(".") !== -1)) : ((codigoASCII >= 48) && (codigoASCII <= 57));
}



/*
    Permite numeros decimales positivo y negativos
    con coma o punto como separador
 */
function soloNumerosDecimalesPositivosNegativosComaPunto(event) {
    var codigoASCII = event.charCode || window.event.keyCode;

    //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
    if ((codigoASCII === 45) && (this.value.indexOf("-") === -1)) {
        this.value = "-" + this.value;
        return false;
    }

    if (codigoASCII === 44)
        return !((this.selectionStart === 0) || (this.value.indexOf(",") !== -1) || ((this.selectionStart === 1) & (this.value[0] === "-")));
    else if ((this.value.indexOf("-") !== -1) && (this.selectionStart === 0))
        return false;
    else return ((codigoASCII >= 48)  && (codigoASCII <= 57));

}


function validarNombre(event) {
    var codigoASCII = event.charCode || window.event.keyCode;
    var tecla = event.key || window.event.key;

    this.value = this.value.toUpperCase();

    return ((((codigoASCII >= 65) && (codigoASCII <= 90))  // Desde 'a' Hasta 'z'
        || ((codigoASCII >= 97) && (codigoASCII <= 122)))  // Desde 'A' Hasta 'Z'
        || (codigoASCII === 32)    // ESPACIO
        || (codigoASCII === 44)    // ,
        || (codigoASCII === 46)    // .
        || (tecla === "Backspace") // backspace
        || (tecla === "Delete")); // supr
}


/*
    Comprueba que el nif introducido es válido
    con o sin guion
 */
function validarNifConGuion(NIF){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    return (NIF.indexOf("-") !== 8) ? !(NIF.charAt(8) !== letras.charAt(NIF.substring(0, 8) % 23)) : !(NIF.charAt(9) !== letras.charAt(NIF.substring(0, 8) % 23))
}

/*
    Validar fecha
 */
function validarFecha(dia, mes, anio) {
    dia  = parseInt(dia);
    mes  = parseInt(mes - 1);
    anio = parseInt(anio);
    var valor = new Date(anio, mes, dia);
    return (anio > 0) && ((dia === valor.getDate()) && (mes === valor.getMonth()) && (anio === valor.getFullYear()));
}

/*
    Calcula la edad
 */
function calcularEdad(dia, mes, anio) {
    dia  = parseInt(dia);
    mes  = parseInt(mes - 1);
    anio = parseInt(anio);
    return  parseInt((new Date() - new Date(anio, mes, dia))/365/24/60/60/1000);
}

/*
    Comprueba si hay al menos un radio button seleccionado
 */
function validarRadioButton(listaRadio){
  var estaMarcado = false;

  for (var i = 0; (i < listaRadio.length) && (estaMarcado === false); i++){
    if (listaRadio[i].checked){
      estaMarcado = true;
    }
  }

  return estaMarcado;
}

//funcion sugerir
var contGlobal = 0;
function sugerir() {
    var cadena = "Escribir no es mi fuerte. ";
    contGlobal = contGlobal % cadena.length;
    this.value = this.value + cadena[contGlobal];
    contGlobal++;
    return false;
}

/*
document.getElementById("nombre").onpaste= function(){
    alert ("acho que no pegues!!!");
    return false;
};

document.getElementById("nombre").ondrop= function(){
    alert ("acho que no arrastres!!!");
    return false;
};
*/