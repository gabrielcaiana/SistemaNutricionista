var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("table").addEventListener("dblclick", function(event) {
 var alvoEvento = event.target
 var paiDoAlvo = alvoEvento.parentNode
 paiDoAlvo.remove()
})