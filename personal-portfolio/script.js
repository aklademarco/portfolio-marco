// === Toggle mobile navbar ===
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x"); 
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

// === Smooth scrolling ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === ScrollSpy (highlight active link) ===
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLink.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => {
  observer.observe(section);
});

// ===  Scroll animation ===
const animateElements = document.querySelectorAll(".animate");

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => animObserver.observe(el));

// ===  Web3Forms contact form ===
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your internet connection.");
    }
  });
}

