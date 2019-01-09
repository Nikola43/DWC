class pAjax{
    //constructor
    constructor(){
        this.peti = new XMLHttpRequest();
    }
    peticion(url, metodo, callback = null, param = ""){
        metodo = metodo.toUpperCase();
        
        //copia -> hacemos una copia ya que this.peti puede ser usada en sus metodos pero no dentro de una funcion
        var p = this.peti;

        if(callback != null){
            this.peti.onreadystatechange = function(){
                // console.log(p.responseText);
                if(p.readyState == 4 && p.status == 200){
                    //console.log(p.responseText);
                    callback(JSON.parse(p.responseText));
                }
            }
        }
        if(metodo == "GET"){
            if(param.trim().length > 0){
                url += "?" + param;
            }
            this.peti.open(metodo,url);
            this.peti.send(null);
        }
        if(metodo == "POST"){
            this.peti.open(metodo, url);
            //cabecera
            this.peti.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");
            this.peti.send(param);
        }
    }
}