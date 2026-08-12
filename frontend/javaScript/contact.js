
// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();
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
    // Get Input Values
    // ===============================

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // ===============================
    // Empty Validation
    // ===============================

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }


    // ===============================
    // Name Validation
    // ===============================

    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Name should contain only alphabets.");
        return;
    }


    // ===============================
    // Email Validation
    // ===============================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // ===============================
    // Subject Validation
    // ===============================

    if (subject.length < 3) {
        alert("Subject should contain at least 3 characters.");
        return;
    }


    // ===============================
    // Message Validation
    // ===============================

    if (message.length < 10) {
        alert("Message should contain at least 10 characters.");
        return;
    }


    // ===============================
    // Data to Backend
    // ===============================

    const contactData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };


    // ===============================
    // Send Data to Backend
    // ===============================

    try {

        const response = await fetch(
            "http://localhost:5000/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(contactData)
            }
        );


        const result = await response.json();


        // ===============================
        // Backend Success
        // ===============================

        if (response.ok) {

            console.log("Contact message saved:", result);

            alert(
                result.message ||
                "Thank you! Your message has been sent successfully."
            );

            contactForm.reset();

        }

        // ===============================
        // Backend Error
        // ===============================

        else {

            alert(
                result.message ||
                "Failed to send message."
            );

        }


    } catch (error) {

        console.error("Backend Error:", error);

        alert(
            "Unable to connect to server. Please start the backend."
        );

    }

});
