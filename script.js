// Carrosel Galeria
let currentSlide = 0;
const slides = document.querySelectorAll('.galeria-item');
const totalSlides = slides.length;

// Criar dots para navegação
function initCarrosel() {
    const dotsContainer = document.getElementById('carroselDots');
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
    
    updateSlides();
}

// Mover para o slide anterior ou próximo
function moveSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    updateSlides();
}

// Ir para um slide específico
function goToSlide(n) {
    currentSlide = n;
    updateSlides();
}

// Atualizar display dos slides
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Atualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

// Auto-play do carrosel (opcional)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 5000); // Mudar a cada 5 segundos
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Event listeners para pausar auto-play ao interagir
document.addEventListener('DOMContentLoaded', () => {
    initCarrosel();
    startAutoPlay();
    
    const galeriaWrapper = document.querySelector('.galeria-wrapper');
    if (galeriaWrapper) {
        galeriaWrapper.addEventListener('mouseenter', stopAutoPlay);
        galeriaWrapper.addEventListener('mouseleave', startAutoPlay);
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
