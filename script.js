document.addEventListener('DOMContentLoaded', () => {
    // Main Slideshow
    let slides = document.querySelectorAll('.slideshow-container .slide');
    let currentSlide = 0;

    function showSlide(index) {
        if (!slides.length) {
            console.warn('No slides found in .slideshow-container');
            return;
        }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length) {
        showSlide(currentSlide); // Initialize first slide
        setInterval(nextSlide, 3000); // 3-second interval
    }

    // Small Slideshow
    let smallSlides = document.querySelectorAll('.small-slideshow .slide');
    let smallIndex = 0;

    function showSmallSlide(index) {
        if (!smallSlides.length) {
            console.warn('No slides found in .small-slideshow');
            return;
        }
        smallSlides.forEach(slide => slide.classList.remove('active'));
        smallSlides[index].classList.add('active');
    }

    function nextSmallSlide() {
        smallIndex = (smallIndex + 1) % smallSlides.length;
        showSmallSlide(smallIndex);
    }

    if (smallSlides.length) {
        showSmallSlide(smallIndex); // Initialize first slide
        setInterval(nextSmallSlide, 3000); // Sync with main slideshow at 3 seconds
    }
});