// js/main.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const responsePara = document.getElementById('form-response');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default submission (placeholder logic)
    if (!form.checkValidity()) {
      responsePara.textContent = 'Please fill out all required fields correctly.';
      responsePara.style.color = 'var(--color-danger)';
    } else {
      // Here you would send data to the server.
      responsePara.textContent = 'Thank you! Your message has been sent.';
      responsePara.style.color = 'var(--color-primary)';
      form.reset();
    }
  });
});
