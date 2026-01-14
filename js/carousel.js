document.addEventListener("DOMContentLoaded", function() {
const cartes = document.querySelector('.cartes');
const carte = document.querySelectorAll('.temoin');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function showSlide(n) {
    index = n;
    if (index >= carte.length) index = 0;
    if (index < 0) index = carte.length - 1;
    cartes.style.transform = `translateX(${-index * 34}%)`;
}
nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));
// Défilement automatique toutes les 5 secondes
// setInterval(() => showSlide(index + 1), 5000);

});