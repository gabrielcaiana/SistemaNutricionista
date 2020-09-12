const botãoEnviar = document.querySelector("#adicionar-paciente") .addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var pacienteTr = montarTr(paciente)
    var erro = validaPaciente(paciente)
    
    if(erro.length > 0) {
     var mensagemErro = document.querySelector("#mensagemErro")
     mensagemErro.textContent = erro
     
     return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr)
    form.reset();

  });

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montarTr(paciente) {
  var pacienteTr = document.createElement("tr");

  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

  return pacienteTr
}

function montarTd(data, classe) {
 var td = document.createElement("td")
 td.textContent = data;
 td.classList.add(classe)

 return td;
}

function validaPaciente(paciente) {
 if(validaPeso(paciente.peso)) {
  return ""
 }else {
  return "O peso informado é inválido!"
 }
}
