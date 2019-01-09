
//################################################################
//      SOLO SE PERMITE INTRODUCIR LETRAS Y ESPACIOS.
//################################################################
function PermiteSoloLetrasEspacios(elEvento){
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
  
    console.log(codigoCaracter);
  
    return ((codigoCaracter >= 65) && (codigoCaracter <=122) || (codigoCaracter == 32));
}


//################################################################
//      PASAR A MAYÚSCULAS
//################################################################
function aMayusculas(){
    this.value = this.value.toUpperCase();
}


//################################################################
//      VALIDAR DNI
//################################################################
function ValidarNIF(nif){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var numero = nif.substr(0, nif.length-1); //desde 0 hasta el tamaño de cad-1
    var letra = nif.substr(nif.length-1, 1).toUpperCase();
    
    if (letras.charAt(numero%23)==letra){
        return true; //dni correcto
    }else{
        return false; //dni incorrecto
    }
}

//#####################################################
//      ¿¿¿ CONTIENE ESTA CEDANA NÚMEROS???
//#####################################################
function TieneNumeros(cadena){
    var valor = document.getElementById(cadena).value;
    var tieneNumeros = false;

    for (var i=0; i<cadena.length; i++){
        if ((valor[i] >= 0) && (valor[i] <= 9)){
                tieneNumeros = true;
        }      
    }

    if (tieneNumeros){
        return true;
    }else{
        return false;
    }
}

//#####################################################
//      ¿¿¿ CONTIENE ESTA CEDANA LETRAS MAYÚSCULAS ???
//#####################################################
function TieneLetraMayuscula(cadena){
    var valor = document.getElementById(cadena).value;
  
    var tieneLetraMayuscula = false;
  
    for (var i=0; i<valor.length; i++) { 
        if (valor[i]=='A' || valor[i]=='B' || valor[i]=='C' || valor[i]=='D' || valor[i]=='E' || valor[i]=='F' ||
            valor[i]=='G' || valor[i]=='H' || valor[i]=='I' || valor[i]=='J' || valor[i]=='K' || valor[i]=='L' ||
            valor[i]=='M' || valor[i]=='N' || valor[i]=='Ñ' || valor[i]=='O' || valor[i]=='P' || valor[i]=='Q' || 
            valor[i]=='R' || valor[i]=='S' || valor[i]=='T' || valor[i]=='U' || valor[i]=='V' || valor[i]=='W' || 
            valor[i]=='X' || valor[i]=='Y' || valor[i]=='Z') {
            tieneLetraMayuscula = true;
        }
    }
    if(tieneLetraMayuscula){
        return true;
    }else{
        return false;
    }
  }



//#####################################################
//      ¿¿¿ CONTIENE ESTA CEDANA LETRAS MINÚSCULAS ???
//#####################################################
function TieneLetraMinuscula(cadena){
    var valor = document.getElementById(cadena).value;
  
    var tieneLetraMinuscula=false;
  
    for (var i=0; i<valor.length; i++) { 
        if (valor[i]=='a' || valor[i]=='b' || valor[i]=='c' || valor[i]=='d' || valor[i]=='e' || valor[i]=='f' ||
            valor[i]=='g' || valor[i]=='h' || valor[i]=='i' || valor[i]=='j' || valor[i]=='k' || valor[i]=='l' ||
            valor[i]=='m' || valor[i]=='n' || valor[i]=='ñ' || valor[i]=='o' || valor[i]=='p' || valor[i]=='q' || 
            valor[i]=='r' || valor[i]=='s' || valor[i]=='t' || valor[i]=='u' || valor[i]=='v' || valor[i]=='w' || 
            valor[i]=='x' || valor[i]=='y' || valor[i]=='z') {
            tieneLetraMinuscula = true;
        }
    }
    if (tieneLetraMinuscula){
        return true;
    }else{
        return false;
    }
  }


//####################################################################
//      ¿¿¿ CONTIENE ESTA CEDANA CARACTERES ESPECIALES ???
//####################################################################
function TieneCaracterEspecial(cadena){
    var valor = document.getElementById(id).value;
  
    var tieneCaracterEspecial = false;
  
    for (var i=0; i<valor.length; i++) { 
        if (valor[i]=='*' || valor[i]=='_' || valor[i]=='@' || 
            valor[i]=='&' || valor[i]=='$' || valor[i]=='%' || 
            valor[i]=='?' ||valor[i]=='#') {
            tieneCaracterEspecial = true;
        }
    }
    if(tieneCaracterEspecial){
        return true;
    }else{
        return false;
    }
}


//################################################################
//      SOLO SE PERMITE INTRODUCIR LETRAS EN LA CAJA.
//################################################################
function HanSoloLetras(elEvento){
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
  
    console.log(codigoCaracter);
  
    return ((codigoCaracter >= 65) && (codigoCaracter <=122));
}


//################################################################
        //VALIDAR RADIOS
//################################################################
function ValidarRadios(valor){
    estaMarcado = false;
    
    for (var i = 0; i < valor.length; i++){
      if (valor[i].checked){
        estaMarcado = true;
        break;
      }
      else{
        estaMarcado = false;
      }
    }
  
    if (estaMarcado == true)
      return true;
    else
      return false;
}

//################################################################
        //SOLO SE PERMITE INTRODUCIR NÚMEROS EN LA CAJA.
//################################################################
function HanSoloNumeros(elEvento){
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
  
    return ((codigoCaracter >= 48) && (codigoCaracter <=57))
  }
  


//################################################################
//      validar una cuenta corriente
//################################################################
function ValidarCuenta(cadena){
 //   var numeroCuenta = document.getElementById(cadena).value;
		var numeroCuenta = cadena;

    var valores1 = new Array(4, 8, 5, 10, 9, 7, 3, 6);
    var valores2 = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
    
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