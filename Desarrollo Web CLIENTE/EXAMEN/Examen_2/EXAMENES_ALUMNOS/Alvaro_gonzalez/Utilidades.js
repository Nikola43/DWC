// UTILIDADES JS

// ##################################################################################################
// ##################################################################################################
// LETRAS Y CADENAS
// ##################################################################################################
// ##################################################################################################

function soloLetras(eve) {

  // INPUT
  // Solo deja escribir letras, usar las flechas y borrar.

  var e = eve || window.event;
  var key = e.charCode || e.keyCode;

  if (key >= 65 && key <= 90) {
    return true;
  } // Mayusculas
  else if (key >= 97 && key <= 122) {
    return true;
  } // Minusculas
  else if (key == 209 || key == 241) {
    return true;
  } // ñ Ñ
  else if (key == 32) {
    return true;
  } // espacio
  else if (key >= 37 && key <= 40) {
    return false;
  } // Flechas
  else if (key == 8) {
    return true;
  } // Retroceso
  else {
    return false;
  }
}

function soloLetrasyNumeros(eve) {
  return soloLetras(eve) || soloNumeros(eve);
}

function soloMayusculas(eve) {
  	
  // INPUT
  // En la practica es igual que "soloLetras"
  // en keyup pone el input a mayusculas

  if (eve.type == "keypress") {
    return soloLetras(eve);
  }
  if (eve.type == "keyup") {
    this.value = this.value.toUpperCase();
  }

}

function isLetter(char) {

  // Comprueba si char es una letra
  // Sin tildes

  if (char.length == 1) {
    var letters = /^[a-zA-Z]+$/;
    if (char.match(letters)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function isLettersOnly(str) {

  // Comprueba si str contiene solo letras
  // Sin tildes

  var letters = /^[a-zA-Z ]+$/;
  if (str.match(letters)) {
    return true;
  } else {
    return false;
  }

}

// ##################################################################################################
// ##################################################################################################
// NÚMEROS
// ##################################################################################################
// ##################################################################################################

function soloNumeros(eve) {

  // Solo deja escribir números
  // Ideal campos de fecha
  
  var e = eve || window.event;
  var key = e.charCode || e.keyCode;

  if ((key >= 48 && key <= 57) || (key == 8)) {
      return true;
  } else {
      return false;
  }
}

function soloNumerosDecimal(eve) {

  // INPUT
  /*  Esta funcion sirve para introducir números decimales
      en un campo, tanto positivos como negativos,
      controlando que no entren más de un signo flotante,
      sea punto o coma.
      (En firefox suprimir y punto = 46)
  */

  var e = eve || window.event;
  var key = e.charCode || e.keyCode;
  var numNegativo = 0; // Para que no se permita poner punto despues del signo negativo

  if (this.value.includes("-")) {
    numNegativo = 1;
  } else {
    numNegativo = 0;
  } // Si es un número negativo

  if ((key >= 48 && key <= 57) || (key >= 37 && key <= 40) || (key == 8)) {
    return true;
  } // Numeros, Flechas y Retroceso
  else if (key == 46 && (!this.value.includes(",") && !this.value.includes(".")) && this.selectionStart > numNegativo) {
    return true;
  } // Punto
  else if (key == 44 && (!this.value.includes(",") && !this.value.includes(".")) && this.selectionStart > numNegativo) {
    return true;
  } // Coma
  else if (key == 45 && !this.value.includes("-") && this.selectionStart == 0) {
    return true;
  } // Numeros negativos
  else {
    return false;
  }
}

function soloNumerosDecimalEstatura(eve) {

  // INPUT
  // Para campos donde introducir la estatura!

  var e = eve || window.event;
  var key = e.charCode || e.keyCode;

  if (this.selectionStart > 0) {
    this.value = this.value.replace(".", "");
    this.value = this.value.slice(0,1) + "." + this.value.slice(1);
  }

  if ((key >= 48 && key <= 57) || (key >= 37 && key <= 40) || (key == 8)) {
    return true;
  } // Numeros, Flechas y Retroceso
  else if (key == 46 && (!this.value.includes(",") && !this.value.includes(".")) && this.selectionStart != 0) {
    return true;
  } // Punto
  else if (key == 44 && (!this.value.includes(",") && !this.value.includes(".")) && this.selectionStart != 0) {
    return true;
  } // Coma
  else {
    return false;
  }
}

function rellenaCeros(num, length, pos) {
  // pos 'i' = izq
  if (num && length && pos) {
      var ceros = "";
      num = num.toString();
      if (num.length < length) {
          for (let i = 0; i < length; i++) {
              ceros += 0;
          }
      }
      if (pos.toUpperCase() == "I") {
          return ceros + num;
      } else {
          return num + ceros;
      }
  } else {
      return null;
  }
}

function isNumberOnly(str) {

  // Comprueba si str contiene solo números
  // Sin tildes

  var letters = /^[0-9]+$/;
  if (str.match(letters)) {
    return true;
  } else {
    return false;
  }

}

// ##################################################################################################
// ##################################################################################################
// VALIDACIÓN FORMULARIOS
// ##################################################################################################
// ##################################################################################################

function validateNIF(nif) {
  if (nif.length == 9 && isLetter(nif.substr(8, 9))) {
    var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var lettersPos = 0;
    var nifNum = nif.substr(0, 8);
    var nifLetter = nif.substr(8, 9).toUpperCase();

    if (nifNum > 0 && nifNum < 99999999) {
      lettersPos = nifNum % 23;
      if (letters[lettersPos] == nifLetter) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return false;
}

function validateDate(day, month, year) {
  var date = new Date(year, month - 1, day);
  
  // console.log("Fecha user: " + day + "/" + month + "/" + year);
  // console.log("Fecha Date: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
  // console.log(date);


  if ((date.getDate() == day) && (date.getMonth() == month - 1) && (date.getFullYear() == year)) {
    return true;
  }else {
    return false;
  }

}

function validarCCC(ccc) {

  // CCC valida: 38157136758887654765

  if (typeof ccc !== 'string') {
      return false;
  } else {
      if (!isNumberOnly(ccc) && ccc.length != 20) {
          return false;
      } else {

          // console.log("entidad: " + ccc.substr(0, 4));
          // console.log("sucursal: " + ccc.substr(4, 4));
          // console.log("dc: " + ccc.substr(8, 2));
          // console.log("cuenta: " + ccc.substr(10));

          var entidad = ccc.substr(0, 4);
          var sucursal = ccc.substr(4, 4)
          var dc = ccc.substr(8, 2);
          var numCuenta = ccc.substr(10);

          var dc1 = calculaDCParcial(entidad+sucursal);
          var dc2 = calculaDCParcial(numCuenta);
          return (dc==(dc1+dc2));
      }
  }

  function calculaDCParcial(cadena) {
      var dcParcial = 0;
      var tablaPesos = [6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      var suma = 0;

      for (var i = 0; i < cadena.length; i++) {
          suma += cadena.charAt(cadena.length - 1 - i) * tablaPesos[i];
      }
      dcParcial = (11 - (suma % 11));
      if (dcParcial == 11) {
          dcParcial = 0;
      }else if (dcParcial == 10) {
          dcParcial = 1;
      }
      return dcParcial.toString();
  }
}



// //  Permitir SOLO números con decimales. Separador es la coma (,):
// function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
//   var c = e.charCode || window.event.keyCode;
//   //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
//   if (c == 45) {
// 	if (this.value.indexOf("-") == -1)
// 		this.value = "-" + this.value;
//     return false;
//   }
//   if (c == 44)
// 	return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1) || ((this.selectionStart == 1) & (this.value[0] == "-"))) 
//   else 
// 	if ((this.value.indexOf("-") != -1) && (this.selectionStart == 0))
// 		return false;
//     return ((c >= 48)  && (c <= 57));
// }