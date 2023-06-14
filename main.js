const menuNav = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuNav.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
     desktopMenu.classList.toggle('inactive');
     console.log('click')
}

// objeto classList, que permite añadir, eliminar, alternar y consultar clases CSS cómodamente: En donde va a indicar que si esta inactivo si active y viceversa 