import { Cartao } from "./cartao";
import { Endereco } from "./endereco";
import { Telefone } from "./telefone";

export interface Usuario {
  id?:number,
  nome:string,
  senha:string,
  email:string,
  ativo:string,
  dataNascimento:Date,
  cpf:string,
  genero:number,
  enderecos?:Endereco[],
  telefone:Telefone,
  cartoes:Cartao[]

}
export interface UsuarioDTO {
  id?:number,
  nome:string,
  senha?:string,
  email:string,
  dataNascimento:Date,
  cpf:string,
  genero:number,
  enderecos?:Endereco
  telefone:Telefone

}
