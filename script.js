// R2M Brands Website - Interactive JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // 1. MOBILE MENU FUNCTIONALITY
    // ========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Change icon
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    
    // ========================================
    // 2. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ========================================
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ========================================
    // 4. REVEAL ON SCROLL ANIMATION
    // ========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Reveal when element is 80% visible in viewport
            if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                element.classList.add('revealed');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    
    // ========================================
    // 5. ANIMATED COUNTER FOR STATS
    // ========================================
    const statCards = document.querySelectorAll('.stat-card');
    let statsAnimated = false;
    
    const animateStats = () => {
        if (statsAnimated) return;
        
        const statsSection = document.querySelector('#home');
        if (!statsSection) return;
        
        const sectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            statsAnimated = true;
            
            statCards.forEach((card, index) => {
                const countElement = card.querySelector('[data-count]');
                if (!countElement) return;
                
                const targetCount = parseInt(countElement.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = targetCount / (duration / 16); // 60fps
                let currentCount = 0;
                
                const updateCount = () => {
                    currentCount += increment;
                    
                    if (currentCount < targetCount) {
                        countElement.textContent = Math.floor(currentCount);
                        requestAnimationFrame(updateCount);
                    } else {
                        countElement.textContent = targetCount;
                        card.setAttribute('data-counted', 'true');
                    }
                };
                
                // Stagger the animation
                setTimeout(() => {
                    updateCount();
                }, index * 100);
            });
        }
    };
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Initial check
    
    
    // ========================================
    // 6. BACK TO TOP BUTTON
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
    // 7. ACTIVE NAV LINK HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const highlightNav = () => {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-gray-900');
                    link.classList.add('text-gray-600');
                    
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.remove('text-gray-600');
                        link.classList.add('text-gray-900');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNav);
    
    
    // ========================================
    // 8. FORM SUBMISSION HANDLER
    // ========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
                submitBtn.classList.remove('bg-brand-teal');
                submitBtn.classList.add('bg-green-500');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-500');
                    submitBtn.classList.add('bg-brand-teal');
                }, 3000);
                
                // Show alert
                showNotification('Thank you! We\'ll get back to you soon.', 'success');
            }, 2000);
        });
    }
    
    
    // ========================================
    // 9. NOTIFICATION SYSTEM
    // ========================================
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-8 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-300 translate-x-full`;
        
        // Set color based on type
        if (type === 'success') {
            notification.classList.add('bg-green-500', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-500', 'text-white');
        } else {
            notification.classList.add('bg-brand-teal', 'text-white');
        }
        
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} text-xl"></i>
                <span class="font-medium">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    
    // ========================================
    // 10. LAZY LOAD IMAGES
    // ========================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
    
    
    // ========================================
    // 11. PARALLAX EFFECT FOR HERO
    // ========================================
    const heroSection = document.querySelector('#home');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = heroSection.querySelectorAll('.animate-float');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    
    // ========================================
    // 12. TYPING EFFECT FOR HERO TEXT (Optional)
    // ========================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('#home h1 span:last-child');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     setTimeout(() => {
    //         typeWriter(heroTitle, originalText, 80);
    //     }, 1000);
    // }
    
    
    // ========================================
    // 13. KEYBOARD ACCESSIBILITY
    // ========================================
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    
    // ========================================
    // 14. PRELOAD CRITICAL RESOURCES
    // ========================================
    const preloadImages = () => {
        const images = [
            'https://images.unsplash.com/photo-1604719312566-8912e9227c6a',
            'https://images.unsplash.com/photo-1665686376173-ada7a0031a85'
        ];
        
        images.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    };
    
    preloadImages();
    
    
    // ========================================
    // 15. SERVICE WORKER REGISTRATION (Optional for PWA)
    // ========================================
    if ('serviceWorker' in navigator) {
        // Uncomment to enable service worker
        // window.addEventListener('load', () => {
        //     navigator.serviceWorker.register('/sw.js')
        //         .then(registration => console.log('SW registered:', registration))
        //         .catch(error => console.log('SW registration failed:', error));
        // });
    }
    
    
    // ========================================
    // 16. CONSOLE BRANDING
    // ========================================
    console.log('%c R2M Brands ', 'background: #0d9488; color: white; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Predict. Execute. Win. ', 'color: #0d9488; font-size: 14px; font-weight: bold;');
    console.log('%c Interested in working with us? Visit: https://r2mbrands.com ', 'color: #666; font-size: 12px;');
    
    
    // ========================================
    // 17. PERFORMANCE MONITORING
    // ========================================
    window.addEventListener('load', function() {
        // Log page load time
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page Load Time: ${pageLoadTime}ms`);
        }
    });
    
    
    // ========================================
    // 18. VIEWPORT HEIGHT FIX FOR MOBILE
    // ========================================
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    
    // ========================================
    // 19. COOKIE CONSENT (Optional)
    // ========================================
    function showCookieConsent() {
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent) {
            const banner = document.createElement('div');
            banner.className = 'fixed bottom-0 left-0 right-0 bg-brand-dark text-white p-6 shadow-2xl z-50 transform transition-transform duration-300';
            banner.innerHTML = `
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-sm">
                        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    </p>
                    <div class="flex gap-4">
                        <button id="accept-cookies" class="bg-brand-teal hover:bg-brand-accent text-white px-6 py-2 rounded-lg font-semibold transition">
                            Accept
                        </button>
                        <button id="decline-cookies" class="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition">
                            Decline
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(banner);
            
            document.getElementById('accept-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                banner.style.transform = 'translateY(100%)';
                setTimeout(() => banner.remove(), 300);
            });
            
            document.getElementById('decline-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'declined');
                banner.style.transform = 'translateY(100%)';
                setTimeout(() => banner.remove(), 300);
            });
        }
    }
    
    // Uncomment to enable cookie consent
    // setTimeout(showCookieConsent, 2000);
    
    
    // ========================================
    // 20. INITIALIZE ALL
    // ========================================
    console.log('R2M Brands website initialized successfully!');
    
});


// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
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

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}
