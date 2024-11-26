
class Paciente{
    constructor(nome, idade, peso, altura, genero,  cintura, quadril, estiloVida) {
        this.id = Math.trunc(Math.random() * 1000)
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.genero = genero;
        this.estiloVida = estiloVida;
       // this.cintura = cintura;
       // this.quadril = quadril;
        
   
    }

}

export{Paciente}