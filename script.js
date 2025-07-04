// Add event listener to nav links
document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add fade-in animation to images
document.querySelectorAll('img.fade-in').forEach((img) => {
    img.addEventListener('load', () => {
        img.style.opacity = 1;
    });
});