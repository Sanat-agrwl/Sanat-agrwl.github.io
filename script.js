// Toggle Archive Details (for Rearview Archives horizontal cards)
function toggleArchiveDetails(expandIcon) {
    const archiveItem = expandIcon.closest('.archive-item');
    const detailsElement = archiveItem.querySelector('.archive-details');
    
    if (detailsElement.style.display === 'none' || !detailsElement.style.display) {
        detailsElement.style.display = 'block';
        expandIcon.textContent = '−';
    } else {
        detailsElement.style.display = 'none';
        expandIcon.textContent = '+';
    }
}

// Toggle Archive Content (for Rearview Archives page)
function toggleArchive(headerElement) {
    const archiveCard = headerElement.parentElement;
    const contentElement = archiveCard.querySelector('.archive-content');
    const toggleButton = headerElement.querySelector('.expand-toggle');
    
    contentElement.classList.toggle('expanded');
    toggleButton.textContent = contentElement.classList.contains('expanded') ? '−' : '+';
}

// Toggle Story Content
function toggleStory(headerElement) {
    const storyCard = headerElement.parentElement;
    const contentElement = storyCard.querySelector('.story-content');
    const toggleButton = headerElement.querySelector('.expand-toggle');
    
    contentElement.classList.toggle('expanded');
    toggleButton.textContent = contentElement.classList.contains('expanded') ? '−' : '+';
}
function toggleCard(cardElement) {
    // Find the details section within the clicked card
    const details = cardElement.querySelector('.archive-details');
    
    // Toggle logic
    if (details.style.display === "block") {
        details.style.display = "none";
        cardElement.classList.remove('active');
    } else {
        // Optional: Close all other cards first so only one is open at a time
        // document.querySelectorAll('.archive-details').forEach(el => el.style.display = 'none');
        // document.querySelectorAll('.archive-card').forEach(el => el.classList.remove('active'));

        details.style.display = "block";
        cardElement.classList.add('active');
    }
}

// Scroll to specific archive card and expand it
function scrollToArchive(index) {
    const cards = document.querySelectorAll('.archive-card');
    if (cards[index]) {
        const card = cards[index];
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Expand the card's details
        const details = card.querySelector('.archive-details');
        if (details && details.style.display !== "block") {
            details.style.display = "block";
            card.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade In Animation on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Navbar Hide/Show on Scroll
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        clearTimeout(scrollTimeout);
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.top = "-130px"; // Hide
        } else {
            navbar.style.top = "0"; // Show
        }
        lastScrollTop = scrollTop;
    });
});