// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efeito de fade-in ou slide quando elementos entram na tela (usando IntersectionObserver)
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// Seleciona as seções ou cards que devem revelar com animação
const revealElements = document.querySelectorAll(
  '.sobre-img, .curso-card, .docente-card, .noticia-card, .galeria-grid img'
);

revealElements.forEach(el => {
  el.classList.add('reveal-hidden');
  observer.observe(el);
});
