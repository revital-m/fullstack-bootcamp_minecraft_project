import { myGame } from "./game.js";
import { axe, pickaxe, shovel } from "./tools.js";
import { inventory, inventoryClasses } from "./inventory.js";
import { resetInventory } from "./reset.js";

export const gameBoard = document.querySelector(".gameBoard");

export const classObj = {
    stone: "gameBoard--stone",
    dirt: "gameBoard--dirt",
    grass: "gameBoard--grass",
    log: "gameBoard--log",
    leaves: "gameBoard--leaves",
    cloud: "gameBoard--cloud",
}

export const blocksMatrix = [
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

export function draw(metrix) {
    for (let i = 0; i < metrix.length; i++) {
        for (let j = 0; j < metrix[i].length; j++) {
            const gameElement = document.createElement("div");
            switch (metrix[i][j]) {
                case 0:
                  gameElement.classList.add(classObj.stone);
                  break;
                case 1:
                  gameElement.classList.add(classObj.dirt);
                  break;
                case 2:
                  gameElement.classList.add(classObj.grass);
                  break;
                case 3:
                  gameElement.classList.add(classObj.log);
                  break;
                case 4:
                  gameElement.classList.add(classObj.leaves);
                  break;
                case 5:
                  gameElement.classList.add(classObj.cloud);
                  break;
              }
            gameBoard.appendChild(gameElement);
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