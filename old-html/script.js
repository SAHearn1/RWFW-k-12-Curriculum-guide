// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navigation
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        nav.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
    
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and grade band cards
document.querySelectorAll('.feature-card, .grade-band-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.style.cssText = `
            background: var(--emerald);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
        `;
        
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 2rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                `;
            }
        });
        
        nav.appendChild(menuBtn);
    }
};

// Initialize mobile menu on load and resize
if (window.innerWidth <= 768) {
    createMobileMenu();
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileMenu();
    } else {
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (mobileBtn) {
            mobileBtn.remove();
        }
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.cssText = '';
    }
});

// Track clicks on lesson generator button for analytics
document.querySelectorAll('a[href*="lessonplan-generator"]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Lesson Generator clicked');
        // Add your analytics tracking here if needed
    });
});

// Print-friendly content
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

console.log('RootWork Framework curriculum website loaded successfully');
