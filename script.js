
//usuarios
const usuarios = {
  "claudionbn": "1234",
  "gabriel": "1234",
  "malu": "1234",
  "fernanda": "1234",
  
};

// Função de login
function efetuarLogin() {
  const usuario = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem');

  if (usuarios[usuario] && usuarios[usuario] === senha) {
    mensagem.textContent = "✅ Login bem-sucedido! Redirecionando...";

    // Aguarda 1 segundo antes de redirecionar
    setTimeout(() => {
      window.location.href = "home.html"; 
    }, 1000);

  } else {
    mensagem.textContent = "❌ Usuário ou senha incorretos.";
    mensagem.style.color = "red";
  }
}

// Adiciona o evento ao botão quando a página estiver carregada
window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('botaoEntrar').addEventListener('click', efetuarLogin);
});
