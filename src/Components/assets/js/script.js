// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".nav-open-btn");
  const navbarClose = document.querySelector(".nav-close-btn");
  const overlay = document.querySelector(".overlay");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector(".header");

  // Toggle Navbar
  navbarToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // Close Navbar
  navbarClose.addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close Navbar when overlay is clicked
  overlay.addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Handle Scroll Event for Header
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});
