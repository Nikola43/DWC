
function ValidarNIF_V2(nif) {
    if (nif.length == 9 && isLetter(nif.substr(8, 9))) {
      var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      var lettersPos = 0;
      var nifNum = nif.substr(0, 8);
      var nifLetter = nif.substr(nif.length-1).toUpperCase();
  
      if (nifNum > 0 && nifNum < 99999999) {
        lettersPos = nifNum % 23;
        if (letters[lettersPos] == nifLetter) {
          return [true, nifLetter, nifNum+nifLetter];
        } else {
            return [false, nifLetter, nifNum+nifLetter];
        }
      } else {
        return [false, nifLetter, nifNum+nifLetter];
      }
    }
    return [false, nifLetter, nifNum+nifLetter];
  }

  function formatear(valor, simbolo) {

    var numeros = /^[0-9]+$/;

    if (valor.match(numeros)) {
     if (simbolo.length < 2 && simbolo != "") {
         return valor+simbolo;
     }  
     return valor; 
    }
   return "";   
  }