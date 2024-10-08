/// Seleccionamos el ícono del menú y la lista de navegación
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const icon = document.getElementById('icon');

// Añadimos un evento de clic al ícono del menú
menuIcon.addEventListener('click', function () {
    // Alternar la visibilidad del menú
    navList.classList.toggle('show-nav');
    
    // Cambiar el ícono de hamburguesa a "X" y viceversa
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});





let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

// Inicialmente mostrar la primera imagen
images[currentIndex].classList.add('active');

// Función para cambiar la imagen cada 10 minutos (600,000 ms)
function changeImage() {
    // Quitar la clase 'active' de la imagen actual
    images[currentIndex].classList.remove('active');
    
    // Incrementar el índice
    currentIndex = (currentIndex + 1) % totalImages;
    
    // Agregar la clase 'active' a la siguiente imagen
    images[currentIndex].classList.add('active');
}

// Cambiar la imagen cada 10 minutos
setInterval(changeImage, 300000); // 10 minutos en milisegundos.... ahora esta cada5 minutos




//------------------------------------



