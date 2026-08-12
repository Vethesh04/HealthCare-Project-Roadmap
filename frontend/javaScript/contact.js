// ===============================
// Contact Form
// ===============================

const contactForm =
    document.getElementById("contactForm");


// ===============================
// FORM SUBMIT
// ===============================

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    // ===============================
    // GET INPUT VALUES
    // ===============================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // ===============================
    // EMPTY VALIDATION
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
    // NAME VALIDATION
    // ===============================

    const namePattern =
        /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {

        alert(
            "Name should contain only alphabets."
        );

        return;
    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }


    // ===============================
    // SUBJECT VALIDATION
    // ===============================

    if (subject.length < 3) {

        alert(
            "Subject should contain at least 3 characters."
        );

        return;
    }


    // ===============================
    // MESSAGE VALIDATION
    // ===============================

    if (message.length < 10) {

        alert(
            "Message should contain at least 10 characters."
        );

        return;
    }


    // ===============================
    // DATA FOR BACKEND
    // ===============================

    const contactData = {

        name: name,

        email: email,

        subject: subject,

        message: message
    };


    // ===============================
    // SEND TO BACKEND
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


        const result =
            await response.json();


        // ===============================
        // SUCCESS
        // ===============================

        if (response.ok) {

            console.log(
                "Contact message saved:",
                result
            );

            alert(
                result.message ||
                "Thank you! Your message has been sent successfully."
            );

            contactForm.reset();

        }

        // ===============================
        // BACKEND ERROR
        // ===============================

        else {

            alert(
                result.message ||
                "Failed to send message."
            );
        }


    } catch (error) {

        console.error(
            "Backend Error:",
            error
        );

        alert(
            "Unable to connect to server. Please start the backend."
        );
    }

});