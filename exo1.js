let btn1 = document.getElementById("btn1");
let btnq1 = document.getElementById("btnq1");
let btnq2 = document.getElementById("btnq2");
let btnq3 = document.getElementById("btnq3");
let btnq4 = document.getElementById("btnq4");

let faq = document.querySelector(".faq");
let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let réponse1 = document.getElementById("réponse1");
let réponse2 = document.getElementById("réponse2");
let réponse3 = document.getElementById("réponse3");
let réponse4 = document.getElementById("réponse4");
let exo2 = document.querySelector(".exo2");

//changement de couleur de thème

btn1.addEventListener("click", () => {
  if (faq.style.backgroundColor == "gray") {
    faq.style.backgroundColor = "silver";
    faq.style.color = "black";
  } else {
    faq.style.backgroundColor = "gray";
    faq.style.color = "white";
  }
});
faq.style.fontSize = "1.5rem";
faq.style.textDecoration = "none";
// affichage réponses
réponse1.style.visibility = "hidden";
réponse1.style.color = "red";
réponse1.style.fontSize = "1.5rem";
réponse2.style.visibility = "hidden";
réponse2.style.color = "pink";
réponse3.style.visibility = "hidden";
réponse3.style.color = "limegreen";
réponse4.style.visibility = "hidden";
réponse4.style.color = "lightblue";

btnq1.addEventListener("click", () => {
  if (réponse1.style.visibility === "visible") {
    réponse1.style.visibility = "hidden";
  } else {
    réponse1.style.visibility = "visible";
  }
});
btnq2.addEventListener("click", () => {
  if (réponse2.style.visibility === "visible") {
    réponse2.style.visibility = "hidden";
  } else {
    réponse2.style.visibility = "visible";
  }
});
btnq3.addEventListener("click", () => {
  if (réponse3.style.visibility === "visible") {
    réponse3.style.visibility = "hidden";
  } else {
    réponse3.style.visibility = "visible";
  }
});

btnq4.addEventListener("click", () => {
  if (réponse4.style.visibility === "visible") {
    réponse4.style.visibility = "hidden";
  } else {
    réponse4.style.visibility = "visible";
  }
});
