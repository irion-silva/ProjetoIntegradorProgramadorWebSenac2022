// Adicionando evento para salvar informações no LocalStorage ao clicar no botão
const btnEnviar = document.getElementById('btn-enviar')
btnEnviar.addEventListener('click', function (ev) {
  ev.preventDefault;
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const assunto = document.getElementById('assunto');
  const mensagem = document.getElementById('exampleFormControlTextarea1');
  localStorage.setItem('nome', nome.value);
  nome.value = '';
  localStorage.setItem('email', email.value);
  email.value = '';
  localStorage.setItem('telefone', telefone.value);
  telefone.value = '';
  localStorage.setItem('assunto', assunto.value);
  assunto.value = '';
  localStorage.setItem('mensagem', mensagem.value);
  mensagem.value = '';
  alert("Mensagem recebida");
})

// Essa função redireciona para um link externo.
function redirecionarInscrever() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSekFAbBCVSkJPaWMqR6VT6UB8nzicdViAWJp78dpRytmJI7wg/viewform',
    '_blank' 
  );
}