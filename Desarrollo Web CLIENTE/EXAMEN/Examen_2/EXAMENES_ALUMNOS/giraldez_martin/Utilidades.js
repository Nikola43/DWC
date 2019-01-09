        //permitir que esciba un numero determinado de caracteres
        function limita(elEvento,maximo) {
            
               if(this.value.length >= maximo ) {
                    return false;
                }
                else {
                    return true;
                }
        }
        //permitir solo numeros
        function soloNumeros(elEvento){
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode  || evento.charCode ;
            if((codigoCaracter>=48) && (codigoCaracter<=57)){
                return true;
            }else{
                return false;
            }
        }
        //permitir solo letras
        function soloLetras(elEvento){
         
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode || evento.charCode ;
            if(((codigoCaracter>=65) && (codigoCaracter<=90)) || ((codigoCaracter>=97) && (codigoCaracter<=122))){
                return true;
            }else{
                return false;
            }
        }

        //permitir solo numeros y letras
        function soloLetrasYNumeros(elEvento){
         
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode || evento.charCode ;
            if(((codigoCaracter>=65) && (codigoCaracter<=90)) || ((codigoCaracter>=97) && (codigoCaracter<=122)) || (codigoCaracter>=48) && (codigoCaracter<=57)){
                return true;
            }else{
                return false;
            }
        }
        //permitir solo decimales
        function soloDecimal(elEvento){
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode  || evento.charCode ;
           var repeticion=0;
            if(codigoCaracter==46 && this.value.length==0){
                return false;
            }
            //para saber si existe una coma puedo utilizar this.value.indexof(".")!=-1
            if(this.value.split(".").length-1){
                for(i=0;i<this.value.length;i++){
                    if(this.value.charAt(i) == "."){
                        repeticion++;
                    }
                }
            }
            if(((codigoCaracter>=48) && (codigoCaracter<=57)) || (codigoCaracter==46 && repeticion<1 && this.selectionStart!= 0)){
                return true;
            }else{
                return false;
            }
        }
        //permitir numeros decimales con signo
        function soloNumerosConSigno(e){
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
        //pasarlo a mayusculas
        function aMayusculas(elEvento){
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode  || evento.charCode ;

            this.value=this.value.toUpperCase();
        } 

        //permitir solo letras y espacios
        function soloLetrasYEspacios(elEvento){
         
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode || evento.charCode;
            if(((codigoCaracter>=65) && (codigoCaracter<=90)) || ((codigoCaracter>=97) && (codigoCaracter<=122)) || codigoCaracter==32){
                return true;
            }else{
                return false;
            }
        }

       
        //validar DNI
        function validaNIF(dni){
            var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
            var valueDni=dni.substr(0,dni.length-1);
            var letra=dni.substr(dni.length-1,1).toUpperCase();
            
            if(lockup.charAt(valueDni % 23)==letra)
                return true;
            return false;
        }

        
        

        //validar fecha
        function validarFecha(dia,mes,ano){
            mes=mes-1;
            var valor=new Date(ano,mes,dia);
            
            if(dia!=valor.getDate() || mes!=valor.getMonth() || !valor.getFullYear()){
				return false;
			}else{
				return true;
			}
        }

        //validar checkbox
        function validaCheckbox(id){
            opciones = document.getElementsByName(id);
 
            var seleccionado = false;
            for(var i=0; i<opciones.length; i++) {    
                if(opciones[i].checked) {
                    seleccionado = true;
                    break;
                }
            }
            if(!seleccionado){
                return false;
            }else{
                return true;
            }
          }
        
        //valida select
        function validaSelected(id){
            indice = document.getElementById(id).selectedIndex;
            if( indice == null || indice == 0 ) {
                return false;
            }else{
                return true;
            }
        }

        //validar una cuenta corriente
        function validarCuenta(id){
            var numeroCuenta=document.getElementById(id).value;

            var valores1=new Array(4, 8, 5, 10, 9, 7, 3, 6);
            var valores2=new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
            
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

        //comprobacion de si tiene numero
        function tieneNumero(id){
            var valor=document.getElementById(id).value;
            var numeros="0123456789";
            for(var i=0; i<valor.length; i++) {    
                if(numeros.indexOf(valor.charAt(i),0)!=-1) {
                    return true;
                }
            }
             return false;
            
        }

        //comprobacion de si tiene letra
        function tieneLetra(id){

            var valor=document.getElementById(id).value.toLowerCase();
            var letras="abcdefghijklmnñopqrstuvwxyz";

            for(var i=0; i<valor.length; i++) { 
                if(letras.indexOf(valor.charAt(i),0)!=-1){
                     return true;
                }
            }
            return false;
        }

        //comprobacion de si tiene letra mayuscula
        function tieneLetraMayuscula(id){
            var valor=document.getElementById(id).value;
            var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

            for(var i=0; i<valor.length; i++) { 
                if(letras.indexOf(valor.charAt(i),0)!=-1){
                     return true;
                }
            }
           return false;
        }

        //comprobacion de si tiene letra minuscula
        function tieneLetraMinuscula(id){
            var valor=document.getElementById(id).value;
            var letras="abcdefghijklmnñopqrstuvwxyz";

            for(var i=0; i<valor.length; i++) { 
                if(letras.indexOf(valor.charAt(i),0)!=-1){
                     return true;
                }
            }
           return false;
        }

        //comprobacion de caracter
        function tieneCaracterObligatorio(id){
           
            var valor=document.getElementById(id).value;

            for(var i=0; i<valor.length; i++) { 
                if(valor[i]=='*' || valor[i]=='_' || valor[i]=='@' || valor[i]=='&' || valor[i]=='$' || valor[i]=='%' || valor[i]=='?' ||valor[i]=='#') {
                    return true;
                }
            }
            return false;
        }

        //comprobacion de si ya tiene ese caracter (return false si no tiene el caracter)
        function TieneCaracter(id,caracter){
            var valor=document.getElementById(id).value;

            for(var i=0; i<valor.length; i++) { 
                if(valor[i]==caracter) {
                    return true;
                }
            }
            return false;
        }
        //restringcion para el usuario
        function restringirUsuario(elEvento){
            var evento = elEvento || window.event;
            var codigoCaracter = evento.keyCode || evento.charCode ;
            if(((codigoCaracter>=65) && (codigoCaracter<=90)) || ((codigoCaracter>=97) && (codigoCaracter<=122)) || (codigoCaracter>=48) && (codigoCaracter<=57)){
                return true;
            }else{
                if((codigoCaracter==42 && !TieneCaracter("usuario","*")) || (codigoCaracter==95 && !TieneCaracter("usuario","_")) || (codigoCaracter==64 && !TieneCaracter("usuario","@")) || (codigoCaracter==38 && !TieneCaracter("usuario","&")) || (codigoCaracter==36 && !TieneCaracter("usuario","$")) || (codigoCaracter==37 && !TieneCaracter("usuario","%")) || (codigoCaracter==63 && !TieneCaracter("usuario","?")) || (codigoCaracter==35 && !TieneCaracter("usuario","#"))){
                    return true;
                }
            }
            return false;
        }
     
