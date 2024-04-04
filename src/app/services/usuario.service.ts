import { Injectable } from '@angular/core';
import { Usuario, UsuarioDTO } from '../interface/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Endereco } from '../interface/endereco';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {



  url: string = 'http://localhost:8080/user'
  urlEnd: string = 'http://localhost:8080/endereco'

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]> {

    console.log('Listar todos usuarios');
    return this.http.get<Usuario[]>(this.url).pipe(tap(x => console.log(x)));
  }
  listById(userId: number): Observable<Usuario> {

    console.log('Listar todos usuarios');
    return this.http.get<Usuario>(this.url + '/' + userId).pipe(tap(x => console.log(x)));
  }
  create(usuario: UsuarioDTO): Observable<any> {
    console.log('Criaçao usuario');
    return this.http.post(this.url, usuario).pipe(tap(resp => console.log(resp)));
  }
  desativar(userId: number): Observable<any> {
    return this.http.delete(this.url + '/' + userId);
  }
  atualizar(usuario: UsuarioDTO): Observable<any> {
    return this.http.put(this.url, usuario);
  }
  atualizarSenha(userId: number, senhaAtual: string, novaSenha: string): Observable<any> {
    const req = {
      id: userId,
      senhaAtual: senhaAtual,
      senhaNova: novaSenha
    };

    const urlAtt = this.url + '/password';
    return this.http.put(urlAtt, req);

  }
  novoEndereco(endereco:Endereco): Observable<any> {

    const body = endereco;
    return this.http.post(this.urlEnd,body);
  }
}
