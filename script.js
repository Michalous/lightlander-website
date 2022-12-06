const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    autoplay: {
      delay: 5000
    },
    loop: true,
  
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".kanan",
      prevEl: ".kiri"
    }
  });