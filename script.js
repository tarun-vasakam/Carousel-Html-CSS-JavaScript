const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let currentIndex = 0;
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
