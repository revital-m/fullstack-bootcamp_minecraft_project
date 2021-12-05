import { myGame } from "./game.js";
import { axe, pickaxe, shovel } from "./tools.js";
import {
  inventoryClasses,
  isInventoryEmpty,
  removeItemFromInventory,
} from "./inventory.js";
import { lightMatrix, nightMatrix } from "./worlds.js";

export const gameBoard = document.querySelector("#gameBoard");

export const classObj = {
  stone: "gameBoard--stone",
  dirt: "gameBoard--dirt",
  grass: "gameBoard--grass",
  log: "gameBoard--log",
  leaves: "gameBoard--leaves",
  cloud: "gameBoard--cloud",
  stoneDark: "gameBoard--stone-dark",
  dirtDark: "gameBoard--dirt-dark",
  grassDark: "gameBoard--grass-dark",
  logDark: "gameBoard--log-dark",
  leavesDark: "gameBoard--leaves-dark",
  cloudDark: "gameBoard--cloud-dark",
};

export const classObj2 = ["filterDark","gameBoard--stone","gameBoard--dirt","gameBoard--grass","gameBoard--log","gameBoard--leaves","gameBoard--cloud"];

export function draw(metrix) {
  gameBoard.classList = "";
  gameBoard.classList.add(`${myGame.worldMetrixBackground}`);
  for (let i = 0; i < metrix.length; i++) {
    for (let j = 0; j < metrix[i].length; j++) {
      const gameElement = document.createElement("div");

      if (metrix[i][j] > 0 && metrix[i][j] < classObj2.length) {
        gameElement.classList.add(classObj2[metrix[i][j]]);
        if (myGame.worldMetrixBackground === "gameBoard--dark-bg") {
          gameElement.classList.add(classObj2[0]);
        }
      }
      gameBoard.appendChild(gameElement);
    }
  }
}

// export function draw(metrix) {
//   gameBoard.classList = "";
//   gameBoard.classList.add(`${myGame.worldMetrixBackground}`);
//   for (let i = 0; i < metrix.length; i++) {
//     for (let j = 0; j < metrix[i].length; j++) {
//       const gameElement = document.createElement("div");
//       switch (metrix[i][j]) {
//         case 1:
//           gameElement.classList.add(classObj.stone);
//           break;
//         case 2:
//           gameElement.classList.add(classObj.dirt);
//           break;
//         case 3:
//           gameElement.classList.add(classObj.grass);
//           break;
//         case 4:
//           gameElement.classList.add(classObj.log);
//           break;
//         case 5:
//           gameElement.classList.add(classObj.leaves);
//           break;
//         case 6:
//           gameElement.classList.add(classObj.cloud);
//           break;
//         case 7:
//           gameElement.classList.add(classObj.stoneDark);
//           break;
//         case 8:
//           gameElement.classList.add(classObj.dirtDark);
//           break;
//         case 9:
//           gameElement.classList.add(classObj.grassDark);
//           break;
//         case 10:
//           gameElement.classList.add(classObj.logDark);
//           break;
//         case 11:
//           gameElement.classList.add(classObj.leavesDark);
//           break;
//         case 12:
//           gameElement.classList.add(classObj.cloudDark);
//           break;
//       }
//       gameBoard.appendChild(gameElement);
//     }
//   }
// }

gameBoard.addEventListener("click", (e) => {
  if (myGame.isInventoryClose) {
    switch (myGame.selectedTool) {
      case "pickaxe":
        if (
          e.target.classList.value === classObj.stone ||
          e.target.classList.value === classObj.stoneDark
        ) {
          inventoryClasses(e.target.classList.value);
          pickaxe.classList.remove("border--red");
          e.target.classList = "";
        } else pickaxe.classList.add("border--red");
        break;

      case "shovel":
        if (
          e.target.classList.value === classObj.dirt ||
          e.target.classList.value === classObj.grass ||
          e.target.classList.value === classObj.dirtDark ||
          e.target.classList.value === classObj.grassDark
        ) {
          inventoryClasses(e.target.classList.value);
          shovel.classList.remove("border--red");
          e.target.classList = "";
        } else shovel.classList.add("border--red");
        break;

      case "axe":
        if (
          e.target.classList.value === classObj.log ||
          e.target.classList.value === classObj.leaves ||
          e.target.classList.value === classObj.logDark ||
          e.target.classList.value === classObj.leavesDark
        ) {
          inventoryClasses(e.target.classList.value);
          axe.classList.remove("border--red");
          e.target.classList = "";
        } else axe.classList.add("border--red");
        break;
    }
  }
  if (
    myGame.clickedOnInventory &&
    myGame.inventoryItemClickOn &&
    myGame.inventoryItemClickOnClass && (e.target.classList.value !== classObj.stone &&
      e.target.classList.value !== classObj.stoneDark &&
      e.target.classList.value !== classObj.dirt &&
      e.target.classList.value !== classObj.grass &&
      e.target.classList.value !== classObj.dirtDark &&
      e.target.classList.value !== classObj.grassDark &&
      e.target.classList.value !== classObj.log &&
      e.target.classList.value !== classObj.leaves &&
      e.target.classList.value !== classObj.logDark &&
      e.target.classList.value !== classObj.leavesDark &&
      e.target.classList.value !== classObj.cloud &&
      e.target.classList.value !== classObj.cloudDark)
  ) {
      e.target.classList = "";
      e.target.classList.add(`${myGame.inventoryItemClickOnClass}`);
      removeItemFromInventory(myGame.inventoryItemClickOn);
      myGame.inventoryItemClickOnClass = "";
      myGame.inventoryItemClickOn = "";
  }

  isInventoryEmpty();
});
