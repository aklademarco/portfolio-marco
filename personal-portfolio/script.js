// document.addEventListener("DOMContentLoaded", () => {
//     const aboutSection = document.getElementById("about");
//     const homeSection = document.querySelector(".home");
//     const educationSection = document.getElementById("education");
//     const aboutLink = document.querySelector(".navbar a[href='#about']");
//     const educationLink = document.querySelector(".navbar a[href='#education']");
//     const homeLink = document.querySelector(".navbar a[href='#home']");

//     aboutLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         homeSection.style.display = "none";
//         aboutSection.style.display = "flex";
//         educationSection.style.display = "none";
//     });

//     educationLink.addEventListener("click", (e) => {
//         e.preventDefault();
//         homeSection.style.display = "none";
//         aboutSection.style.display = "none";
//         educationSection.style.display = "flex";
//     });

//     if (homeLink) {
//         homeLink.addEventListener("click", (e) => {
//             e.preventDefault();
//             aboutSection.style.display = "none";
//             educationSection.style.display = "none";
//             homeSection.style.display = "flex";
//         });
   
//     }

  
// });



  const animateElements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));


