document.addEventListener('DOMContentLoaded', () => {

    // --- Swiper Hero Slider ---
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

    // --- Language Selector --- 
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');
    const chevronDown = document.querySelector('.current-language .fa-chevron-down');

    if (languageSelector) {
        languageSelector.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que o evento de clique no documento feche o menu imediatamente
            languageDropdown.classList.toggle('show');
            chevronDown.style.transform = languageDropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    // Clicar fora do menu fecha-o
    document.addEventListener('click', (e) => {
        if (languageDropdown && languageDropdown.classList.contains('show')) {
            languageDropdown.classList.remove('show');
            chevronDown.style.transform = 'rotate(0deg)';
        }
    });

    // --- Responsive Navigation (Burger Menu) ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            // Adiciona a lógica para mostrar/esconder o menu de navegação em mobile
            // (Esta parte pode ser mais elaborada com animações)
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.alignItems = 'center';
                navLinks.style.padding = '2rem 0';
            }
            burger.classList.toggle('toggle'); // Para animar o ícone do burger
        });
    }

    // --- App download button alert ---
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('A aplicação Kêkua Travel está em desenvolvimento e estará disponível em breve!');
        });
    }

});

// Keyframes para a animação do burger (adicionado aqui para garantir que o CSS está completo)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.burger.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}
.burger.toggle .line2 {
    opacity: 0;
}
.burger.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}`;
document.head.appendChild(styleSheet); 
