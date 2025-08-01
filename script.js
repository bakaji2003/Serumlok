window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  function runInitialAnimations() {
    const onLoadTl = gsap.timeline({ defaults: { ease: "power2.out" } });

    onLoadTl.to(".hero-bottle-wrapper", {
      opacity: 1,
      scale: 1,
      delay: 0,
      duration: 0.5,
      ease: "power3.out"
    }, 0);
  }

  runInitialAnimations();

  // Smooth scroll-triggered bottle animation
  gsap.to(".hero-bottle", {
    scrollTrigger: {
      trigger: "#Home",
      start: "top top",
      end: "+=1500",
      scrub: 3,   
      pin: true,
      anticipatePin: 1
    },
    y: 450,x: 20,
    rotate :0,
    ease: "power2.inOut"
  });
});

