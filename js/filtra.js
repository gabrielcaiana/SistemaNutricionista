var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){
 var filtro = this.value

 var pacientes = document.querySelectorAll(".paciente")

 if(filtro.length > 0 ) {
  pacientes.forEach(function(paciente) {
   var tdNome = paciente.querySelector(".info-nome")
   var nome = tdNome.textContent
   if (nome != filtro) {
    paciente.classList.add("invisivel")
   }else {
    paciente.classList.remove("invisivel")
   }
  }) 
 }else {
  for(paciente of pacientes) {
   paciente.classList.remove("invisivel")
  }
 }
})
