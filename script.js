// Exemplo de uma interação simples (um efeito de transição de cor no hover)
document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('mouseenter', function () {
        item.style.color = "#ff4c4c";
    });
    item.addEventListener('mouseleave', function () {
        item.style.color = "white";
    });
});
