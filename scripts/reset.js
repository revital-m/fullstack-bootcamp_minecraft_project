import { myGame } from "./game.js";
import { blocksMatrix, draw, gameBoard } from "./gameBoard.js";
import { inventory } from "./inventory.js";
import { pickaxe, shovel, axe } from "./tools.js";

const resetGameBtn = document.querySelector('.btn--reset');

resetGameBtn.addEventListener('click', (e) => {

    gameBoard.innerHTML = "";
    draw(blocksMatrix);
    resetToolsBorder();
    resetInventory();
});

export function resetToolsBorder() {
  pickaxe.classList.remove("border--red");
  pickaxe.classList.remove("border--blue");
  shovel.classList.remove("border--red");
  shovel.classList.remove("border--blue");
  axe.classList.remove("border--red");
  axe.classList.remove("border--blue");
}

export function resetInventory() {
  inventory.classList = "";
  myGame.clickedOnInventory = false;
  myGame.isEmptyInventory = true;
}
