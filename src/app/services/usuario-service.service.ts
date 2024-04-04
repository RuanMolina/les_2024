import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  url:string ='http://localhost:8080/user'
  constructor(private http:HttpClient) { }

  list():Observable<Usuario>{

    return this.http.get<Usuario>(this.url);
  }
  desativar(userId:number):Observable<any>{
    return this.http.delete(this.url+'/'+userId);
  }
}
