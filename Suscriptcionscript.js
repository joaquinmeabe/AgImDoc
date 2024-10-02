// Añadir funcionalidad para abrir ventanas flotantes con más información
document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', () => {
        // Aquí puedes programar la ventana flotante con más detalles de la imagen
        alert('Mostrando más detalles de la imagen...');
    });
});
