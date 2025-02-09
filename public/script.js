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
// Initialize EmailJS (Replace "your_user_id" with your actual EmailJS user ID)
(function () {
  emailjs.init("sankhyan325698@gmail.com");
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
      };

      fetch("http://localhost:5000/send", {
        // Change URL when deploying
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert(
              "✅ Message sent successfully! You will receive a response soon."
            );
            contactForm.reset();
          } else {
            alert("❌ Failed to send message. Try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Check the console for details.");
        });
    });
  }
});
