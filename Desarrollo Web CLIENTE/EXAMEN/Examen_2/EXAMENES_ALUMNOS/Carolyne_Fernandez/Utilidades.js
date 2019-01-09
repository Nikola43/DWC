/************Letras en mayusculas***********************/
function aMayuscula(e){
    this.value=this.value.toUpperCase();
    
}

function PermisoSoloLetrasEspacios(evento){
    var evento = evento || window.event;
    var codigoCar= evento.charCode || evento.keyCode;

    if(!((codigoCar >= 48) &&  (codigoCar<=57)) || codigoCar==32){
        return true;
    }
    else{
        return false;
    }

}
/*************Funcion solo letras*************/
function PermisoSoloLetras(evento){
    var evento = evento || window.event;
    var codigoCar= evento.charCode || evento.keyCode;
    console.log(codigoCar);
    if (codigoCar == 42)
            return !((this.value.indexOf("*") != -1));
    if (codigoCar == 35)
            return !((this.value.indexOf("#") != -1)); 
    
     if (codigoCar == 36)
            return !((this.value.indexOf("$") != -1)); 
     if (codigoCar == 37)
            return !((this.value.indexOf("%") != -1)); 
    if (codigoCar == 38)
            return !((this.value.indexOf("&") != -1));
    if (codigoCar == 95)
            return !((this.value.indexOf("_") != -1)); 
    if (codigoCar == 64)
            return !((this.value.indexOf("@") != -1)); 
     if (codigoCar == 63)
            return !((this.value.indexOf("?") != -1)); 

    return ((codigoCar >= 48) && (codigoCar<=57)||(codigoCar >= 97) && (codigoCar<=122)||(codigoCar >= 65) && (codigoCar<=90)
           ||codigoCar==42 ||codigoCar==95 ||codigoCar==38||codigoCar==64||codigoCar>=35&&codigoCar<=37|| codigoCar==63);
    
}


/*********Funcion para validar el NIF*********/
function validadDNI(nif){
    var letras="TRWAGMYFPDXBNJZSQVHLCKET";
    if(nif.length != 9){
        return false;
    }
    var dni=nif.substring(0,8);
    var letra=letras[dni%23];
    return (letras[dni%23]==nif[8].toUpperCase());
}
/********Funcion para cojer el radio*********/
function CojerRadio(valor){

    for(var i=0 ; i < valor.length ; i++)
        if(valor[i].checked) return valor[i].value;
}


   function calcularDC(valor,evento){
       
       var suma=0;
            for(var i=0 ; i<valor.length; i++){
                switch(i){
                    case 0:
                        suma+=valor[i]*1;
                         break;
                    case 1:
                        suma+=valor[i]*2;

                        break;
                    case 2:
                        suma+=valor[i]*4;
                        break;
                    case 3:
                        suma+=valor[i]*8;
                        break;
                    case 4:
                        suma+=valor[i]*5;
                        break;
                    case 5:
                        suma+=valor[i]*10;
                        break;
                    case 6:
                        suma+=valor[i]*9;
                                
                        break;
                    case 7:
                        suma+=valor[i]*7;
                        break;                    
                    case 8:
                        suma+=valor[i]*3;
                        break;
                    case 9:
                        suma+=valor[i]*6;
                        break;

                }

            }

       if(suma%11==0)
           return suma%11;
       else
        return(11-suma%11);

   }

/***********Funcion para fecha***********/
function fechaValida(dia,mes,ano){
  //validamos fecha
    var fecha=new Date(ano,mes,dia);

    if(dia!=fecha.getDate()||mes!=fecha.getMonth()||ano!=fecha.getFullYear())
        return false                  
    else
        return true;
}


   
        