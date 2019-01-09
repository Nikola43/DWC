class Peticion{
    constructor(){
        this.peti=new XMLHttpRequest();
    }
    //defino el metodo
    cargaContenido(url,metodo,callback,param="") {
        metodo=metodo.toUpperCase();
        if(callback!=null){
            this.peti.onreadystatechange = function(){
                if((this.readyState == 4) && (this.status == 200)) {
                    callback(JSON.parse(this.responseText));
                }
            }
        }

        if(metodo=="GET"){
            if(param.trim().length>0)
                url += "?" + param;
            this.peti.open(metodo,url);
            this.peti.send();
        }
        if(metodo=="POST"){
            this.peti.open(metodo,url);
            this.peti.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            this.peti.send(param);
        }
    }
}