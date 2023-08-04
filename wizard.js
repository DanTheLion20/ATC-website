document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const navbar = header.querySelector('.navbar');

    if (window.scrollY > 100) {
        navbar.classList.add('navbar-dark');
    } else {
        navbar.classList.remove('navbar-dark');
    }
});