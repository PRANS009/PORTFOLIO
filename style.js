

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});




const themeBtn = document.getElementById("themeBtn");

let darkMode = true;

themeBtn.addEventListener("click", function() {

    if (darkMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f5f7fb"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text-light",
            "#64748b"
        );

        document.body.style.color = "#111827";

        themeBtn.textContent = "☀️";

        darkMode = false;

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#0a0f1c"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text-light",
            "#aab2c0"
        );

        document.body.style.color = "#ffffff";

        themeBtn.textContent = "🌙";

        darkMode = true;

    }

});



const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1&to=pransjangra9@gmail.com&su="
        + mailSubject
        + "&body="
        + mailBody;


    window.open(gmailURL, "_blank");


    formMessage.textContent =
        "Opening Gmail...";


    contactForm.reset();

});




const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});