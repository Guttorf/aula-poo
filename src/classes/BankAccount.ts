export class Bank  {
    nome: string
    saldo: number
    id: string
    senha: String
    constructor(nomeFornecido: string, saldoFornecido: number, idFornecido: string, senhaFornecido: String)
    {
    this.nome = nomeFornecido
    this.saldo = saldoFornecido 
    this.id = idFornecido
    this.senha = senhaFornecido
    console.log(this)
    }
    
     saque(v: number)
     { 
      if(this.saldo >= v)
      {
        return this.saldo -= v
      }else{
      return "Ops, Saldo insuficiente!";
      }
      
      }
      deposito(v: number) 
      {
      return this.saldo += v
      } 
    } 
  