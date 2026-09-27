document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
        // Close menu after choosing a link
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => links.classList.remove('open'))
        );
    }
});
