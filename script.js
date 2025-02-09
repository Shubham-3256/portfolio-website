document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animate Skills on Scroll
  const skillSection = document.querySelector(".skills");
  const skills = document.querySelectorAll(".fill");

  function animateSkills() {
    skills.forEach((skill) => {
      skill.style.width = skill.getAttribute("data-width");
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > skillSection.offsetTop - 300) {
      animateSkills();
    }
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });

  // Contact Form Submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been sent!");
    });
});
