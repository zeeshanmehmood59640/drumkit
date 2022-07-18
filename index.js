"using strict";

const buttons = document.querySelectorAll(".drum");

const lenght = buttons.length;
// const audio = new Audio("tom-1.mp3");
// document.querySelector(".drum").addEventListener("click", function () {
//   audio.play();
// });
for (let i = 0; i < lenght; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonText = this.innerHTML;
    makeSound(buttonText);
    addAnimation(buttonText);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  addAnimation(event.key);
});
function makeSound(event) {
  switch (event) {
    case "w":
      const audioW = new Audio("tom-1.mp3");
      audioW.play();
      break;
    case "a":
      const audioA = new Audio("tom-2.mp3");
      audioA.play();
      break;
    case "s":
      const audioS = new Audio("tom-3.mp3");
      audioS.play();
      break;
    case "d":
      const audioD = new Audio("tom-4.mp3");
      audioD.play();
      break;
    case "j":
      const audioJ = new Audio("crash.mp3");
      audioJ.play();
      break;
    case "k":
      const audioK = new Audio("kick-bass.mp3");
      audioK.play();
      break;
    case "l":
      const audioL = new Audio("snare.mp3");
      audioL.play();
      break;
    default:
  }
}
function addAnimation(key) {
  const btn = document.querySelector("." + key);
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 100);
}
