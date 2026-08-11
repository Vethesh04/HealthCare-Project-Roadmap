// ===============================
// Get Form Elements
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

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
    // Success Message
    // ===============================

    alert("Thank you! Your message has been sent successfully.");

    // Reset Form

    contactForm.reset();

});