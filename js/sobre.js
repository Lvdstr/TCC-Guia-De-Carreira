// Seleciona o elemento do botão hambúrguer
const hamburger = document.querySelector(".hamburger"); 

// Seleciona o elemento da barra de navegação
const nav = document.querySelector(".nav"); 

// Adiciona um evento de clique ao hambúrguer para abrir/fechar o menu
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // Alterna a classe 'active' para abrir/fechar
});

