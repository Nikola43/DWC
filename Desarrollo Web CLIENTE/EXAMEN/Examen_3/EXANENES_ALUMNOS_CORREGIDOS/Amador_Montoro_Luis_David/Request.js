class Request {

	constructor(){
		this.peticion = new XMLHttpRequest();
	}

	cargaContenido(metodo,url,callback,params = ""){
		this.peticion.onreadystatechange = function() {
			if(this.status == 200 & this.readyState == 4){
				var datos = JSON.parse(this.responseText);
				callback(datos);
			}}
			
			if(metodo.toUpperCase() == "GET"){
				if(params.trim().length > 0)
					url += "?" + params;
					this.peticion.open(metodo,url);
					this.peticion.send(params);
				} 


			if(metodo.toUpperCase() == "POST"){
				this.peticion.open(metodo,url);
				this.peticion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				this.peticion.send(params);
			}	
	}
}




