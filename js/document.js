// CONTAINERS
const one       = document.querySelector(".containerOne");
const two       = document.querySelector(".containerTwo");
const three     = document.querySelector(".containerThree");
const four      = document.querySelector(".containerFour")
// BUTTON
const next      = document.querySelector(".containerRules button");
const play      = document.querySelector(".containerRondas button");
const nextRound = document.getElementById("nextRound")
// INPUT
const rounds    = document.querySelector(".containerRondas input");
const count     = document.getElementById("count");
const winner    = document.getElementById("message")
// IMAGES
const images    = document.querySelectorAll(".imageThree");
const finalImg  = document.querySelectorAll(".imgFour");
// SRC IMAGES
const srcImages = [
  "./public/piedra.png",
  "./public/papel.png",
  "./public/tijera.png",
  "./public/lagarto.png",
  "./public/spock.png"
];
//------------------------------------------------------------------------
next.addEventListener("click", () => {
  one.setAttribute("style", "display: none;");
  two.classList.remove("hidden");
});
play.addEventListener("click", () => {
  two.setAttribute("style", "display: none;");
  three.classList.remove("hidden");
  new Game(rounds.value);
});
//------------------------------------------------------------------------

