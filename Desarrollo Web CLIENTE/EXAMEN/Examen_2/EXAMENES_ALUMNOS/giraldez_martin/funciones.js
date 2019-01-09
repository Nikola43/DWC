
//ejercicio 2
function ValidarNIF_V2(dni){
    var esCorrecto=false;
    var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var valueDni=dni.substr(0,8);
    var letra=dni.substr(dni.length-1,1).toUpperCase();
    var letraCorrecta=lockup.charAt(valueDni % 23);
    
    if(lockup.charAt(valueDni % 23)==letra){
        esCorrecto = true;
    }else{
        esCorrecto= false;
    }
   
    var array=new Array(esCorrecto,letraCorrecta,valueDni+letraCorrecta);
    //console.log(array);
    return array;
}


