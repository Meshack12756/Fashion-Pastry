document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});

