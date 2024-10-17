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


 // Array con las rutas de las imágenes
 const images = [
    './fotosAltaCarrusel/0_a_carousel_portadas.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_1.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_2.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_3.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_4.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_5.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_6.jpg',
    './fotosAltaCarrusel/0_a_carousel_portadas_7.jpg',

];

// Seleccionamos la imagen del DOM
const randomImageElement = document.getElementById('random-image');

// Función para mostrar una imagen aleatoria
function showRandomImage() {
    // Seleccionamos una imagen al azar
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Cambiamos el src de la imagen
    randomImageElement.src = randomImage;
}

// Llamamos a la función cuando cargue la página
window.onload = showRandomImage;


 //-----------------------------------


 // Seleccionar elementos
const header = document.getElementById('main-header');
const heroSearchBar = document.getElementById('hero-search-bar');
const headerSearchBar = document.createElement('div');

// Configurar la barra de búsqueda en el header
headerSearchBar.classList.add('search-bar');
headerSearchBar.id = 'fixed-search-bar';
headerSearchBar.innerHTML = heroSearchBar.innerHTML;

// Evento de scroll
window.onscroll = function() {
    const heroPosition = heroSearchBar.getBoundingClientRect().top;

    if (heroPosition <= 0) {
        // Mover la barra de búsqueda al header cuando hacemos scroll hacia abajo
        if (!document.getElementById('fixed-search-bar')) {
            header.appendChild(headerSearchBar);
            heroSearchBar.classList.add('hide-search-bar');
        }
    } else {
        // Volver la barra de búsqueda al hero cuando volvemos arriba
        if (document.getElementById('fixed-search-bar')) {
            header.removeChild(headerSearchBar);
            heroSearchBar.classList.remove('hide-search-bar');
        }
    }
};







