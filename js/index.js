// Your code here
"use strict";
/*-------------------------------------------
Øvelse 0.1 del 1
-------------------------------------------*/

//dette stykke var tidligere sat ind i console i browseren
/*
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
*/

/*-------------------------------------------
Øvelse 4 - indsæt lyd
-------------------------------------------*/
//Her kalder jeg på min lydfil
const movementSound = document.getElementById("movementSound");
//denne funktion aktivere lyden
function playSoundOnMovement() {
  movementSound.currentTime = 0;
  movementSound.play();
}

/*-------------------------------------------
Øvelse 5 - indsæt lyd gameoverlyd
-------------------------------------------*/
//Her kalder jeg på min lydfil
const gameoverSound = document.getElementById("gameoverSound");
//denne funktion
function playGameOverSound() {
  gameoverSound.currentTime = 0;
  gameoverSound.play();
}

/*-------------------------------------------
Øvelse 0.1 del 2
-------------------------------------------*/
//Nu har jeg fjernet øverste del og prøver igen med del 2
//update et elements posistion på siden
//her definere jeg const dodger igen
const dodger = document.getElementById("dodger");
//ændre dodger farve til pink
dodger.style.backgroundColor = "#FF69B4";
//denne funktion beder dogder om at rykke til venstre
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  console.log(left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    playSoundOnMovement();
  }
  //nu afspilles lyden når man rammer væg
  if (left == 0) {
    playGameOverSound();
  }
}
/*-------------------------------------------
Øvelse 1 - få doger til højre
-------------------------------------------*/
//denne gang skal jeg lave en moveDogerRight()
//Det skal stadigvæk være left, da det kun er defineret med left i css
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  console.log(left);
  //du skal i det modsatte hjørne (180 + 180)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    playSoundOnMovement();
  }
  //nu afspilles lyden når man rammer væg
  if (left == 360) {
    playGameOverSound();
  }
}

/*-------------------------------------------
Øvelse 2 - få doger til at kører op
-------------------------------------------*/
//denne gang skal jeg lave en moveDogerUp()
//denne gang skal det være bottom da det er defineret i css
function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  console.log(bottom);
  //den er 380 høj
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
    playSoundOnMovement();
  }
  //nu afspilles lyden når man rammer væg
  if (bottom == 380) {
    playGameOverSound();
  }
}

/*-------------------------------------------
Øvelse 3 - få doger til at kører ned
-------------------------------------------*/
//denne gang skal jeg lave en moveDogerDown()
//denne gang skal det være bottom da det er defineret i css, da down ikke er defineret
function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  console.log(bottom);
  //jeg bytter om på krokodille næb for at kunne rykke ned til 0, når jeg er rykket op.
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    playSoundOnMovement();
  }
  //nu afspilles lyden når man rammer væg
  if (bottom == 0) {
    playGameOverSound();
  }
}

/*-------------------------------------------
Her er min listner til øvelse 1-3
-------------------------------------------*/
//vi sætter en listner på og nu rykker dogder til venstre, når jeg trykker på venstre piletast
document.addEventListener("keydown", function (e) {
  //dette er til venstre
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  //dette er til højre
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  //dette er til op
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  //dette er til ned
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});
