import { Paciente } from "./paciente.js";
class Formulario {
  constructor() {
    this.cadastroPaciente = [];
  }
  adicionarPaciente(nome, idade,genero, peso, altura, cintura, quadril, /*estiloVida*/) {
    const novoPaciente = new Paciente(
      nome,
      idade,
      peso,
      altura,
      genero,
      cintura,
      quadril,
      /*estiloVida*/
    );
    this.cadastroPaciente.push(novoPaciente);
  }
  listarPaciente(nome) {
    return this.cadastroPaciente;
  }
  buscarPacienteCadastrado(nome) {
    for (let i = 0; i < this.cadastroPaciente.length; i++) {
      const paciente = this.cadastroPaciente[i];
      if (paciente.nome == nome) {
        return paciente.nome;
      }
    }
    return null;
  }

  calcularIMC(peso, altura) {
    const IMC = peso / (altura * altura);
    return IMC;
  }
  /*classificaImc(IMC) {
    if (IMC < 18.5) {
      mensagem.innerText = "Você está abaixo do peso!";
    } else if (IMC >= 18.6 && IMC <= 24.9) {
      mensagem.innerText = `Seu IMC é de ${IMC.toFixed(2)}.
        Seu peso está ideal. Parabéns!`;
    } else if (IMC >= 25 && IMC <= 29.9) {
      mensagem.innerText = `Seu IMC é de ${IMC.toFixed(2)}.
        Você está levemente acima do peso.`;
    } else if (IMC>= 30 && IMC <= 34.9) {
      mensagem.innerText = `Seu IMC é de ${IMC.toFixed(2)}.
        Você está com obesidade grau 1.`;
    } else if (IMC >= 35 && IMC <= 39.9) {
      mensagem.innerText = `Seu IMC é de ${IMC.toFixed(2)}.
        Você está com obesidade severa grau 2.`;
    } else if (IMC >= 40) {
      mensagem.innerText = `Seu IMC é de ${IMC.toFixed(2)}.
        Você está com obesidade mórbida grau 3.`;
    } else {
      mensagem.innerText = `Não foi possível calcular.`;
    }
  }*/

  calcularPercentualGordura(idade, genero, peso, altura) {
    if (genero == "masculino") {
      const percentualGordura = 1.2 * (peso/(altura*altura)) + 0.23 * idade - 16.2;
      return percentualGordura;
    } else {
      const percentualGordura = 1.2 * (peso/(altura*altura)) + 0.23 * idade - 5.4;
      return percentualGordura;
    }
  }

  calcularTmb(peso, altura, idade, genero) {
    if(genero === "masculino") {
      const tbm = 88.36 + (13.4 * peso) +  (4.8 * ( altura *100)) - (5.7 * idade);
      return tbm;
    } else {
      const tbm = 447.6 + (9.2 * peso) + (3.1 * (altura * 100)) - (4.3 * idade);
      return tbm;
    }
  }

  calcularPesoIdeal(genero, altura) {
    if (genero == "masculino") {
      const pesoIdeal = 50 + 0.9 * ((altura * 100) - 152);
      return pesoIdeal;
    } else {
      const pesoIdeal = 45.5 + 0.9 * ((altura * 100) - 152);
      return pesoIdeal;
    }
  }

  calcularMassaMagra(peso, percentualGordura) {
    const massaMagra = peso - (peso * percentualGordura) / 100;
    return massaMagra;
  }

  calcularRiscoCardiaco(genero, idade, cintura, quadril) {
    const riscoCardiaco = cintura / quadril;

   // resultado.innerText = "O seu RCQ é de: " + rcq;//

    const faixa1 = idade >= 20 && idade <= 29;

    const baixo = riscoCardiaco <= 0.83;

    if (genero == "masculino" && faixa1 && baixo) {
      return "Risco baixo";
    }
  }

  /*calcularCaloriasDiarias(estiloVida, peso, altura, idade, genero ) {
    let calorias
    if (estiloVida === "sedentario") {
       calorias = this.calcularTmb(peso, altura, idade, genero) * 1.2;
       return calorias;
    } else if (estiloVida === "levemente ativo"){
         calorias = this.calcularTmb(peso, altura, idade, genero) * 1.375;
         return calorias
    } else if (estiloVida === "moderado ativo"){
         calorias = this.calcularTmb(peso, altura, idade, genero) * 1.550;
         return calorias
    } else { estiloVida === "muito ativo"
         calorias = this.calcularTmb(peso, altura, idade, genero) * 1.725;
         return calorias

    }
}*/
  }

export{Formulario};

/*const formulario = new Formulario();

formulario.adicionarPaciente("Anthony", 19, 80, 1.59, "masculino", 0.70, 0.90, "moderado")

console.log(formulario.cadastroPaciente);
console.log(formulario.calcularRiscoCardiaco("masculino", 20, 0.70, 0.90));
console.log(formulario.calcularCaloriasDiarias("sedentario", 80, 1.59, 20,"masculino"));*/


