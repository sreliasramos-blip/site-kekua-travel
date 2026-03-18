document.addEventListener('DOMContentLoaded', () => {

    // --- Base de Dados do Blog e Páginas ---
    const knowledgeBase = [
        {
            title: 'Vinho de Palma de São Tomé e Príncipe (Novo)',
            link: 'blog-vinho-palma.html',
            tags: ['vinho', 'vinho de palma', 'palmeira demdem', 'vinhodesaotome', 'bebida tradicional', 'seiva', 'fermentacao', 'bebidas', 'palmeira', 'demdem']
        },
        {
            title: 'Gastronomia de São Tomé e Príncipe',
            link: 'blog-gastronomia.html',
            tags: ['gastronomia', 'comida', 'comer', 'pratos', 'calulu', 'peixe', 'marisco', 'cacau', 'chocolate', 'frutas', 'vinho da parma', 'cafe', 'sabores', 'receitas', 'tradicional']
        },
        {
            title: 'Biodiversidade de São Tomé e Príncipe',
            link: 'blog-biodiversidade.html',
            tags: ['biodiversidade', 'natureza', 'ecoturismo', 'vida selvagem', 'obo', 'parque natural', 'aves', 'endemicas', 'fauna', 'flora', 'conservacao', 'sustentabilidade', 'meio ambiente', 'marinha', 'tartarugas', 'baleias', 'golfinhos']
        },
        {
            title: 'O Centro do Mundo e o Estilo de Vida Leve-Leve',
            link: 'blog-stp-imersao.html',
            tags: ['imersao', 'antropologia', 'centro do mundo', 'equador', 'greenwich', 'geografia', 'cao grande', 'chocolate', 'cacau', 'cafe', 'leve-leve', 'experiencia', 'cultura', 'calulu']
        },
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
    const closeMenu = document.querySelector('.close-menu');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.add('nav-active');
        });
    }

    if (closeMenu && navLinks) {
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

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
            e.preventDefault(); 
            alert('Obrigado por descarregar a nossa app! (simulação)');
        });
    }

    // --- Cookie Banner Logic ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookies = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookies) {
        if (localStorage.getItem('cookiesAccepted')) {
            cookieBanner.style.display = 'none';
        }

        acceptCookies.addEventListener('click', () => {
            cookieBanner.style.opacity = '0';
            cookieBanner.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                cookieBanner.style.display = 'none';
                localStorage.setItem('cookiesAccepted', 'true');
            }, 500);
        });
    }

    // --- Chat Logic ---
    const chatButton = document.querySelector('.chat-button');
    const chatWindow = document.getElementById('chat-window');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendChat = document.getElementById('send-chat');
    const faqButtonsContainer = document.getElementById('faq-buttons');
    const closeChat = document.getElementById('close-chat');

    // Behavior for Floating Button: Redirect to dedicated page
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            window.location.href = 'ia-chat.html';
        });
    }

    // Setup Chat behavior if elements exist (Dedicated Page)
    if (chatWindow && chatBody && chatInput && sendChat && faqButtonsContainer) {
        
        if (closeChat) {
            closeChat.addEventListener('click', () => {
                chatWindow.classList.remove('open');
            });
        }

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
            
            // --- Brincadeira: TK pra São Tomé ---
            if (normalizedUserMessage.includes("tk pra sao tome")) {
                const jokeResponse = "Vou a São Tomé e Príncipe beber o Vinho de Palma, só espero que não fiquem à espera de respostas rápidas depois disso 😂. Vem comigo no ritmo de Leve-Leve de São Tomé e Príncipe! 🇸🇹🍹✨";
                
                const imageHTML = `<img src="images/tk.ai.jpg" alt="TK-AI" style="width: 100%; max-width: 200px; border-radius: 10px; margin-bottom: 15px; display: block; border: 3px solid var(--accent-color); box-shadow: 0 4px 10px rgba(0,0,0,0.1);">`;
                
                addMessageToChat('bot', null, imageHTML + `<p>${jokeResponse}</p>`);
                return;
            }

            // --- Ativação pelo nome "TK" ---
            if (normalizedUserMessage === "tk" || normalizedUserMessage.split(/\s+/).includes("tk")) {
                const tkResponse = "Eis-me aqui! Estás com energia hoje? ✨ Preparei uma seleção especial de blogs para explorares o melhor de São Tomé e Príncipe. Dá uma vista de olhos nestas sugestões! 🇸🇹🏝️";
                
                let recommendationsHTML = `<p>${tkResponse}</p><br>`;
                // Recomenda 3 blogs específicos
                const recommendedIndices = [1, 2, 3]; // Gastronomia, Biodiversidade, Centro do Mundo
                recommendedIndices.forEach(index => {
                    const item = knowledgeBase[index];
                    recommendationsHTML += `<strong>${item.title}</strong><a href="${item.link}" class="response-button">Ler Artigo</a>`;
                });

                addMessageToChat('bot', null, recommendationsHTML);
                return;
            }

            // --- Saudações ---
            const greetings = ['ola', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'hello', 'hi', 'tudo bem'];
            const isGreeting = greetings.some(greet => normalizedUserMessage === greet || normalizedUserMessage.startsWith(greet + " "));
            
            if (isGreeting) {
                addMessageToChat('bot', "Olá! É um prazer falar contigo. 😊 Em que posso ajudar na tua viagem a São Tomé e Príncipe? Podes perguntar sobre as praias, a comida local ou até sobre o nosso Cartão Viajante!");
                return;
            }

            // --- Busca na Base de Conhecimento ---
            let foundItems = [];
            knowledgeBase.forEach(item => {
                const hasMatch = item.tags.some(tag => {
                    const normalizedTag = normalizeText(tag);
                    return normalizedUserMessage.includes(normalizedTag);
                });

                if (hasMatch) {
                    foundItems.push(item);
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

            // --- Resposta Padrão ---
            let response = {
                text: 'Não encontrei uma resposta exata para isso... Mas sou um robô em aprendizagem! Que tal explorares os tópicos sugeridos nos botões abaixo ou preencheres o nosso formulário?',
                button: { text: 'Ir para Formulário', link: 'index.html#contactos' }
            };

            let botMessageHTML = response.text;
            if (response.button) {
                botMessageHTML += `<a href="${response.button.link}" class="response-button">${response.button.text}</a>`;
            }
            addMessageToChat('bot', null, botMessageHTML);
        }
    }
});
