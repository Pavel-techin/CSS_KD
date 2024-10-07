const nav_button = document.getElementById('nav-button');
const nav_content_small = document.getElementById('nav-content-small');

const showNav = (e) => {
    e.preventDefault();
    nav_content_small.classList.toggle('nav-hamburger-closed-content');
}

nav_button.addEventListener('click', showNav);