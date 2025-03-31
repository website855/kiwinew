// Function to add animations when a section enters the viewport
const sections = document.querySelectorAll('.welcome-section, .feature-boxes, .banner-section');

function checkSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom >= 0) {
            if (!section.classList.contains('show')) {
                section.classList.add('show');
            }
        } else {
            section.classList.remove('show');
        }
    });
}

// Listen for scrolling
window.addEventListener('scroll', checkSections);

// Initial check in case the user loads the page already inside a section
checkSections();
X