// Seleccionamos el ícono del menú y la lista de navegación
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Función para alternar la visibilidad del menú
menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});
