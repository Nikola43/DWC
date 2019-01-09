function ValidarNIF_V2(nif){
	
//	var correcto[3];
	
	var correcto = new Array(3)  // Esto corrigiendo tu error de javascript.
	
 var letras="TRWAGMYFPDXBNJZSQVHLCKET";
   if(nif.length != 9 && nif.indexOf("-")!=-1 || nif.length != 9 && nif.indexOf("-")==-1){
    correcto[0]=false;
   }
    var dni=nif.substring(0,8);
    correcto[1]=letras[dni%23];
    if (letras[dni%23]==nif[8].toUpperCase()){
		correcto[0]=true;
		correcto[2]=nif;
	}
	return correcto;
   }