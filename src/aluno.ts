export class aluno { 
    nome: string;
    id: number;
    sala: string;
    constructor(nome: string, id: number, sala: string) {
    this.nome = nome;
    this.id = id;
    this.sala =  sala;
  }
}
const als = new aluno("João ", 13, " 105a ")

class alunotransferido extends aluno {
  saladetransferencia: string

  constructor(nome: string, id: number,  sala: string, saladetransferencia: string) {
    super(nome, id, sala)
    this.saladetransferencia = saladetransferencia
     }
     dadosdoaluno() {
      return
     }
}
 console.log(this)