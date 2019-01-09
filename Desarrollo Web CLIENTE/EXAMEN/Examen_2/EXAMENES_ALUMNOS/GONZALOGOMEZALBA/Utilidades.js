

//  En este fichero recogeremos nuestras utilidades javascript.

//  CAJAS DE TEXTO (<input type="text" ...... >):
  //  e => Es el parámetro del evento onkeypress.
  



//  Permitir SOLO números con decimales. Separador es la coma (,):
function PermiteSoloNumerosDecimalesComaNoPrimeraPosSigno(e) {
  var c = e.charCode || window.event.keyCode;
  //  Permitir el signo menos ( - ) sólo uno y en la primera posición:
  if (c == 45) {
	if (this.value.indexOf("-") == -1)
		this.value = "-" + this.value;
    return false;
  }
  if (c == 44)
	return !((this.selectionStart == 0) || (this.value.indexOf(",") != -1) || ((this.selectionStart == 1) & (this.value[0] == "-"))) 
  else 
	if ((this.value.indexOf("-") != -1) && (this.selectionStart == 0))
		return false;
    return ((c >= 48)  && (c <= 57));
}


			function soloNumero(evento){
				var evento = evento || window.event;
				var codigoCar= evento.charCode || evento.keyCode;
				
				return ((codigoCar >= 48) && (codigoCar<=57));
				/*
				if((codigoCar == 48) && (codigoCar==57)){
					return true;
				}
				else{
					false;
				}*/
			
			}
			function aMayusculas (evento) {
                	this.value=this.value.toUpperCase();
            }
			function HanSoloNumerosDecimal(elEvento){
				var evento=elEvento || windows.event;
				var codigoCar= evento.charCode || evento.keyCode;
				if(codigoCar == 46)		
					return !((this.selectionStart==0) || (this.value.indexOf(".")!=-1));
				
				return ((codigoCar >= 48) && (codigoCar<=57)|| codigoCar==46);	
		
			}
			
			function HanSoloAltura(elEvento){
				var evento=elEvento || windows.event;
				var codigoCar= evento.charCode || evento.keyCode;
				if(codigoCar == 46)		
					return !((this.selectionStart==0) || (this.value.indexOf(".")!=-1));
				if(codigoCar==48 && this.selectionStart==0)
					return false;
				
				
				return ((codigoCar >= 48) && (codigoCar<=57)|| codigoCar==46);	
		
			}
			function soloNumeroNegativo(evento){
				var evento=evento || windows.event;
				var codigoCar = evento.charCode || evento.keyCode;
				
				if((codigoCar == 45) || (codigoCar == 43))		
						return !((this.selectionStart!=0) || (this.value.indexOf("-")!=-1) || (this.value.indexOf("+")!=-1));
				
				if(codigoCar == 46)		
						return !((this.selectionStart<=1) || (this.value.indexOf(".")!=-1));
				return ((codigoCar >= 48) && (codigoCar<=57));
			
			}
			function soloLetras(evento){
				var evento = evento || window.event;
				var codigoCar= evento.charCode || evento.keyCode;
				
				
				return (!((codigoCar >= 48) &&  (codigoCar<=57)));
				/*
				if(!(codigoCar == 48) && (codigoCar==57)){
					return true;
				}
				else{
					false;
				}*/
			
			}
			var cont=0;
			var punto= false;
			function soloDecimal(evento){
				var evento = evento || window.event;
				var codigoCar= evento.charCode || evento.keyCode;
				
				if((cont == 0) && (codigoCar == 46||codigoCar == 44)){
					return false;
				}
				else if((codigoCar >= 48) && (codigoCar <= 57)){
					cont++;
					return true;
				}
				else if((cont > 0) &&  !(punto) && (codigoCar == 46 || codigoCar == 44)){
					punto=true;
					return true;
				
				}
				else{
					return false;
				}
			}
			function HanSoloNumerosDecimal(elEvento){
				var evento=elEvento || windows.event;
				var codigoCaracter = evento.charCode || evento.keyCode;
				if (((this.value.length==0) && (codigoCaracter==46)) || ((this.value.indexOf('.')>=0) && (codigoCaracter==46)) || (codigoCaracter != 46 && codigoCaracter > 31 && (codigoCaracter < 48 || codigoCaracter > 57)))
					return false;

				return true;		
		
			}
			function validaFecha(dia,mes,anyo){
				
				var dia=document.getElementById("f_dia").value;
				var mes=document.getElementById("f_mes").value - 1;
				var anyo=document.getElementById("f_ano").value;
				
				var valor= new Date(anyo,mes,dia);
				
				
				if (dia!=valor.getDate() || mes!=valor.getMonth() || anyo!=valor.getFullYear()){
					
					return false;
				}
				else{
					return true;
				}
			}
			function PermiteSoloLetrasEspacios(evento){
				var evento = evento || window.event;
				var codigoCar= evento.charCode || evento.keyCode;
				
				if(!((codigoCar >= 48) &&  (codigoCar<=57)) || codigoCar==32){
					return true;
				}
				else{
					return false;
				}
				
			}
			function ValidaRadio(radio){
			//	console.log(radio.length);
				for(var i=0; i<radio.length; i++) {
					if(radio[i].checked) {
						return radio[i].value;
					}
				}
			}
			function ValidaCaja(caja){
				var cont=0;
				for(var i=0; i<caja.length; i++) {
					if(caja[i].checked) {
						cont++;
					}	
				}
				if(cont<3){
					return false;
				}
				else{
					return true;
				}
			}
			function ValidaCuentaCorriente(numCuenta){
				multi = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6); 
				var primerDigito = 0;
				var segunDigito = 0; 
				
				for (var i=0; i<=7; i++) {
					primerDigito += numCuenta[i] * multi[i+2]; 
				}
				primerDigito = 11 - (primerDigito % 11); 
				
				
				if (primerDigito == 11){ 
					primerDigito = 0; 
				}
				else if (primerDigito == 10){
					primerDigito = 1; 
				}
				
				
				for (var i=10; i<=19; i++){
					segunDigito += numCuenta[i] * multi[i-10]; 
				}
				segunDigito = 11 - (segunDigito % 11); 
				
				
				if (segunDigito == 11){
					segunDigito = 0;
				} 
				
				else if(segunDigito == 10){
					segunDigito = 1; 	
				} 
				/*console.log("primer digito "+primerDigito);
				console.log("segundo digito "+segunDigito);
				console.log("posision 9 de cuenta "+numCuenta[8]);
				console.log("posision 10 de cuenta"+numCuenta[9]);*/
				
				
				if (primerDigito==numCuenta[8] && segunDigito==numCuenta[9]){
					return true;
				}else {
					return false;
				}
			
		}
			function ValidarNIF(nif){
			  var letras="TRWAGMYFPDXBNJZSQVHLCKET";
                if(nif.length != 9){
                return false;
                }
                var dni=nif.substring(0,8);
                var letra=letras[dni%23];
                return (letras[dni%23]==nif[8].toUpperCase());
              }
			function contar() {
				document.getElementById("infoRestantes").innerHTML = "Caracteres Restantes: " + (max - this.value.length); 
			}