import { draw } from "./gameBoard.js";
import {  } from "./inventory.js";
import {  } from "./reset.js";
import {  } from "./tools.js";

const landingPage = document.querySelector(".landingPage");
const gameBoard = document.querySelector(".gameBoard");
const startBtn = document.querySelector(".landingPage--startBtn");

export let myGame = {
  selectedTool: "",
  clickedOnInventory: false,
  isEmptyInventory: true,
};

startBtn.addEventListener("click", () => {
  landingPage.classList.toggle("display-none");
  gameBoard.classList.toggle("display-none");
  draw();
});


