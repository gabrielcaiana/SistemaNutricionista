var titulo = document.querySelector(".titulo");
titulo.textContent = "Gabriel Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (let paciente of pacientes) {
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calcularIMC(peso,altura)
    tdImc.textContent = imc;
  }
}

function calcularIMC(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(1)
}