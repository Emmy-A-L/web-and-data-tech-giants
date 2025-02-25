// Testimonials Carousel
const carousel = document.querySelector('.testimonial-carousel');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carousel.children.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Project Filtering
const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.display = filter === 'all' || card.getAttribute('data-category') === filter ? 'block' : 'none';
        });
    });
});
