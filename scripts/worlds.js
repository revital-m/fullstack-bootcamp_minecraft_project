import { myGame } from "./game.js";
import { draw } from "./gameBoard.js";
import { inventory, toolsBtn } from "./inventory.js";
import { resetGameBtn, resetInventory, resetTools } from "./reset.js";

//************************************************** variables: **************************************************
export const worldsBtn = document.querySelector(".worlds");
const worldsContainer = document.querySelector('[dtat-id="worlds-container"]');
const lightMode = document.querySelector('[data-world="lightMode"]');
const darkMode = document.querySelector('[data-world="darkMode"]');

export const worldBGArr = [
  {
    bgClass: "gameBoard--light-bg",
    worldName: lightMode,
  },
  {
    bgClass: "gameBoard--dark-bg",
    worldName: darkMode,
  },
];

export const lightMatrix = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,-1,],
  [-1, -1, 6, 6, 6, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 6, 6, 6, 6, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,-1,],
  [-1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 5, 5, -1, -1],
  [-1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 5, 5, -1, -1],
  [-1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 5, 5, -1, -1],
  [-1, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, -1, -1,-1,],
  [3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

//************************************************** functions: **************************************************
// click on the worldsBtn to choose a world.
worldsBtn.addEventListener("click", (e) => {
  inventory.classList.toggle("display-none");
  toolsBtn.classList.toggle("display-none");
  displayNoneWorld();
});

// create an event listener for each world btn.
(function createWorldEventListeners() {
  worldBGArr.forEach((world) => {
    world.worldName.addEventListener("click", (e) => {
      myGame.worldMetrixBackground = world.bgClass;
      buildWorld();
    });
  });
})();

// build choosen world.
function buildWorld() {
  gameBoard.innerHTML = "";
  draw(myGame.worldMetrix);
  resetTools();
  resetInventory();
  displayNoneWorld();
}

// add & remove the class 'display-none' as necessary.
function displayNoneWorld() {
  worldsContainer.classList.toggle("display-none");
  worldsBtn.classList.toggle("display-none");
  resetGameBtn.classList.toggle("display-none");
}
