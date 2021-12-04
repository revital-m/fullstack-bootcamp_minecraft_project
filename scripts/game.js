import { draw, gameBoard } from "./gameBoard.js";
import {} from "./inventory.js";
import {} from "./reset.js";
import {} from "./tools.js";
import { lightMatrix, nightMatrix } from "./worlds.js";

const landingPage = document.querySelector(".landingPage");
const startBtn = document.querySelector(".landingPage--startBtn");

export let myGame = {
  selectedTool: "",
  clickedOnInventory: false,
  isEmptyInventory: true,
  inventoryItemClickOn: "",
  inventoryItemClickOnClass: "",
  isInventoryClose: true,
  worldMetrix: lightMatrix,
  worldMetrixBackground: "gameBoard--light-bg",
};

startBtn.addEventListener("click", () => {
  landingPage.classList.toggle("display-none");
  gameBoard.classList.toggle("display-none");
  draw(myGame.worldMetrix);
});
