function openModal(element) {
    const modal = document.getElementById('modal');
    const title = element.querySelector('h3').innerText; // Obtém o título do quadro
    const description = element.querySelector('.descricao').innerHTML; // Obtém a descrição

    // Define o conteúdo da modal
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerHTML = description;

    modal.style.display = 'block'; // Exibe a modal
}

// Fecha a modal quando o botão de fechar é clicado
document.getElementById('fechar').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Fecha a modal quando o usuário clica fora da área de conteúdo da modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
