/*let Cat = {
  nome:"Madame",
  idade: 2,
  peso: 3,
  falar() {
    console.log(this.nome + " meow")
  }
}
Cat.falar()*/

/*Classe BankAccount
Possui nome, id, senha e saldo
Nome, id senha são fornecidos na criação
Saldo sempre começa em 0*/



class Bank  {
  nome: string
  saldo: number
  id: string
  senha: number
  constructor(nomeFornecido: string, saldoFornecido: number, idFornecido: string, senhaFornecido: number)
   {
  this.nome = nomeFornecido
  this.saldo = saldoFornecido = 1
  this.id = idFornecido
  this.senha = senhaFornecido
  }
  bankvalor () {
    console.log(this.saldo)
   }
} 
const bank = new Bank("Banerj ", 1000)
     