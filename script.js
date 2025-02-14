let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});