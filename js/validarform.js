document.addEventListener('DOMContentLoaded', function() {
    // Função para enviar dados do formulário para Formspree
    
    function enviarFormulario(form, formspreeURL) {
    
    const formData = new FormData(form); // Passar o formulário
        const data = {};

        // Converte os dados do FormData para um objeto
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envia os dados via fetch
        fetch(formspreeURL, {
            method: 'POST',
            body: JSON.stringify(data), // Transforma os dados em JSON
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' // Define o Content-Type como application/json
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                form.reset(); // Reseta o formulário após o sucesso
            } else {
                alert('Erro ao enviar a mensagem. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
    }

    // Verifica se o formulário de contato está na página
    const formorca = document.getElementById('formorca');
    if (formorca) {
        const formspreeURLContato = 'https://formspree.io/f/xqakpvyk'; // URL para o Formspree de contato

        formorca.addEventListener('submit', function(event) {
            event.preventDefault();
            enviarFormulario(formorca, formspreeURLContato);
        });
    }
        // Verifica se o formulário de contato está na página
        const formcon = document.getElementById('formcon');
        if (formcon) {
            const formspreeURLContato = 'https://formspree.io/f/xzzbelwz'; // URL para o Formspree de contato
    
            formcon.addEventListener('submit', function(event) {
                event.preventDefault();
                enviarFormulario(formorca, formspreeURLContato);
            });
        }
});
