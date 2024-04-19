
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual é a melhor marca de ténis?");

    
    if (respostaTime.toLowerCase() === "ADIDAS E NIKE ") {
      alert("Isso mesmo! A MELHOR MARCA DE TÉNIS É ADIDAS E NIKE !");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
