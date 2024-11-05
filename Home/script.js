document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.getElementById('navbar-links');
    const toggleButton = document.querySelector('.toggle-button');
  
    // Toggle navbar visibility on button click
    toggleButton.addEventListener('click', function(event) {
      event.stopPropagation();  // Prevent click from propagating
      navbarLinks.classList.toggle('active');
      toggleButton.classList.toggle('hidden');  // Toggle the visibility of the button
    });
  
    // Close navbar when clicking outside of it
    document.addEventListener('click', function(event) {
      const isClickInside = toggleButton.contains(event.target) || navbarLinks.contains(event.target);
      if (!isClickInside && navbarLinks.classList.contains('active')) {
        navbarLinks.classList.remove('active');
        toggleButton.classList.remove('hidden');  // Ensure button is visible again
      }
    });
  });
  