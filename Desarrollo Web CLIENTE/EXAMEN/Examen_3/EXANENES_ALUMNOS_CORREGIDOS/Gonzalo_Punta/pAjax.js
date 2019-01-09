
	class pAjax{
        constructor() {
            this.p=new XMLHttpRequest();
        }

        //Defino el metodo: 

        //URL (normal), metodo (GET o POST), fRes (collback), 
        peticion(url, metodo, fRes=null, param= ""){
            metodo=metodo.toUpperCase();
            if (fRes!=null){
                this.p.onreadystatechange=function(){
                    if ((this.readyState==4) && (this.status==200))
                        fRes(JSON.parse(this.responseText));
                };
            }
            if (metodo="GET"){
                if (param.trim().length>0){
                    url+="?" + param;
                }
                this.p.open(metodo, url);
                this.p.send(null);
            }
            if (metodo="POST"){
                this.p.open(metodo, url);
                this.p.setRequestHeader("Content_Type", "application/x-www-form-urlencoded");
                this.p.send(param);
            }
        }
    }
