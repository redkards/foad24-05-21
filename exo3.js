let burger = document.querySelector("#burger");
let navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
