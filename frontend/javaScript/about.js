// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target"));

        const current = Number(counter.innerText);

        const increment = Math.ceil(target / 100);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(
    ".card, .choose-box, .facility-card, .review, .about-content, .about-image"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

// Initial Styles
revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();