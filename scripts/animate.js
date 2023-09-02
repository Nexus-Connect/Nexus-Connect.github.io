const sr = ScrollReveal({ sync: true });
sr.reveal("#welcome-image", {
  origin: "right",
  distance: "100px",
  duration: 500,
  easing: "ease-in-out",
});
sr.reveal(".line1,.line2,.mail-adress-container", {
  origin: "top",
  distance: "40px",
  duration: 500,
  interval: 100,
  easing: "ease-in-out",
});
sr.reveal(
  ".lnd-scnd-pg-heading, .lnd-scnd-pg-title, .lnd-skills-pg-heading,.lnd-skills-pg-title,.heading",
  {
    origin: "top",
    distance: "50px",
    duration: 500,
    interval: 100,
    easing: "ease-in-out",
  }
);
sr.reveal(".hrz-line", {
  origin: "left",
  distance: "150px",
  duration: 500,
  easing: "ease-in-out",
});
sr.reveal(".first-service-container,.third-service-container", {
  origin: "left",
  distance: "100px",
  duration: 500,
  interval: 100,
  easing: "ease-in-out",
});
sr.reveal(".second-service-container,.last-service-container", {
  origin: "right",
  distance: "100px",
  duration: 500,
  interval: 100,
  easing: "ease-in-out",
});
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  effect: "coverflow",
  speed: 1000,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
