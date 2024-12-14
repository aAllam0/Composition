const navbar = document.querySelector("header .navbar");
const toggleBar = document.querySelector("header .toggle-bar");

toggleBar.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active");
  navbar.classList.toggle("show");
});
