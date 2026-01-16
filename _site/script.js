document.addEventListener('DOMContentLoaded', () => {

    // Swiper Hero Slider
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Responsive Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Fade-in sections on scroll
    const fadeInSections = document.querySelectorAll('.fade-in');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -100px 0px' });

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Active link highlighting
    const sections = document.querySelectorAll('main section');
    const navA = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 75) { // 75 is header height
                current = section.getAttribute('id');
            }
        });

        navA.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // App download button alert
    const downloadBtn = document.getElementById('download-btn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('A aplicação Kêkua Travel está em desenvolvimento e estará disponível em breve!');
        });
    }
});

// Keyframes for nav links are not needed here, they should be in the CSS.
// But if we were to add them with JS (not recommended):
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}`;
document.head.appendChild(styleSheet);
