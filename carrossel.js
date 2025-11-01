// carrossel.js

// Índices independentes para cada carrossel
let slideIndex = {
    livros: 0,
    sugestoes: 0,
    noticias: 0
};

// Função para mover slides
function moveSlide(direction, tipo) {
    const carrossel = document.getElementById(`carrossel${capitalize(tipo)}`);
    if (!carrossel) return;

    const items = carrossel.querySelectorAll(".carousel-item");
    const indicators = carrossel.querySelectorAll(".carousel-indicators button");

    // Atualiza o índice
    slideIndex[tipo] += direction;

    // Loop infinito
    if (slideIndex[tipo] >= items.length) slideIndex[tipo] = 0;
    if (slideIndex[tipo] < 0) slideIndex[tipo] = items.length - 1;

    // Atualiza os slides e indicadores
    items.forEach((item, i) => {
        item.classList.toggle("active", i === slideIndex[tipo]);
    });
    indicators.forEach((ind, i) => {
        ind.classList.toggle("active", i === slideIndex[tipo]);
    });
}

// Função para capitalizar primeira letra (para buscar ID correto)
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
