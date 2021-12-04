import { myGame } from "./game.js";
import { draw, gameBoard } from "./gameBoard.js";
import {
  closeInventory,
  inventory,
  inventoryContainer,
  inventoryObj,
  isInventoryEmpty,
  toolsBtn,
} from "./inventory.js";
import { pickaxe, shovel, axe } from "./tools.js";
import { lightMatrix , nightMatrix } from "./worlds.js";

export const resetGameBtn = document.querySelector(".btn--reset");

resetGameBtn.addEventListener("click", (e) => {
  gameBoard.innerHTML = "";
  draw(myGame.worldMetrix);
  gameBoard.classList = "";
  gameBoard.classList.add(`${myGame.worldMetrixBackground}`);

  resetTools();
  resetInventory();
});

export function resetTools() {
  myGame.selectedTool = "";
  pickaxe.classList.remove("border--red");
  pickaxe.classList.remove("border--blue");
  shovel.classList.remove("border--red");
  shovel.classList.remove("border--blue");
  axe.classList.remove("border--red");
  axe.classList.remove("border--blue");
}

export function resetInventory() {
  myGame.clickedOnInventory = false;
  myGame.inventoryItemClickOn = "";
  myGame.inventoryItemClickOnClass = "";
  resetItemInInventory(inventoryObj.stone);
  resetItemInInventory(inventoryObj.dirt);
  resetItemInInventory(inventoryObj.grass);
  resetItemInInventory(inventoryObj.log);
  resetItemInInventory(inventoryObj.leaves);
  isInventoryEmpty();
  if (!inventoryContainer.classList.contains("display-none")) {
    inventoryContainer.classList.add("display-none");
  }
  if (toolsBtn.classList.contains("display-none")) {
    toolsBtn.classList.remove("display-none");
  }
  if (!closeInventory.classList.contains("display-none")) {
    closeInventory.classList.add("display-none");
  }
  if (inventory.classList.contains("display-none")) {
    inventory.classList.remove("display-none");
  }
}

function resetItemInInventory(item) {
  item.itemCount = 0;
  item.isEmpty = true;
  item.itemName.classList = "";
  item.itemName.classList.add("inventory");
  item.itemNameCount.innerText = ` ${item.itemCount}`;
}
