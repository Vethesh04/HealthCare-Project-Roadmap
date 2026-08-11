const searchInput = document.getElementById("searchInput");
const specialization = document.getElementById("specialization");

const doctorCards = document.querySelectorAll(".doctor-card");
const noResult = document.getElementById("noResult");


function filterDoctors() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const selectedSpecialization =
        specialization.value.toLowerCase();

    let visibleCount = 0;


    doctorCards.forEach(card => {

        const doctorName =
            card.querySelector("h2")
                .textContent
                .toLowerCase();

        const doctorSpecialization =
            card.dataset.specialization.toLowerCase();


        const matchesSearch =
            doctorName.includes(searchValue) ||
            doctorSpecialization.includes(searchValue);


        const matchesSpecialization =
            selectedSpecialization === "" ||
            doctorSpecialization === selectedSpecialization;


        if (matchesSearch && matchesSpecialization) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}


/* SEARCH */

searchInput.addEventListener(
    "input",
    filterDoctors
);


/* SPECIALIZATION */

specialization.addEventListener(
    "change",
    filterDoctors
);