const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const messageInput = document.querySelector('textarea');
  const emailInput = document.querySelector('input[type="email"]');

  if (messageInput.value.trim() === '' || emailInput.value.trim() === '') {
    // If either message or email is empty, show an error message
    alert('Por favor, preencha o campo de mensagem e insira um email válido.');
  } else {
    // If both fields are filled, proceed with the form submission
    form.submit();
  }
});