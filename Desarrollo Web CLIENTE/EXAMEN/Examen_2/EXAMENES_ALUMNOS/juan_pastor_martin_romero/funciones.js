function ValidarNIF_V2(dni){
    var arrayDNI = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    numero = dni.substr(0,8);
    letra = dni.substr(dni.length-1,1);
    //aseguramos que la letra esté en mayus
    letra=letra.toUpperCase();
    numeroLetra = numero % 23;
  
    //comprovamos que estan completos
    if(dni.indexOf("-") != -1 && dni.length != 10){
        return false;
    }else if(dni.indexOf("-") == -1 && dni.length != 9){
        return false;
    }
    
    if(arrayDNI[numeroLetra] == letra){
        var arrayDNI = [true, letra, dni];
        return arrayDNI;
    }else{
        return false;
    }
  }

  function Validar_Fecha(sfecha){
    
  }