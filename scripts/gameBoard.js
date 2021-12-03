import { myGame } from "./game.js";
import { axe, pickaxe, shovel } from "./tools.js";
import { inventory, inventoryClasses, resetInventory } from "./inventory.js";

export const gameBoard = document.querySelector(".gameBoard");

export const classObj = {
    stone: "gameBoard--stone",
    dirt: "gameBoard--dirt",
    grass: "gameBoard--grass",
    log: "gameBoard--log",
    leaves: "gameBoard--leaves",
    cloud: "gameBoard--cloud",
}

const blocksMatrix = [
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6,],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 6,],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 6, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 4, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6,],
    [6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6,],
    [6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 6, 6, 6,],
    [2 ,2 ,1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
];

export function draw() {
    for (let i = 0; i < blocksMatrix.length; i++) {
        for (let j = 0; j < blocksMatrix[i].length; j++) {
            const block = document.createElement("div");
            switch (blocksMatrix[i][j]) {
                case 0:
                  block.classList.add(classObj.stone);
                  break;
                case 1:
                  block.classList.add(classObj.dirt);
                  break;
                case 2:
                  block.classList.add(classObj.grass);
                  break;
                case 3:
                  block.classList.add(classObj.log);
                  break;
                case 4:
                  block.classList.add(classObj.leaves);
                  break;
                case 5:
                  block.classList.add(classObj.cloud);
                  break;
              }
            gameBoard.appendChild(block);
        }
    }
}


gameBoard.addEventListener("click", (e) => {
  switch (myGame.selectedTool) {
    case "pickaxe":
      if (e.target.classList.value === classObj.stone) {
        inventoryClasses(e.target.classList.value);
        pickaxe.classList.remove("border--red");
        e.target.classList = "";
      } else pickaxe.classList.add("border--red");
      break;

    case "shovel":
      if (
        e.target.classList.value === classObj.dirt ||
        e.target.classList.value === classObj.grass
      ) {
        inventoryClasses(e.target.classList.value);
        shovel.classList.remove("border--red");
        e.target.classList = "";
      } else shovel.classList.add("border--red");
      break;

    case "axe":
      if (
        e.target.classList.value === classObj.log ||
        e.target.classList.value === classObj.leaves
      ) {
        inventoryClasses(e.target.classList.value);
        axe.classList.remove("border--red");
        e.target.classList = "";
      } else axe.classList.add("border--red");
      break;
  }

  if (myGame.clickedOnInventory && !myGame.isEmptyInventory) {
    e.target.classList = "";
    e.target.classList.add(`${inventory.classList.value}`);
    resetInventory();
  }
});