document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".header h1", { opacity: 0, y: -20, duration: 1, delay: 0.3, opacity: 1 });
    gsap.from(".header .subtitle", { opacity: 0, y: -10, duration: 1, delay: 0.5, opacity: 1 });

    gsap.utils.toArray(".about-us .card").forEach((card, index) => {
        gsap.from(card, { opacity: 0, y: 30, duration: 0.8, delay: 0.2 * index, scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    });

    gsap.from(".genaitor-section h2", { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".genaitor-section img", { opacity: 0, y: 30, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".genaitor-section .product-description", { opacity: 0, y: 30, duration: 0.8, delay: 0.4, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".genaitor-section .button-container", { opacity: 0, y: 30, duration: 0.8, delay: 0.6, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".genaitor-section .contact-prompt", { opacity: 0, y: 30, duration: 0.8, delay: 0.8, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".genaitor-section .contact-email", { opacity: 0, y: 30, duration: 0.8, delay: 1.0, scrollTrigger: { trigger: ".genaitor-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });

    gsap.from(".pinneapple-section h2", { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: ".pinneapple-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".pinneapple-section img", { opacity: 0, y: 30, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".pinneapple-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".pinneapple-section .product-description", { opacity: 0, y: 30, duration: 0.8, delay: 0.4, scrollTrigger: { trigger: ".pinneapple-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });

    gsap.from(".partners-section h2", { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: ".partners-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.from(".partners-section .partners-list", { opacity: 0, y: 30, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: ".partners-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });

    gsap.from(".contact-section h2", { opacity: 0, y: 30, duration: 0.8, scrollTrigger: { trigger: ".contact-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    gsap.utils.toArray(".contact-section .contact-info").forEach((info, index) => {
        gsap.from(info, { opacity: 0, y: 30, duration: 0.8, delay: 0.2 * index, scrollTrigger: { trigger: ".contact-section", start: "top 80%", toggleActions: "restart none none none" }, opacity: 1 });
    });

    gsap.from(".footer", { opacity: 0, y: 20, duration: 1, scrollTrigger: { trigger: ".footer", start: "top 90%" }, opacity: 1 });

    // Modal functionality (assuming you might add interactive images later)
    const images = document.querySelectorAll('.product-logo, .partner-item img'); // Select relevant images
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = img.src;
            modalImage.alt = img.alt; // Set alt text for accessibility
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

