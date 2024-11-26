import { Formulario } from "./formulario.js";

const formulario = new Formulario()

document.getElementById("cadastrar").addEventListener("click",adicionarPaciente);
document.getElementById("selecionarPaciente").addEventListener("change", tabelaPaciente);

function adicionarPaciente(e) {
    e.preventDefault();
    let nome = document.getElementById('nomePaciente').value;
    let idade = document.getElementById('idadePaciente').value;
    let genero = document.querySelector('input[name="sexo"]:checked').value;
    let peso = parseFloat(document.getElementById('pesoPaciente').value);
    let altura = parseFloat(document.getElementById('alturaPaciente').value);
    let cintura = parseFloat(document.getElementById('cinturaPaciente').value);
    let quadril = parseFloat(document.getElementById('quadrilPaciente').value);
    


    formulario.adicionarPaciente(nome, idade, genero, peso, altura, cintura, quadril, /*estiloVida*/);
     alert (" Paciente cadastrado com sucesso!")
    nome = '';
    idade = '';
    genero = '';
    peso = '';
    altura = '';
    cintura = '';
    quadril = '';
    console.log(formulario.cadastroPaciente);
    atualizarListaPacientes();
}
    
function atualizarListaPacientes () {
    const pacienteSelect = document.getElementById('selecionarPaciente');
    pacienteSelect.innerHTML = '<option value=""> Selecionar um paciente </option>';
    formulario.cadastroPaciente.forEach((paciente, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = paciente.nome;
        pacienteSelect.appendChild(option);
    });
}   

function tabelaPaciente () {
const cadastroPaciente = document.getElementById("listaPacientes");
    cadastroPaciente.innerHTML = "";
    const listaPacientes = formulario.listarPaciente();
    

    listaPacientes.forEach((paciente) => {
        const linha = cadastroPaciente.insertRow(0);
        const cellNome = linha.insertCell(0);
        const cellIdade = linha.insertCell(1);
        const cellGenero = linha.insertCell(2);
        const cellPeso = linha.insertCell(3);
        const cellAltura = linha.insertCell(4);
        const cellIMC = linha.insertCell(5);
        const cellGorduraC = linha.insertCell(6);
        const cellPesoI = linha.insertCell(7);
        const cellTBM = linha.insertCell(8);
        
        cellNome.textContent = paciente.nome;
        cellIdade.textContent = paciente.idade;
        cellGenero.textContent = `${paciente.genero}`;
        cellPeso.textContent = paciente.peso;
        cellAltura.textContent = paciente.altura;
        cellIMC.textContent = `${formulario.calcularIMC(paciente.peso, paciente.altura).toFixed(2)}`;
        cellGorduraC.textContent = `${formulario.calcularPercentualGordura(paciente.idade, paciente.genero, paciente.peso, paciente.altura).toFixed(2)}`;
        cellPesoI.textContent = `${formulario.calcularPesoIdeal(paciente.genero, paciente.altura).toFixed(2)}`;
        cellTBM.textContent = `${formulario.calcularTmb(paciente.peso, paciente.altura, paciente.idade, paciente.genero).toFixed(2)}`;
    })
}
   
                  
