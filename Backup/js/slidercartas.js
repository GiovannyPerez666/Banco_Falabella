document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    prevButton.addEventListener('click', function() {
      carousel.scrollBy(-carousel.offsetWidth, 0);
    });
    
    nextButton.addEventListener('click', function() {
      carousel.scrollBy(carousel.offsetWidth, 0);
    });
  });
  