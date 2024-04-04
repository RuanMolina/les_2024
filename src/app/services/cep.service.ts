import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CEPService {

  url:string='https://viacep.com.br/ws/value/json/';

  constructor(private http:HttpClient) { }

  get(cep:string):Observable<any>{


    const urlalterado = this.url.replace('value',cep);
    return this.http.get(urlalterado);
  }
}
