import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private apiUrl: string = 'https://swapi.co/api/people/?format=json';

  constructor(private http: HttpClient) {
  }

  httpGetRequest() {
    return this.http.get<any>(this.apiUrl);
  }

  httpGetRequestUrl(url: string) {
    return this.http.get<any>(url);
  }
}
