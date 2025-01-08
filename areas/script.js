// script.js
function abrirModal(titulo, descricao, imagem) {
  document.getElementById('modal-title').textContent = titulo;
  document.getElementById('modal-text').textContent = descricao;
  document.getElementById('modal-image').src = imagem;
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

window.addEventListener('scroll', function () {
  const header = document.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
      header.classList.add('reduzido');
      logo.src = '../images/NovaImagem.png'; // Substitua pela nova imagem
  } else {
      header.classList.remove('reduzido');
      logo.src = '../images/Logo 1000x1000.png'; // Volta para a imagem original
  }
});
