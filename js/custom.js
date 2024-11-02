// Custom Script
// Developed by: mateus 
$(function() {
  // Configura a data de término para 25 de novembro de 2024 às 10:45
  const dataFinal = new Date(2024, 10, 25, 8, 30, 00).getTime(); // Mês de novembro é 10 (zero-indexado)

  // Verifica a contagem regressiva
  $('.countdown.simple').countdown({ date: dataFinal });

  $('.countdown.styled').countdown({
      date: dataFinal,
      render: function(data) {
          $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
      },
      onEnd: function() {
          console.log("Contagem finalizada!"); // Log para depuração
          $('#botaoRedirecionar').show(); // Exibe o botão
      }
  });

  // Adiciona o botão de redirecionamento
  $('body').append('<button id="botaoRedirecionar" style="display:none;">Acessar Página</button>'); // Cria o botão
  $('#botaoRedirecionar').on('click', function() {
      window.location.href = 'sua_pagina.html'; // Altere para a URL da página desejada
  });
});

// O restante do seu código permanece inalterado
