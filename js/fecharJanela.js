const elementos = document.querySelectorAll('.eleVoltar');

// Adiciona um evento de clique a cada elemento
elementos.forEach(elemento => {
  elemento.addEventListener('click', () => {
    // Seleciona o botão com o id setaVoltar
    const botao = document.getElementById('setaVoltar');
    // Dispara um clique no botão
    botao.click();
  });
});
document.addEventListener('scroll', function () {
  const section = document.querySelector('.section');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const height = window.innerHeight;

  // Calcule a opacidade com base na rolagem
  let opacity = 1 - (scrollTop / (height * 2));

  if (opacity <= 0.3) {
    opacity = 0.3;
  }

  if (scrollTop > height) {
    opacity = 0.3;
  }

  if (scrollTop <= 0) {
    opacity = 0.3;
  }

  section.style.background = `linear-gradient(to bottom, rgba(0, 0, 255, ${opacity}), blue, rgba(0, 0, 255, ${opacity}))`;
});

//bloqueio de botão direito
window.oncontextmenu = function() {
  return false;
}
// Define a posição de rolagem para o topo quando a página é carregada
window.onbeforeunload = function() {
  window.scrollTo(0, 0);}
  
  document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector("img");
    img.addEventListener("dragstart", function(event) {
        event.preventDefault();
    });
});