// cambio icono menu
let menuIcono = document.querySelector('#menu-icono');
let menu = document.querySelector('.menu');

menuIcono.onclick = () => {
    menuIcono.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

// scroll secciones
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // cabecera sticky
    let cabecera = document.querySelector('.cabecera');
    
    cabecera.classList.toggle('sticky', window.scrollY > 90);

    // quitar cambio de icono y menu cuando haces click en este links (scroll)
    menuIcono.classList.remove('bx-x');
    menu.classList.remove('active');

}