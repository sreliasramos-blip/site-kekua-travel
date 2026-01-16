document.addEventListener('DOMContentLoaded', () => {

    // --- Swiper Hero Slider ---
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // --- Language Selector --- 
    const langSelector = document.querySelector('.language-selector');
    const langDropdown = document.querySelector('.language-dropdown');

    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    document.addEventListener('click', () => {
        if (langDropdown) langDropdown.style.display = 'none';
    });

    // --- Search Bar ---
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchInput.focus();
        });
    }

    // --- Responsive Navigation (Burger Menu) ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    const sectionsToAnimate = document.querySelectorAll('.fade-in');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
    
    // --- App download button alert ---
    const downloadBtn = document.getElementById('download-btn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('A aplicação Kêkua Travel está em desenvolvimento e estará disponível em breve!');
        });
    }
});
