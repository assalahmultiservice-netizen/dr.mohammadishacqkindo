/* =====================================
   القائمة في الجوال
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* إغلاق القائمة عند الضغط على أحد الروابط */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


/* =====================================
   تغيير شكل الهيدر عند النزول
===================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================
   زر العودة للأعلى
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================
   السنة الحالية في الفوتر
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================
   نموذج التواصل
===================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formMessage.textContent =
            "يرجى تعبئة جميع الحقول.";

        formMessage.style.color = "#b33";

        return;
    }

    formMessage.textContent =
        "تم استلام رسالتك بنجاح. بارك الله فيكم.";

    formMessage.style.color = "#0d5c4a";

    contactForm.reset();

});


/* =====================================
   تأثير ظهور العناصر أثناء النزول
===================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .lecture-card, .about-content, .about-image, .education-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});