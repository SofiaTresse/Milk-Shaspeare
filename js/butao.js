document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closebutton');
    const navbarNav = document.getElementById('menu'); // Agora, navbarNav é o menu hamburguer

    // Função para alternar o menu (opcional, se você tiver um botão para abrir o menu)
    function toggleMenu() {
        navbarNav.classList.toggle('active'); // Use 'active' para mostrar/ocultar o menu
    }

    // Evento de clique no botão de fechar
    closeButton.addEventListener('click', () => {
        navbarNav.classList.remove('active'); // Remove a classe 'active' ao fechar
    });

    // Se você tiver um botão para abrir o menu, adicione este código (opcional)
    const menuButton = document.getElementById('menu-hamburguer'); // Supondo que você tenha um botão com esse ID
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu); // Alterna o menu quando o botão é clicado
    }
});
