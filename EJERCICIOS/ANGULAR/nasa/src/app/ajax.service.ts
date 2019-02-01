import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private apiUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=4IKbbMHCbHWuRnnPO1AEuEoopxV5s4WK51FAWsDU';

  constructor(private http: HttpClient) {
  }

  httpGetRequest() {
    return this.http.get<any>(this.apiUrl);
  }

  httpRequestPhpServer() {
    const url = 'http://localhost/servidor/servidorJSON.php';
    const parametro = {
      servicio: 'listar'
    };
    return this.http.post(url, JSON.stringify(parametro));
  }
}
