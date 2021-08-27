function hamburgerClick() {
  let hamburger = document.getElementById("hamburger-icon");
  let hiddenNav = document.getElementById("nav-ul");
  let bgDisappear = document.getElementById("first-section");
  bgDisappear.classList.toggle("clicked");
  if (hiddenNav.style.display === "flex") {
    hiddenNav.style.display = "none";
  } else {
    hiddenNav.style.display = "flex";
  }
}
