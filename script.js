// Rolagem suave do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Animação simples ao aparecer
const items = document.querySelectorAll(".card, .atividade, .galeria-grid img");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

items.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    observer.observe(el);
});
