const botãoEnviar = document
  .querySelector("#adicionar-paciente")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    console.log(erros)

    if (erros.length > 0) {
      exibiMensagensDeErro(erros);
      return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();
    var mensagensErro = document.querySelector("#mensagensErros")
    mensagensErro.innerHTML = ""
  });

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montarTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}

function exibiMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagensErros");
  ul.innerHTML = ""

  erros.forEach(function (err) {
    var li = document.createElement("li");
    li.textContent = err;
    ul.appendChild(li);
  });
}

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

  return pacienteTr;
}

function montarTd(data, classe) {
  var td = document.createElement("td");
  td.textContent = data;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
  if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco")
  if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco")
  if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco")

  return erros;
}
