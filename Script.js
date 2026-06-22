/* ==========================================
   AMN Sketches
   Script.js - Part 1
========================================== */

// Navbar Shadow on Scroll

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});
// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});