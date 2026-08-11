// ===============================
// INDEX PAGE JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {


    // ===============================
    // NAVBAR ACTIVE LINK
    // ===============================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks =
        document.querySelectorAll(".list ul li a");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();


        if (linkPage === currentPage) {

            link.style.backgroundColor = "#0077b6";

            link.style.color = "white";

        }

    });


    // ===============================
    // CARD SCROLL ANIMATION
    // ===============================

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(40px)";

    });


    function showCards() {

        const screenPosition =
            window.innerHeight * 0.85;


        cards.forEach(function (card, index) {

            const cardPosition =
                card.getBoundingClientRect().top;


            if (cardPosition < screenPosition) {

                setTimeout(function () {

                    card.style.transition =
                        "all 0.6s ease";

                    card.style.opacity = "1";

                    card.style.transform =
                        "translateY(0)";

                }, index * 150);

            }

        });

    }


    window.addEventListener(
        "scroll",
        showCards
    );


    showCards();


    // ===============================
    // HERO BUTTON EFFECT
    // ===============================

    const heroButtons =
        document.querySelectorAll(".btn-inner");


    heroButtons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                button.style.cursor =
                    "pointer";

            }
        );

    });


    // ===============================
    // APPOINTMENT BUTTON
    // ===============================

    const appointmentButton =
        document.querySelector(
            ".navbar .btn"
        );


    if (appointmentButton) {

        appointmentButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                window.location.href =
                    "./appointment.html";

            }
        );

    }


    // ===============================
    // FOOTER SOCIAL ICONS
    // ===============================

    const socialLinks =
        document.querySelectorAll(
            ".social-icons a"
        );


    socialLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Social media page coming soon!"
                );

            }
        );

    });


    // ===============================
    // SMOOTH SCROLL
    // ===============================

    document.documentElement.style.scrollBehavior =
        "smooth";

});