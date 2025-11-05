// Your code here
"use strict";
//dette stykke var tidligere sat ind i console i browseren

//tager fat i dodger
const dodger = document.getElementById("dodger");
//ændre dogder farve til sort
dodger.style.backgroundColor = "#000000";
//ændre dodger farve til pink
dodger.style.backgroundColor = "#FF69B4";
//ændre dodgers posistion opad
dodger.style.bottom = "100px";
//ændre dodgers posistion tilbage til start
dodger.style.bottom = "0px";
//reagere kun i console log og ikke fysisk i browseren
document.addEventListener("keydown", function (event) {
  console.log(event);
});
//reagere på at man trykker på tast
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
//
