let questions = document.querySelector(".questions");
let réponse = document.querySelector(".réponse");
let menu = document.getElementById("burger");
let p = document.querySelector("p");

menu.addEventListener("click", () => {
  questions.classList.toggle("active");
});

questions.addEventListener("click", () => {
  réponse.classList.toggle("active");
});
