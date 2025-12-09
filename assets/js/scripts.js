function show(el) {
    el.classList.add('visible')
    el.classList.remove('hidden')
}

function hide(el) {
    el.classList.add('hidden')
    el.classList.remove('visible')
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = Math.floor(Math.random() * slides.length);
// let currentIndex = 0;

function setMainBackground(color) {
    document.body.style.backgroundColor = color;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            show(slide);
            // setMainBackground(slide.dataset.color);
        } else {
            hide(slide);
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initialize slider
showSlide(currentIndex);

// Go to next slide when clicking on the slider
slider.addEventListener('click', nextSlide);

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});