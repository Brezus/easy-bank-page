gsap.to(".hamburger", { duration: 0.5, opacity: 1 });

gsap.to(
  ".logo-svg",
  { duration: 1, x: 0, opacity: 1, ease: "back.out(1.4)" },
  "+=0.1"
);
const hiddenNav = document.getElementById("nav-ul");
const hamburger = document.getElementById("hamburger-icon");
const bgDisappear = document.getElementById("first-section");

function hamburgerClick() {
  bgDisappear.classList.toggle("first-section-dark-gradient");
  hamburger.classList.toggle("change");
  if (hiddenNav.style.display === "flex") {
    hiddenNav.style.display = "none";
  } else {
    hiddenNav.style.display = "flex";
  }
}

hiddenNav.addEventListener("click", (e) => {
  let target = e.target.closest("a");
  if (target) {
    bgDisappear.classList.remove("first-section-dark-gradient");
    hamburger.classList.remove("change");
    hiddenNav.style.display = "none";
  }
  return;
});
