
function ValidarNIF_V2(NIF){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var resultado = [false, '', ""];

    // Comprobamos que tiene 9 caracteres u 10 si lleva guión
    if ((NIF.length === 9) || (NIF.length === 10))
    {
        resultado[0] = (NIF.indexOf("-") !== 8) ? !(NIF.charAt(8) !== letras.charAt(NIF.substring(0, 8) % 23)) : !(NIF.charAt(9) !== letras.charAt(NIF.substring(0, 8) % 23));
        resultado[1] = letras.charAt(NIF.substring(0, 8) % 23);
        resultado[2] = NIF.substring(0, 8) + letras.charAt(NIF.substring(0, 8) % 23);
        return resultado;
    }

    return false;
}

function Validar_Fecha(sfecha) {
    var arrayFecha;
    if (sfecha.indexOf("/") !== -1){
        arrayFecha = sfecha.split("/");
    }

    if (sfecha.indexOf("-") !== -1){
        arrayFecha = sfecha.split("-");
    }

    return validarFecha(arrayFecha[0], [1], [2]);
}

function validarFecha(dia, mes, anio) {
    dia  = parseInt(dia);
    mes  = parseInt(mes - 1);
    anio = parseInt(anio);
    var valor = new Date(anio, mes, dia);
    return (anio > 0) && ((dia === valor.getDate()) && (mes === valor.getMonth()) && (anio === valor.getFullYear()));
}
