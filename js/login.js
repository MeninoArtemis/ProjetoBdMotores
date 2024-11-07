document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const validUsername = 'admin';
    const validPassword = '12345';

    // Validação
    if (username === validUsername && password === validPassword) {
        // Sucesso no login
        window.location.href = '../html/banco_dados';
    } else {
        // Exibe a mensagem de erro
        document.getElementById('errorMessage').textContent = 'Usuário ou senha inválidos.';
    }
});
