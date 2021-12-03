import { myGame } from "./game.js";

export const inventory = document.querySelector(`.inventory`);

inventory.addEventListener("click", (event) => {
  myGame.clickedOnInventory = true;
  if (!inventory.classList.value) {
    myGame.isEmptyInventory = true;
  } 
  else {
    myGame.isEmptyInventory = false;
  } 
});
