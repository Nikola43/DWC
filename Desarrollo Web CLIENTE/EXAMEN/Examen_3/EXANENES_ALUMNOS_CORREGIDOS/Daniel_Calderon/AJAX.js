class AJAX {
	constructor() {
		this.p = new XMLHttpRequest();
	}
	//Metodo:
	petition(url, met, fRes = null, param = "") {
		met = met.toUpperCase();
		if (fRes != null) {
			this.p.onreadystatechange = function() {
				if ((this.readyState == 4) && (this.status == 200)){
					//console.log(this.responseText);
					fRes(JSON.parse(this.responseText));
				}
			}
		}
		if (met == "GET"){
			if (param.trim().length > 0) url += "?"+param;
			this.p.open(met, url);
			this.p.send(null);
		}
		if (met == "POST"){
			this.p.open(met, url);
			this.p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			this.p.send(param);
		}
	}
}