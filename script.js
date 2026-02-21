// Smooth scroll to projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields!";
        return;
    }

    if (!email.includes("@")) {
        formMessage.style.color = "red";
        formMessage.innerText = "Enter a valid email!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Message sent successfully!";

    // Clear fields
    document.getElementById("contactForm").reset();
});

