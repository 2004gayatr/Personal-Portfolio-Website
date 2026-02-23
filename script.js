// Smooth scroll button
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Project interaction
function showProjectMessage(projectName) {
    alert(projectName + " details can be added here.");
}

// Safe Form Validation
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
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
        form.reset();
    });
}

// Smooth Navbar Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active Navbar Highlight
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll(".nav-links a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            links.forEach(link => link.classList.remove("active"));
            document
                .querySelector('.nav-links a[href="#' + id + '"]')
                .classList.add("active");
        }
    });
});

