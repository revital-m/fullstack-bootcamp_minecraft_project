import { myGame } from "./game.js";
import { resetToolsBorder } from "./reset.js";
// import { axe, pickaxe, shovel } from "./tools.js";

export const inventory = document.querySelector(`#inventory`);

inventory.addEventListener("click", (event) => {
  myGame.clickedOnInventory = true;
  if (!inventory.classList.value) {
    myGame.isEmptyInventory = true;
  } else {
    myGame.isEmptyInventory = false;
  }
  resetToolsBorder();
});

export function inventoryClasses(eTargetClass) {
  inventory.classList = "";
  inventory.classList.add(`${eTargetClass}`);
}


