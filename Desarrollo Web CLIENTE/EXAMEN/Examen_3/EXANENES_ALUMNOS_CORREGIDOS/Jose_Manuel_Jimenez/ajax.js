class pAJAX{
    constructor(){
        this.p=new XMLHttpRequest();
    }

    //defino metodo
    peticion(url,metodo,fres=null, param=""){//primero la url,despues el metodo GET por ejemplo, rfres es el callback,param parametros
        metodo=metodo.toUpperCase();
      
        if(fres !=null){
            this.p.onreadystatechange=function(){
                if((this.readyState==4)&&(this.status==200)){
                    fres(JSON.parse(this.responseText));
                }

            };
        }
        
        if(metodo=="GET"){
           
            if(param.trim().length>0){
                url +="?"+param;
            }
            this.p.open(metodo,url);
            this.p.send();
        }
        if(metodo=="POST"){
            this.p.open(metodo,url);
            this.p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            this.p.send(param);
        }

    }


}