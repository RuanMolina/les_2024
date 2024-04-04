export interface Endereco {
  id?: number,
  descricao: string,
  cep: string,
  bairro: string,
  tpLogradouro:string,
  logradouro:string
  numero: string,
  cidade: string,
  estado: string,
  pais:string,
  tpResidencia:string
  observacao?:string,
  userId?:number

}

export interface Estados{
  sigla:string,
  nome:string

}
