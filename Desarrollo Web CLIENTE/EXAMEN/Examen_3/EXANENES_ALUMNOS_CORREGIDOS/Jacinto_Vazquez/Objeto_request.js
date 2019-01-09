class Peticion {
    constructor () {
        this.peti = new XMLHttpRequest();
    }

    cargaContenido(url, metodo, callback = null, param = "") {
        metodo = metodo.toUpperCase();
        //Preparar la funcion de respuesta
        if (callback != null)   {
            this.peti.onreadystatechange = function () {
                if ((this.status == 200) && (this.readyState == 4)) {
                    callback(JSON.parse(this.responseText));
                };
            }
        }

        if (metodo == "GET") {
            if (param.trim().length > 0)
                url += "?" + param;
            this.peti.open(metodo,url);
            this.peti.send();
        }
        
        if (metodo == "POST") {
            this.peti.open(metodo,url);
            this.peti.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            this.peti.send(param);
        }
    }
}