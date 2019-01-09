class ConexionJSON {

    constructor() {
        this.conexion = new XMLHttpRequest();
    }

    recuperarJSON(method, url, callback) {
        
        if (method.toUpperCase() == "GET") {
            
            this.conexion.addEventListener("load", callback);
            this.conexion.open(method, url, true);
            this.conexion.send();

        }

    }

}

class PetitionAJAX {

    constructor() {
        this.conection = new XMLHttpRequest();
    }

    petition2json(method, url, callback = null, param = ""){
        method = method.toUpperCase();

        if (callback != null) {
            this.conection.onreadystatechange = function() {
                if ((this.readyState == 4) && (this.status == 200)) {
                    //console.log(this.responseText);
                    callback(JSON.parse(this.responseText));
                }
            };
        }

        if (method == "GET") {
            if (param.trim().length > 0) {
                url += "?" + param;
            }
            this.conection.open(method, url, true);
            this.conection.send();
        }

        if (method == "POST") {
            this.conection.open(method,url);
            this.conection.setRequestHeader("Content-Type", "application/x-www-form-urlencoder");
            this.conection.send(param);
        }
    }
}