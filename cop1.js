document.addEventListener('DOMContentLoaded', function() {
  // Background image slider
  const slides = document.querySelectorAll('.bg-slide');
  let currentSlide = 0;
  
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Smooth scroll for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if(this.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if(target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if(newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      // Here you would typically send the email to your server
      alert(`Thank you for subscribing with ${email}!`);
      this.reset();
    });
  }
});