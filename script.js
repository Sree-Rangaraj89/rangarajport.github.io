// Typing animation for the hero section
const phrases = [
    "Future JEE Aspirant 🚀",
    "Passionate Web Developer 💻",
    "Python + Java Coder 🐍☕",
    "Maths & Physics Lover 📐⚛️",
    "App Creator",
    "Science Explorer 🔬"
];
let part = '';
let i = 0;
let j = 0;
let currentPhrase = '';
let isDeleting = false;
const speed = 100;

function type() {
    currentPhrase = phrases[i];
    if (isDeleting) {
        part = currentPhrase.substring(0, j--);
    } else {
        part = currentPhrase.substring(0, j++);
    }
    document.getElementById("typedText").textContent = part;
    if (!isDeleting && part === currentPhrase) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && part === '') {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, speed);
    }
}

// Start typing animation
window.addEventListener('DOMContentLoaded', type);

// Popup functionality
function showPopup() {
    document.getElementById('popupCard').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popupCard').style.display = 'none';
}

// Toggle music
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe animated elements once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Simple validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields');
                return;
            }

            // Create and send email with user's message
            const mailtoLink = `mailto:sreerangaraj1@example.com?subject=Message from ${nameInput.value}&body=${messageInput.value}%0A%0AFrom: ${nameInput.value}%0AEmail: ${emailInput.value}`;
            window.location.href = mailtoLink;

            // Show thank you message
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        });
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
if (
    'serviceWorker' in navigator &&
    location.protocol === 'https:' && // only allow secure contexts
    location.hostname !== '127.0.0.1' &&
    location.hostname !== 'localhost'
) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('SW registered', reg))
        .catch(err => console.error('SW failed', err));
}
