let btn1 = document.getElementById("btn1");
let faq = document.querySelector(".faq");
let questions = document.querySelector(".questions");

btn1.addEventListener("click", () => {
  if (faq.style.backgroundColor == "gray") {
    faq.style.backgroundColor = "silver";
    faq.style.color = "black";
  } else {
    faq.style.backgroundColor = "gray";
    faq.style.color = "white";
  }
});
