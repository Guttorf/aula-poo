// Criar uma classe chamada transction
export class Transction {
    idRemetente: number;
    idDestinatario: number;
    valor: number;
    dateDeCriacao: Date;


    constructor(idRemetentefornecido: number, idDestinatariofornecido: number, valorfornecido: number)
    { this.idRemetente = idRemetentefornecido ;
      this.idDestinatario = idDestinatariofornecido ;
      this.valor =  valorfornecido;
      this.dateDeCriacao = new Date() 
    }
      
}








// A classe, guarda o valor da transação
// um ID de conta destinatário
// Guarda o ID do remetente
// Também assim que criada, guarda a data atual exata, do
// Momento de criação
// Os campos devem ser
// idRemetente*
// idDestinatario*
// valor*
// dataDeCriacao*
