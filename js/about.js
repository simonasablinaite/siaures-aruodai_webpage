// scroll reveal
ScrollReveal({
   reset: false, //animacija tik uzkrovus pirma karta sekcija
   distance: '80px',
   duration: 1500, //buvo 2000, prie 1500 greiciau ateina animacija
   delay: 200
});


ScrollReveal().reveal('.subtitle', { origin: 'top' });
ScrollReveal().reveal('.about-content p', { origin: 'bottom' });
ScrollReveal().reveal('.heading', { origin: 'left' });
ScrollReveal().reveal('.about-img', { origin: 'right' });