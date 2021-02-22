// select items for toggle button
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// adding toggle mathod to show the links in small screen
navToggle.addEventListener('click', function(){
    navLinks.classList.toggle('show-links');
})