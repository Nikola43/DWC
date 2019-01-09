class paJAX{
    constructor(){
        this.p = new XMLHttpRequest();
    }

    //defino el metodo
    peticion(url, metodo, callBack = null, param = ""){
        metodo= metodo.toUpperCase();
        //HAGO COPIA (por referencia)
       // console.log("llega");
        if (callBack != null){
            //function anonima
            this.p.onreadystatechange = function(){
                //lo mismo puede ser this o p si me la creo fuera.
                if ((this.readyState == 4) && (this.status == 200)){
                    console.log("responde"+ this.responseText);
                    callBack(JSON.parse(this.responseText));
                }
            };
        }
        if(metodo ==  "GET" ){
            if(param.trim().length > 0) {
                url += "?" + param;
            }
            this.p.open(metodo, url);
            this.p.send(null);

        }

            if(metodo ==  "POST" ){
            this.p.open(metodo, url);
            this.p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            this.p.send(param);

        }
    }
}