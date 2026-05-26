// ==================== DARK MODE ====================
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

// Verificar si hay preferencia guardada
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeBtn.textContent = '☀️';
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isNowDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isNowDarkMode);
    darkModeBtn.textContent = isNowDarkMode ? '☀️' : '🌙';
});

// ==================== MENU MOBILE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== FILTRO DE MENÚ ====================
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        menuCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'slideUp 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==================== FORMULARIO DE CONTACTO ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Validar que los campos no estén vacíos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor completa todos los campos');
        return;
    }

    // Simular envío de formulario
    console.log('Formulario enviado:', { name, email, message });
    
    // Mostrar mensaje de éxito
    alert(`¡Gracias ${name}! Tu mensaje ha sido recibido. Te contactaremos pronto en ${email}`);
    
    // Limpiar formulario
    contactForm.reset();
});

// ==================== ANIMACIONES SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.5s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos al cargar
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .menu-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ==================== EFECTO SCROLL EN NAVBAR ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== ANIMACIÓN HOVER EN BOTONES ====================
const buttons = document.querySelectorAll('.cta-button, .filter-btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

console.log('✅ Script de Cafegerua cargado correctamente');