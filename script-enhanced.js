// R2M Brands - Enhanced JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. PRELOADER
    // ========================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000);
    });
    
    
    // ========================================
    // 2. INITIALIZE AOS (ANIMATE ON SCROLL)
    // ========================================
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
    
    
    // ========================================
    // 3. MOBILE MENU
    // ========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
    
    
    // ========================================
    // 4. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    
    // ========================================
    // 5. COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        const updateCount = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.innerText === '0') {
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    
    // ========================================
    // 6. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ========================================
    // 7. BACK TO TOP BUTTON
    // ========================================
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    
    // ========================================
    // 8. CONTACT FORM HANDLING
    // ========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    
    // ========================================
    // 9. NOTIFICATION SYSTEM
    // ========================================
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-8 z-50 px-6 py-4 rounded-2xl shadow-2xl transform translate-x-0 transition-all duration-500 ${
            type === 'success' ? 'bg-teal-600 text-white' : 'bg-red-600 text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} text-xl"></i>
                <span class="font-semibold">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
    
    
    // ========================================
    // 10. ACTIVE NAVIGATION HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNav() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-teal-600');
                    link.classList.add('text-gray-700');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.remove('text-gray-700');
                        link.classList.add('text-teal-600');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    
    
    // ========================================
    // 11. LAZY LOADING IMAGES
    // ========================================
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                imageObserver.unobserve(entry.target);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    
    // ========================================
    // 12. PARALLAX EFFECT
    // ========================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    
    // ========================================
    // 13. REVEAL ON SCROLL (Custom)
    // ========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => revealObserver.observe(element));
    
    
    // ========================================
    // 14. PERFORMANCE MONITORING
    // ========================================
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page Load Time: ${pageLoadTime}ms`);
            }, 0);
        });
    }
    
    
    // ========================================
    // 15. ERROR HANDLING
    // ========================================
    window.addEventListener('error', function(e) {
        console.error('Page Error:', e.error);
    });
    
    
    // ========================================
    // 16. VIEWPORT HEIGHT FIX (Mobile)
    // ========================================
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
});

// ========================================
// 17. UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
