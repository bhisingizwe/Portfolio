// ======================================
// Portfolio JavaScript
// ======================================

// Sticky header shadow
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 15) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// Mobile Navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            !expanded
        );
    });

}


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// Current Year (for footer if you add one)
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Back to top
const backToTop = document.getElementById("backToTop");

backToTop?.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});