var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {

   var erro_ajax = document.querySelector("#erro-ajax")

    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      erro_ajax.classList.add("invisivel")

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
      console.log(`O status da requisição é: ${xhr.status}`)
    }else {
     console.log(`O status da requisição é: ${xhr.status}`)
     erro_ajax.classList.remove("invisivel")
     erro_ajax.style.color = "red"
    }
  });

  xhr.send();
});
