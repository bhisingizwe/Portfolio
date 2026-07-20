// ======================================
// Portfolio JavaScript
// ======================================

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const backToTop = document.getElementById("backToTop");
const year = document.querySelector("#year");

// Sticky header state
function updateHeader() {
  if (!header) return;

  header.classList.toggle("is-scrolled", window.scrollY > 15);
}

// Open and close mobile navigation
function closeMenu() {
  if (!menuButton || !nav) return;

  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

function toggleMenu() {
  if (!menuButton || !nav) return;

  const isOpen = nav.classList.contains("is-open");

  nav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );
}

menuButton?.addEventListener("click", toggleMenu);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");

    // Ignore unfinished placeholder links
    if (!href || href === "#") return;

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    closeMenu();
  });
});

// Back to top
backToTop?.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  closeMenu();
});

// Close the menu when Escape is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// Close mobile menu when switching back to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 640) {
    closeMenu();
  }
});

// Update header when scrolling
window.addEventListener("scroll", updateHeader, {
  passive: true
});

// Current year, only if you add an element with id="year"
if (year) {
  year.textContent = new Date().getFullYear();
}

updateHeader();