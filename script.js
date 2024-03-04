User
function enviar() {
  let cep = document.querySelector("#textinput").value;
  const ajax = new XMLHttpRequest();

  ajax.open("GET", `https://viacep.com.br/ws/${cep}/json/`);
  ajax.send();

  ajax.onload = function () {
     
      const resposta = JSON.parse(ajax.responseText);
      document.querySelector("#endereco").innerHTML = resposta.logradouro;
      document.querySelector("#bairro").innerHTML = resposta.bairro;
      document.querySelector("#uf").innerHTML = resposta.uf;
      document.querySelector("#localidade").innerHTML = resposta.localidade;
      if (resposta.complemento !== "") {
        document.querySelector("#complemento").innerHTML = resposta.complemento;
      } else {
        document.querySelector("#complemento").innerHTML = "Não possui complemento";
  };
   }

  ajax.onerror = function () {
    alert("Erro ao realizar a requisição. Verifique se o CEP está correto e tente novamente.");
    document.querySelector("#endereco").innerHTML = "";
    document.querySelector("#bairro").innerHTML = "";
    document.querySelector("#uf").innerHTML = "";
    document.querySelector("#localidade").innerHTML = "";
    document.querySelector("#complemento").innerHTML = "";
    
 
 
 
  };

 }

