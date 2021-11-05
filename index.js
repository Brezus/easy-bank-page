gsap.to(".hamburger", { duration: 0.5, opacity: 1 });

gsap.to(
  ".logo-svg",
  { duration: 1, x: 0, opacity: 1, ease: "back.out(1.4)" },
  "+=0.1"
);

function hamburgerClick() {
  let hamburger = document.getElementById("hamburger-icon");
  let hiddenNav = document.getElementById("nav-ul");
  let bgDisappear = document.getElementById("first-section");
  bgDisappear.classList.toggle("first-section-dark-gradient");
  hamburger.classList.toggle("change");
  if (hiddenNav.style.display === "flex") {
    hiddenNav.style.display = "none";
  } else {
    hiddenNav.style.display = "flex";
  }
}
console.log(hamburgerClick.name);
console.log(typeof hamburgerClick);
console.log(hamburgerClick);
