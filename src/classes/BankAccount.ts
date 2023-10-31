export class Bank  {
    nome: string
    saldo: number
    id: string
    senha: String
    aterada: any 
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
    
    export class Transaction {
      idRemetente: string;
      idDestinatario: string;
      valor: number;
      dateDeCriacao: Date;
  
  
      constructor(idRemetentefornecido: string, idDestinatariofornecido: string, valorfornecido: number)
      { this.idRemetente = idRemetentefornecido = "313146gyvh";
        this.idDestinatario = idDestinatariofornecido = "hd@312654465" ;
        this.valor =  valorfornecido = 100;
        this.dateDeCriacao = new Date() 
      }
      
  }
 
