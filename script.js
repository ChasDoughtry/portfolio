//toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*
//scroll sections 1:11 in vid
Lat sections = document.querySelectorAll('section')
window.onscroll = () => {
    // sticky header
    Let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}*/