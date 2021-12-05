import { myGame } from "./game.js";
import { isCorrectTool } from "./tools.js";
import {
  inventoryClasses,
  isInventoryEmpty,
  removeItemFromInventory,
} from "./inventory.js";

//************************************************** variables: **************************************************
export const gameBoard = document.querySelector("#gameBoard");
export const classArr = [
  "filterDark",
  "gameBoard--stone",
  "gameBoard--dirt",
  "gameBoard--grass",
  "gameBoard--log",
  "gameBoard--leaves",
  "gameBoard--cloud",
];

//************************************************** functions: **************************************************
// draw the board game with the choosen metrix.
export function draw(metrix) {
  gameBoard.classList = "";
  gameBoard.classList.add(`${myGame.worldMetrixBackground}`);
  for (let i = 0; i < metrix.length; i++) {
    for (let j = 0; j < metrix[i].length; j++) {
      const gameElement = document.createElement("div");

      if (metrix[i][j] > 0 && metrix[i][j] < classArr.length) {
        if (myGame.worldMetrixBackground === "gameBoard--dark-bg") {
          gameElement.classList.add(classArr[0]);
        }
        gameElement.classList.add(classArr[metrix[i][j]]);
      }
      gameBoard.appendChild(gameElement);
    }
  }
}

// click on the game board, call a function to add the itme to the inventory as necessary, add an item back to the game board.
gameBoard.addEventListener("click", (e) => {
  if (myGame.isInventoryClose) {
    if (isCorrectTool(e.target.classList)) {
      inventoryClasses(e.target.classList);
      e.target.classList = "";
      if (myGame.selectedTool.classList.contains("border--red")) {
        myGame.selectedTool.classList.remove("border--red");
      }
    } else {
      myGame.selectedTool.classList.add("border--red");
    }
  }
  if (
    myGame.clickedOnInventory &&
    myGame.inventoryItemClickOn &&
    myGame.inventoryItemClickOnClass &&
    (e.target.classList.value === "" ||
      (e.target.classList.value === "filterDark" &&
        e.target.classList.length === 1))
  ) {
    e.target.classList = "";
    if (myGame.worldMetrixBackground === "gameBoard--dark-bg") {
      e.target.classList.add(classArr[0]);
    }
    e.target.classList.add(`${myGame.inventoryItemClickOnClass}`);
    removeItemFromInventory(myGame.inventoryItemClickOn);
    myGame.inventoryItemClickOnClass = "";
    myGame.inventoryItemClickOn = "";
  }

  isInventoryEmpty();
});
