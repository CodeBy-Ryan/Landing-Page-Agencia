document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navLinks.style.display = navLinks.classList.contains("active")
      ? "flex"
      : "none";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = "flex";
    } else if (!navLinks.classList.contains("active")) {
      navLinks.style.display = "none";
    }
  });
});
