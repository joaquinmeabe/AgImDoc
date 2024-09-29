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
