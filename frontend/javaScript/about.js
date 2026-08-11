
// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".count");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {
        return;
    }

    const counterSection =
        document.querySelector(".counter");

    const sectionTop =
        counterSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 100));


            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.innerText =
                        target.toLocaleString();

                    return;
                }


                counter.innerText =
                    current.toLocaleString();


                setTimeout(updateCounter, 20);
            }


            updateCounter();

        });
    }
}


window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".card, .choose-box, .facility-card, .review, .about-content, .about-image"
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.7s ease";

});


function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < window.innerHeight - 80) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


window.addEventListener(
    "load",
    revealOnScroll
);


// ================= ACTIVE NAVBAR =================

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".list ul li a");


navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href")
            .split("/")
            .pop();


    if (linkPage === currentPage) {

        link.style.background = "#0077b6";

        link.style.color = "white";
    }

});