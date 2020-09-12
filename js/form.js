const botãoEnviar = document
  .querySelector("#adicionar-paciente")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form)
    console.log(paciente)

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    console.log(pacienteTr);
  });

function obtemPacienteDoFormulario(form) {

 var paciente = {
  nome: form.nome.value,
  peso: form.peso.value,
  altura: form.altura.value,
  gordura: form.gordura.value,
  imc: calcularIMC(form.peso.value, form.altura.value)
 }
 return paciente
}
