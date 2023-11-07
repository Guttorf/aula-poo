export class aluno { 
    nome: string;
    id: number;
    matricula: string;
    constructor(nome: string, id: number, matricula: string) {
    this.nome = nome;
    this.id = id;
    this.matricula = matricula
  }
}
const als = new aluno("João ", 13, " 1a5b6c8d ")

class alunotransferido extends aluno {
  saladetransferencia: string

  constructor(nome: string, id: number,  matricula: string, saladetransferencia: string) {
    super(nome, id, matricula)
    this.saladetransferencia = saladetransferencia
     }
     dadosdoaluno() {
      return
     }
}
 console.log()