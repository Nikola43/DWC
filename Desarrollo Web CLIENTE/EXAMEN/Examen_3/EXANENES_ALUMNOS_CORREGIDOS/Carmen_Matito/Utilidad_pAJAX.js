//###############################################################
//CLASE:        ENCAPSULAR LA LLAMADA AJAX.
//###############################################################

class pAJAX {
    constructor(){
        this.p= new XMLHttpRequest();
    }

    //Defino el método:
    peticion(url, metodo, fRes= null, param=""){  //---fRes= función de respuesta.(collback).
       metodo= metodo.toUpperCase();
        //hago una copia(por referencia) del atributo p, para hacerlo publico en todo el metodo
        if(fRes != null){
            this.p.onreadystatechange = function(){
                if ((this.readyState == 4) && (this.status == 200)){
                    console.log(this.responseText);
                    fRes(JSON.parse(this.responseText));
                }
            };
        }


        if (metodo == "GET"){
            if (param.trim().length > 0)
                url += "?" + param;
            this.p.open(metodo, url);
            this.p.send(null);  
        }

        if (metodo == "POST"){
            this.p.open(metodo, url);
            this.p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            this.p.send(param);
        }
   }  
}