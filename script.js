// Função para mostrar uma seção e esconder as outras
function showSection(sectionId) {
    // Esconder todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar a seção selecionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

// Ao carregar a página, exibir a seção Home por padrão
window.onload = function() {
    showSection('home');
};