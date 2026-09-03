// Simple page-load animation

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".section-heading, .skill-card, .featured-project, .gallery-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });

});