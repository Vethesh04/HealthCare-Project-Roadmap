
const form = document.getElementById("appointmentForm");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


form.addEventListener("submit", async function (e) {

    e.preventDefault();

    // Clear Previous Errors
    document.querySelectorAll(".error").forEach(error => {
        error.innerHTML = "";
    });

    let valid = true;

    // Get Values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value.trim();

    let gender = document.getElementById("gender").value;
    let department = document.getElementById("department").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let problem = document.getElementById("problem").value.trim();


    // ================= NAME =================

    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "Name is required";

        valid = false;
    }


    // ================= EMAIL =================

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Email is required";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Invalid email";

        valid = false;
    }


    // ================= PHONE =================

    const phonePattern = /^[6-9]\d{9}$/;

    if (phone === "") {

        document.getElementById("phoneError").innerHTML =
            "Phone number is required";

        valid = false;

    } else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").innerHTML =
            "Enter valid 10 digit number";

        valid = false;
    }


    // ================= AGE =================

    if (age === "") {

        valid = false;

    } else if (age < 1 || age > 120) {

        valid = false;

        alert("Invalid age");
    }


    // ================= OTHER FIELDS =================

    if (gender === "") {

        alert("Please select gender");

        valid = false;
    }

    if (department === "") {

        alert("Please select department");

        valid = false;
    }

    if (doctor === "") {

        alert("Please select doctor");

        valid = false;
    }

    if (date === "") {

        alert("Please select appointment date");

        valid = false;
    }

    if (time === "") {

        alert("Please select appointment time");

        valid = false;
    }

    if (problem === "") {

        alert("Please describe your health problem");

        valid = false;
    }


    // ================= SEND TO BACKEND =================

    if (valid) {

        const appointmentData = {

            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: Number(age),
            department: department,
            doctor: doctor,
            date: date,
            time: time,
            problem: problem

        };


        try {

            const response = await fetch(
                "http://localhost:5000/api/appointments",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(appointmentData)
                }
            );


            const result = await response.json();


            if (response.ok) {

                console.log("Appointment saved:", result);

                // Reset form
                form.reset();

                // Show Success Popup
                popup.style.display = "flex";

            } else {

                alert(result.message || "Failed to book appointment");

            }


        } catch (error) {

            console.error("Backend Error:", error);

            alert(
                "Unable to connect to server. Please start the backend."
            );

        }

    }

});


// ================= CLOSE POPUP =================

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});

