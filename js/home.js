// header-start
// Toggle icon navbar
let menuIconEl = document.querySelector('#menu-icon');
let navbarEl = document.querySelector('.navbar');

menuIconEl.onclick = () => {
   menuIconEl.classList.toggle('bx-x');
   navbarEl.classList.toggle('active');
};

// Scroll
let sectionEl = document.querySelectorAll('section');
let navLinksEl = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sectionEl.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
         navLinksEl.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}`).classList.add('active');
         });
      };
   });

   // Sticky navbar
   const headerEl = document.querySelector('header');

   headerEl.classList.toggle('sticky', window.scrollY > 100);

   menuIconEl.classList.remove('bx-x');
   navbarEl.classList.remove('active');
}

// typed.js
const typed = new Typed('.multiple-txt', {
   strings: ['drėgnų grūdų džiovinimu', 'sausų grūdų laikymų', 'drėgnų grūdų laikymu'],
   typeSpeed: 90,
   backSpeed: 90,
   backDelay: 1000, //kiek laiko palaukti ir tada grizti
   loop: true
});

// Dark/white mode:
// let darkMode = localStorage.getItem("darkMode");
// const darkModeToggle = document.querySelector("#dark-mode-toggle");
// const sunOrMoonIcon = document.querySelector('button i');
// const header = document.querySelector('.header');
// const refs = document.querySelectorAll('.navbar a');

// const enableDarkMode = () => {
//    document.body.classList.add("darkmode");
//    localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = () => {
//    document.body.classList.remove("darkmode");
//    localStorage.setItem("darkMode", null);
// };

// if (darkMode !== "enabled") {
//    disableDarkMode();
// }

// darkModeToggle.addEventListener("click", () => {
//    darkMode = localStorage.getItem('darkMode');
//    if (darkMode !== "enabled") {
//       enableDarkMode();
//       sunOrMoonIcon.classList.add('bxs-sun');
//       header.style.background = "#5d5537";
//       refs.forEach(ref => {
//          ref.style.color = "#fefefe";
//          ref.classList.add("active");
//       })

//    } else {
//       disableDarkMode();
//       sunOrMoonIcon.classList.remove('bxs-sun');
//       header.style.background = "#fefefe";
//       refs.forEach(ref => {
//          ref.style.color = "#5d5537";

//       })

//    }
// })


// header-end

// home-start
// home-end

// about-start
// about-end

// webcam-start
let video = document.querySelector("#video-element");

if (navigator.mediaDevices.getUserMedia) {
   navigator.mediaDevices
      .getUserMedia({
         video: false,
      })
      .then((stream) => {
         video.srcObject = stream;
         audio.srcObject = stream;
      })
      .catch((error) => {
         console.log(error);
      })
} else {
   console.log("Deja \"getUsermedia nepalaikomas!\"");
}
// webcam-end

// services-start
// services-end

// faq-start
const acordionHeaderEl = document.getElementsByClassName('acordion-header');

function acordionFunk() {
   for (let i = 0; i < acordionHeaderEl.length; i++) {
      acordionHeaderEl[i].addEventListener('click', () => {
         acordionHeaderEl[i].classList.toggle('active');
      })
   }
}

acordionFunk();
// faq-end

// contacts-start
// contacts-end

// scroll reveal
ScrollReveal({
   reset: false, //animacija tik uzkrovus pirma karta sekcija
   distance: '80px',
   duration: 1500, //buvo 2000, prie 1500 greiciau ateina animacija
   delay: 200
});


ScrollReveal().reveal('.home-content, .heading, .subtitle, .faq p', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .acordion-wrapper, #webcam-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .webcam .heading', { origin: 'left' });
ScrollReveal().reveal('.about-content p, .about-content, .our-contact', { origin: 'right' });
