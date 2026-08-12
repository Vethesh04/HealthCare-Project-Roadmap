
const form = document.getElementById("appointmentForm");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");


form.addEventListener("submit", async function () {

    e.preventDefault();


    // ================= CLEAR ERRORS =================

    document.querySelectorAll(".error").forEach(error => {
        error.innerHTML = "";
    });


    let valid = true;


    // ================= GET VALUES =================

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const age = document.getElementById("age").value.trim();

    const gender = document.getElementById("gender").value;

    const department = document.getElementById("department").value;

    const doctor = document.getElementById("doctor").value;

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    const problem = document.getElementById("problem").value.trim();


    // ================= NAME =================

    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "Name is required";

        valid = false;
    }


    // ================= EMAIL =================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Email is required";

        valid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Enter a valid email";

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

        document.getElementById("ageError").innerHTML =
            "Age is required";

        valid = false;

    } else if (age < 1 || age > 120) {

        document.getElementById("ageError").innerHTML =
            "Enter valid age";

        valid = false;
    }


    // ================= GENDER =================

    if (gender === "") {

        document.getElementById("genderError").innerHTML =
            "Gender is required";

        valid = false;
    }


    // ================= DEPARTMENT =================

    if (department === "") {

        document.getElementById("departmentError").innerHTML =
            "Department is required";

        valid = false;
    }


    // ================= DOCTOR =================

    if (doctor === "") {

        document.getElementById("doctorError").innerHTML =
            "Doctor is required";

        valid = false;
    }


    // ================= DATE =================

    if (date === "") {

        document.getElementById("dateError").innerHTML =
            "Appointment date is required";

        valid = false;
    }


    // ================= TIME =================

    if (time === "") {

        document.getElementById("timeError").innerHTML =
            "Appointment time is required";

        valid = false;
    }


    // ================= PROBLEM =================

    if (problem === "") {

        document.getElementById("problemError").innerHTML =
            "Please describe your health problem";

        valid = false;
    }


    // ================= SEND TO BACKEND =================

    if (!valid) {
        return;
    }


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

            console.log(
                "Appointment saved:",
                result
            );


            form.reset();


            popup.style.display = "flex";

        } else {

            alert(
                result.message ||
                "Failed to book appointment"
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


// ================= CLOSE POPUP =================

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});


// ================= CLICK OUTSIDE POPUP =================

popup.addEventListener("click", function (e) {

    if (e.target === popup) {

        popup.style.display = "none";

    }

});


// ================= MINIMUM DATE =================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

