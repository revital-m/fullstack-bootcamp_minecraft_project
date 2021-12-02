import { draw } from "../scripts/playScreen.js";

const landingPage = document.querySelector(".landingPage");
const game = document.querySelector(".game");
const startBtn = document.querySelector(".landingPage--startBtn");
const playScreen = document.querySelector(".game__playScreen");
const inventory = document.querySelector(".game__inventory");

startBtn.addEventListener("click", () => {
    landingPage.classList.toggle("display-none");
    game.classList.toggle("display-none");
    draw();
});