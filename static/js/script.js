document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Welcome to our Christian community! Explore our faith and get involved.');
});

// script.js
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'block' : 'none';
}
