document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu on mobile
    const menuIcon = document.getElementById('menu');
    const navMenu = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('showData');
    });

    // Static feedback form submission handling
    const feedbackForm = document.querySelector('.feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show feedback submission message
        feedbackMessage.style.display = 'block';
        feedbackMessage.textContent = 'Thank you for your feedback!';
        
        // Hide message after 3 seconds
        setTimeout(function() {
            feedbackMessage.style.display = 'none';
        }, 3000);
        
        // Clear form inputs
        feedbackForm.reset();
    });

    // Static contact form submission handling
    const contactForm = document.querySelector('.contactForm');
    const contactMessageSubmission = document.getElementById('contactMessageSubmision');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show contact submission message
        contactMessageSubmission.style.display = 'block';
        contactMessageSubmission.textContent = 'Thank you for contacting us!';

        // Hide message after 5 seconds
        setTimeout(function() {
            contactMessageSubmission.style.display = 'none';
        }, 5000);
        
        // Clear form inputs
        contactForm.reset();
    });

    // Typed.js initialization for dynamic text
    var typed = new Typed('#aboutIntro', {
        strings: ['Welcome to QuickEats', 'About QuickEats'],
        typeSpeed: 50,
    });

    // Static text for other sections
    document.getElementById('mission').textContent = 'Our Mission';
    document.getElementById('value').textContent = 'Why Choose QuickEats?';
    document.getElementById('commitment').textContent = 'Our Commitment to You';
});
