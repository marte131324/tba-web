/* 
   ============================================================
   TBA WEB ELITE – CORE LOGIC
   Vanilla, High-Performance Nav & Scroll Triggering
   ============================================================
*/

document.addEventListener("DOMContentLoaded", () => {
    
    // ------------------------------------
    // NATIVE INTERSECTION OBSERVER FOR REVEALS
    // ------------------------------------
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // ------------------------------------
    // NAVBAR SCROLL & BLUR EVENT
    // ------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true }); 

    // ------------------------------------
    // MOBILE NAV CONTROLS
    // ------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.m-link, .mobile-footer a');

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });

        const closeMobileNav = () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; 
        };

        closeBtn.addEventListener('click', closeMobileNav);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }

});
