// Glatko skroliranje na linkove
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

// Kontakt forma - jednostavna validacija
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Prikupljanje podataka
        const formData = new FormData(this);
        const name = this.querySelector('input[placeholder="Vaše ime"]').value;
        
        // Jednostavna provjera
        if (name.trim() === '') {
            alert('Molimo unesite sve podatke.');
            return;
        }
        
        // Poruka o uspjehu
        alert('Hvala na poruci! Kontaktirat ćemo vas u skoro.');
        this.reset();
    });
}

// Animacija pri učitavanju sekcija (IntersectionObserver)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Primijeni observer na service kartice
document.querySelectorAll('.service-card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Dinamički naslov u browseru
console.log('Dominikovic Flex j.d.o.o - Vučna služba i hidraulični crijevi');
