let Cat = {
  nome:"Madame",
  idade: 2,
  peso: 3,
  falar() {
    console.log(this.nome + " meow")
  }
}
Cat.falar()