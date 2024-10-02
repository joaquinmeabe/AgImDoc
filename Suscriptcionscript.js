const form = document.getElementById('subscribeForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Valida el formulario
    const inputs = form.querySelectorAll('input, select');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
        }
    });

    if (allValid) {
        // Si todo está correcto, muestra el mensaje flotante
        successMessage.classList.remove('hidden');

        // Ocultar el mensaje después de unos segundos
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 50000);

        // Aquí podrías agregar la lógica para enviar los datos al servidor

        form.reset(); // Resetea el formulario
    }
});
