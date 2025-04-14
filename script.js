document.querySelector('button').addEventListener('click', function() {
    alert('Welcome to Chale Ghumne!');
});
// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  // Smooth scroll to top on click
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission
    // Here, you can add code to send form data via AJAX if needed
  
    // Display the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
  
    // Optionally, reset the form
    this.reset();
  });