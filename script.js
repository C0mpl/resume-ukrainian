document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                menuItems.forEach(item => {
                    item.classList.toggle('active', entry.target.id === item.getAttribute('data-target'));
                });
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
