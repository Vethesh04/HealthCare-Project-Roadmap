const searchInput = document.getElementById("searchInput");
const specialization = document.getElementById("specialization");
const doctorCards = document.querySelectorAll(".doctor-card");

function filterDoctors() {
    const searchText = searchInput.value.toLowerCase();
    const selectedSpecialization = specialization.value.toLowerCase();

    doctorCards.forEach((card) => {
        const doctorName = card.querySelector("h2").textContent.toLowerCase();
        const doctorSpecialization = card.dataset.specialization.toLowerCase();

        const nameMatch = doctorName.includes(searchText);
        const specializationMatch =
            selectedSpecialization === "" ||
            doctorSpecialization === selectedSpecialization;

        if (nameMatch && specializationMatch) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("keyup", filterDoctors);
specialization.addEventListener("change", filterDoctors);