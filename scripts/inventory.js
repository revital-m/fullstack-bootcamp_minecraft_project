import { myGame } from "./game.js";
import { axe, pickaxe, shovel } from "./tools.js";

export const inventory = document.querySelector(`#inventory`);

inventory.addEventListener("click", (event) => {
  myGame.clickedOnInventory = true;
  if (!inventory.classList.value) {
    myGame.isEmptyInventory = true;
  } else {
    myGame.isEmptyInventory = false;
  }
  pickaxe.classList.remove("border--red");
  pickaxe.classList.remove("border--blue");
  shovel.classList.remove("border--red");
  shovel.classList.remove("border--blue");
  axe.classList.remove("border--red");
  axe.classList.remove("border--blue");
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
