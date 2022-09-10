const nav = document.querySelector('nav ul');
const menuIcon = document.querySelector('.open-menu');
const closeIcon = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    nav.classList.add('active');
    closeIcon.classList.add('active');
    menuIcon.classList.add('active')
});

closeIcon.addEventListener('click', () => {
    nav.classList.remove('active');
    closeIcon.classList.remove('active');
    menuIcon.classList.remove('active')
});



// Scroll Nav

const navScroll = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 60) {
        navScroll.classList.add('active');
    } else {
        navScroll.classList.remove('active');
    };
});