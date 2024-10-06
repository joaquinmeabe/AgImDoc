const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');
const gridItems = document.querySelectorAll('.grid-item');

// Evento para abrir el modal
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.dataset.title;
        const info = item.dataset.info;
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = info;
        modal.style.display = 'flex';
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
