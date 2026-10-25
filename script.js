const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("newsletterForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks! Email subscriptions are not connected in this starter version.";
  });
}
