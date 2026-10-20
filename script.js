const contactBtn = document.getElementById("contactBtn");
const contactInfo = document.getElementById("contactInfo");

contactBtn.addEventListener("click", function() {
    contactInfo.classList.toggle("show");

    if (contactInfo.classList.contains("show")) {
        contactBtn.textContent = "Hide Contacts";
    } else {
        contactBtn.textContent = "Contact Me";
    }
});