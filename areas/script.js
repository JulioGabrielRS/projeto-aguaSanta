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
