document.addEventListener('DOMContentLoaded', () => {

    // --- Base de Dados do Blog e Páginas ---
    const knowledgeBase = [
        {
            title: 'As Nossas Experiências Autênticas',
            link: 'blog-experiencias.html',
            tags: ['experiências', 'tipos', 'imersao', 'etnobotanico', 'trilhos', 'roteiros', 'sustentavel', 'turismo']
        },
        {
            title: 'Cultura e Tradição Santomense',
            link: 'blog-cultura.html',
            tags: ['cultura', 'viagem', 'tradição', 'gastronomia', 'sãotomé']
        },
        {
            title: 'Viajar com Consciência: O Nosso Compromisso',
            link: 'blog-sustentabilidade.html',
            tags: ['sustentabilidade', 'responsabilidade', 'responsabilidadesocial', 'preservacaodanatureza', 'turismo']
        },
        {
            title: 'Conheça o Cartão de Viajante',
            link: 'cartao-viajante.html',
            tags: ['cartao', 'cartaokekua', 'cartaokekuatravel', 'cartaodeviajante', 'aderir']
        },
        {
            title: 'Descarregue a Nossa App',
            link: 'index.html#app-download',
            tags: ['reserva', 'reservas', 'descaregarapp', 'app', 'aplicativo', 'aplicacao', 'dispositivoparatelemovel', 'dispositivoparacelular', 'aplicacaodakekuatravel', 'comousarkekutravelnocelular']
        },
        {
            title: 'Política de Privacidade',
            link: 'politica-de-privacidade.html',
            tags: ['privacidade', 'dados', 'cookies', 'seguranca', 'direitos', 'segurancadedados', 'protecaodedados', 'comoosnossosdadossaoprotegidos']
        },
        {
            title: 'Subscreva a Nossa Newsletter',
            link: 'newsletter.html',
            tags: ['newsletter', 'subscrever', 'novidades', 'ofertas']
        }
    ];

    // --- Swiper Hero Slider ---
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.hero-slider', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }

    // --- Language Selector --- 
    const langSelector = document.querySelector('.language-selector');
    const langDropdown = document.querySelector('.language-dropdown');

    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            if (langDropdown) {
                langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    document.addEventListener('click', () => {
        if (langDropdown) langDropdown.style.display = 'none';
    });

    // --- Search Bar ---
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.focus();
        });
    }

    // --- Responsive Navigation (Burger Menu) ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
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
        threshold: 0.1
    });

    const sectionsToAnimate = document.querySelectorAll('.fade-in');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
    
    // --- App download button ---
    const downloadBtn = document.getElementById('download-btn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            // Futuramente, pode adicionar aqui o link real da app
            alert('Obrigado por descarregar a nossa app! (simulação)');
        });
    }

    // --- Chat ---
    const chatButton = document.querySelector('.chat-button');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const faqButtonsContainer = document.getElementById('faq-buttons');

    if (chatButton && chatWindow && closeChat && chatBody && chatInput && sendChat && faqButtonsContainer) {
        chatButton.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
        });

        closeChat.addEventListener('click', () => {
            chatWindow.classList.remove('open');
        });

        sendChat.addEventListener('click', () => handleSendMessage());
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });

        faqButtonsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('faq-button')) {
                const question = e.target.dataset.question;
                handleSendMessage(question);
            }
        });

        function handleSendMessage(predefinedQuestion = null) {
            const messageText = predefinedQuestion || chatInput.value.trim();
            if (messageText === '') return;

            addMessageToChat('user', messageText);
            if (!predefinedQuestion) {
                chatInput.value = '';
            }

            setTimeout(() => {
                getBotResponse(messageText);
            }, 1000);
        }

        function addMessageToChat(sender, text, htmlContent = null) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', sender);
            if (htmlContent) {
                messageElement.innerHTML = htmlContent;
            } else {
                messageElement.textContent = text;
            }
            chatBody.appendChild(messageElement);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function normalizeText(text) {
            return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        function getBotResponse(userMessage) {
            const normalizedUserMessage = normalizeText(userMessage);
            const userKeywords = normalizedUserMessage.split(/\s+/);
            let foundItems = [];

            // Pesquisa na base de conhecimento
            knowledgeBase.forEach(item => {
                const matchedTags = item.tags.filter(tag => userKeywords.includes(normalizeText(tag)));
                if (matchedTags.length > 0) {
                    if (!foundItems.some(found => found.link === item.link)) {
                        foundItems.push(item);
                    }
                }
            });

            if (foundItems.length > 0) {
                let botMessageHTML = 'Encontrei isto que pode ser do seu interesse:<br><br>';
                foundItems.forEach(item => {
                    botMessageHTML += `<strong>${item.title}</strong><a href="${item.link}" class="response-button">Saber Mais</a>`;
                });
                addMessageToChat('bot', null, botMessageHTML);
                return;
            }

            // Resposta por defeito
            let response = {
                text: 'Não encontrei uma resposta para a sua pergunta. Se quiser, pode preencher o nosso formulário de contacto e a nossa equipa responderá assim que possível.',
                button: { text: 'Aceder ao Formulário', link: 'index.html#contactos' }
            };

            let botMessageHTML = response.text;
            if (response.button) {
                botMessageHTML += `<a href="${response.button.link}" class="response-button">${response.button.text}</a>`;
            }
            addMessageToChat('bot', null, botMessageHTML);
        }
    }
});
