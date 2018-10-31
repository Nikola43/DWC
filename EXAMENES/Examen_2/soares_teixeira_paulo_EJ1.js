/*
    Convierte a mayúsculas la entrada del usuario

    Permite:
        * Letras (a-z, A-Z)
        * Espacios
 */
function soloLetrasEspacios(event){
    var codigoASCII = event.charCode || window.event.keyCode;
    this.value = this.value.toLocaleUpperCase();
    return ((((codigoASCII >= 65) && (codigoASCII <= 90)) || ((codigoASCII >= 97) && (codigoASCII <= 122))) || (codigoASCII === 32));
}

/*
    Comprueba que el NIF introducido es válido
        * Comprueba que la letra calculada sea igual a la que ha introducido el usuario

    Permite dos formatos
        * 12345678N
        * 12345678-N
 */
function validarNIF(NIF){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (NIF.length !== 9) // Comprobamos que tiene 9 caracteres, ni uno mas ni uno menos
        return false;

    return !(NIF.charAt(8) !== letras.charAt(NIF.substring(0, 8) % 23));
}

/*
    Permite:
        * Letras mayúsculas y minúsculas
        * Dígitos númericos
        * Cualquiera de los siguientes caracteres: * _ @ & $ % ? # (Puede conteneer cualquiera, pero máximo uno de cada)
*/
function soloLetrasNumerosCaracteresEspeciales(event){
    var codigoASCII = event.charCode || window.event.keyCode;
    var caracterASCII = String.fromCharCode(codigoASCII);

    if (   (cuentaCaracter(this.value, '*') > 1)
        || (cuentaCaracter(this.value, '_') > 1)
        || (cuentaCaracter(this.value, '@') > 1)
        || (cuentaCaracter(this.value, '&') > 1)
        || (cuentaCaracter(this.value, '$') > 1)
        || (cuentaCaracter(this.value, '%') > 1)
        || (cuentaCaracter(this.value, '?') > 1)
        || (cuentaCaracter(this.value, '#') > 1)){
        this.value = this.value.substring(0, this.value.length - 1);
    }

    return ((((codigoASCII >= 65) && (codigoASCII <= 90)) || ((codigoASCII >= 97) && (codigoASCII <= 122)))
        || ((codigoASCII >= 48) && (codigoASCII <= 57))
        || (caracterASCII === '*')
        || (caracterASCII === '_')
        || (caracterASCII === '@')
        || (caracterASCII === '&')
        || (caracterASCII === '$')
        || (caracterASCII === '%')
        || (caracterASCII === '?')
        || (caracterASCII === '#'));
}

/*
    Cuenta cuantas ocurrencias hay de un caracter en una string
 */
function cuentaCaracter(str, char) {
    var contador = 0;

    for (var i = 0; i < str.length; i++)
        if (str[i] === char)
            contador++;

    return contador;
}

/*
    Comprueba que la clave cumple estos requisitos:
        * Debe contener minimo 8 caracteres
        * Al menos una letra minúscula y otra mayúscula
        * Al menos un numero
        * Al menos uno de los siguientes caracteres: * _ @ & $ % ? #
 */
function validarClave(clave) {
    // Debe contener minimo 8 caracteres
    if (clave.length < 8)
        return false;

    // Al menos una letra minúscula y otra mayúscula
    for (var i = 0; i < clave.length; i++)
        if ((clave[i] < 'a') && (clave[i] > 'z'))
            return false;

    // Al menos un numero
    for (var j = 0; j < clave.length; j++)
        if ((clave[j] < 0) && (clave[j] > 9))
            return false;

    // Al menos uno de los siguientes caracteres: * _ @ & $ % ? #
    if (   (cuentaCaracter(clave, '*') < 1)
        && (cuentaCaracter(clave, '_') < 1)
        && (cuentaCaracter(clave, '@') < 1)
        && (cuentaCaracter(clave, '&') < 1)
        && (cuentaCaracter(clave, '$') < 1)
        && (cuentaCaracter(clave, '%') < 1)
        && (cuentaCaracter(clave, '?') < 1)
        && (cuentaCaracter(clave, '#') < 1)){
        return false;
    }

    return true;
}

/*
    Recibe dia, mes y año
    y devuelve true, si es una fecha valida (tiene en cuenta bisiestos)
 */
function validarFecha(dia, mes, anio) {
    dia  = parseInt(dia);
    mes  = parseInt(mes - 1);
    anio = parseInt(anio);
    var valor = new Date(anio, mes, dia);
    return (anio > 0) && ((dia === valor.getDate()) && (mes === valor.getMonth()) && (anio === valor.getFullYear()));
}

/*
    Resta tu fecha actual y la fecha de nacimiento
    y devueve la edad
 */
function calcularEdad(dia, mes, anio) {
    dia  = parseInt(dia);
    mes  = parseInt(mes - 1);
    anio = parseInt(anio);

    if (!validarFecha(dia, mes, anio))
        return -1;
    else
        return  parseInt((new Date() - new Date(anio, mes, dia))/365/24/60/60/1000);
}

/*
    Comprueba si hay al menos un radio button seleccionado
 */
function validarRadioButton(listaRadio){
    var estaMarcado = false;

    for (var i = 0; (i < listaRadio.length) && (estaMarcado === false); i++)
        if (listaRadio[i].checked)
            estaMarcado = true;

    return estaMarcado;
}

/*
    Valida una cuenta bancaria
 */
function validarCuenta(numeroCuenta){
    var valores1 = [4, 8, 5, 10, 9, 7, 3, 6];
    var valores2 = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

    var controlPrimerNumero=0;
    var controlSegundoNumero=0;

    for (var i=0; i<=7; i++) {
        controlPrimerNumero += numeroCuenta.charAt(i) * valores1[i];
    }
    controlPrimerNumero = 11 - (controlPrimerNumero % 11);
    if (controlPrimerNumero === 11){
        controlPrimerNumero = 0;
    }
    else if (controlPrimerNumero === 10){
        controlPrimerNumero = 1;
    }

    var j=0;
    for (var k=10; k<=19; k++) {

        controlSegundoNumero += (numeroCuenta.charAt(k)) * valores2[j];
        j++;
    }
    controlSegundoNumero = 11 - (controlSegundoNumero % 11);
    if (controlSegundoNumero === 11){
        controlSegundoNumero = 0;
    }
    else if (controlSegundoNumero === 10){
        controlSegundoNumero = 1;
    }

    var numero1 = numeroCuenta.charAt(8);
    var numero2 = numeroCuenta.charAt(9);

    return numero1 === controlPrimerNumero && numero2 === controlSegundoNumero;
}