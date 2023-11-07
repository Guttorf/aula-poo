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

// import { Bank } from "./classes/BankAccount"

// import { Transaction } from "./classes/BankAccount"


    
// const bank1 = new Bank("Banerj ", 999 , "6867-c ", "976431")
// const bank2 = new Bank("BanRj ", 99 , "6587-c ", "969431")
// const trs1 = new Transaction ("Banespar ", "kok6541651 ", 1000 )
// const trs2 = new Transaction ("Cetelem ", "ggakutani33 ", 500 )   


// function realizartransacao
//   (
//   idRemetentefornecido: string, 
//   idDestinatariofornecido: string, 
//   valor: number
//   ) 
//   { 
//      const trs1 = new Transaction (
//       "Banespar ", "kok6541651 ", 1000 
//       )
//      return trs1
//   }

// console.log()



//  import { aluno } from "./aluno";
 

//  const aluno1 = new aluno("Robert ", 1, "105a")
//  const aluno2 = new aluno("Denis ", 2, "1g2f3d5e6 ")
//  const aluno3 = new aluno("Caio ", 3,"1f5d6w8w6e ")
//  const aluno4 = new aluno("Alice " , 4,"4e5e6l99 ")

//  console.log (aluno1, '\n') 

//  console.log (aluno2, '\n')


//  console.log (aluno3,'\n')
 
//  console.log (aluno4,'\n')

 import { alunotransferido } from "./aluno";

 const al1 = new alunotransferido("aaa",1,"312313", "213123")

 console.log(al1.transfereAluno())