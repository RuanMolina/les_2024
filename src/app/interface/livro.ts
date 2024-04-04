import { Dimensoes } from "./dimensoes";

export interface Livro {
  id:number,
  autor:string,
  categoria:string,
  ano:string,
  titulo:string,
  editora:string,
  edicao:string,
  isbn:string,
  numeroDePaginas:string,
  sinopse:string,
  dimensoes:Dimensoes,
  precificacao:string,
  codBarras:string

}
