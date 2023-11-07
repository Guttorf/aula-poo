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

export class alunotransferido extends aluno {
  alunotransferido: string

  constructor(nome: string, id: number,  matricula: string, saladetransferencia: string) {
    super(nome, id, matricula)
    this.alunotransferido = "alunotransferido"
     }
     dadosdoaluno (m:string) {
      super.matricula = m
     }
    
     transfereAluno () {
      return "Traansferencia bem sucedida!"
     }
}

