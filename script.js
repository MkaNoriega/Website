// Adding some smooth scroll animations - makes my site feel alive!
const fadeInElements = document.querySelectorAll('.about-text, .skill-card, .project-card, .profile-photo');

// My custom settings for the fade effect
const fadeInOptions = {
    threshold: 0.3, // Found this sweet spot after testing
    rootMargin: "0px 0px -100px 0px" // Perfect timing for the animation
};

// This observer is my favorite part - makes everything pop in nicely
const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // One animation is enough!
    });
}, fadeInOptions);

fadeInElements.forEach(element => {
    element.classList.add('fade-out'); // Initial state
    fadeInObserver.observe(element);
});

// Making cards do that cool hover thing
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    // When you hover over a card, it floats up
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    });
    // And back down it goes when you move away
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    });
});

// Animate social icons on hover
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
    });

    icon.addEventListener('mouseout', function() {
        this.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
    });
}); 