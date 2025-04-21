document.addEventListener('DOMContentLoaded', function() {
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
}
});
});
});
document.addEventListener('DOMContentLoaded', function() {
// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
if (window.scrollY > 50) {
header.classList.add('shadow-md');
} else {
header.classList.remove('shadow-md');
}
});
});
