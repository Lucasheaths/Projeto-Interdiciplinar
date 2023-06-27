document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;
        const pagamento = document.getElementById('pagamento').value;

        const deParaPag = {
            cartao: "Cartão",
            dinheiro: "Dinheiro",
            pix: "Pix",
            vr: "Vale Refeição"
        }

        // Cria um objeto JSON com os dados
        const dados = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            endereco: endereco,
            pagamento: deParaPag[pagamento]
        };

        // Converte o objeto JSON em uma string
        const dadosString = JSON.stringify(dados);

        // Armazena os dados na sessionStorage
        localStorage.setItem('usuario', dadosString);

        // Redireciona para a página mostraDados.html
        window.location.href = 'entregas.html';
      
  })
