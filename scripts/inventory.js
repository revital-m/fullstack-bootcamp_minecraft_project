import { myGame } from "./game.js";

export const inventory = document.querySelector(`.inventory`);

inventory.addEventListener("click", (event) => {
  myGame.clickedOnInventory = true;
  if (!inventory.classList.value) {
    myGame.isEmptyInventory = true;
  } else {
    myGame.isEmptyInventory = false;
  }
});

export function inventoryClasses(eTargetClass) {
  inventory.classList = "";
  inventory.classList.add(`${eTargetClass}`);
}

export function resetInventory() {
  inventory.classList = "";
  myGame.clickedOnInventory = false;
  myGame.isEmptyInventory = true;
}
