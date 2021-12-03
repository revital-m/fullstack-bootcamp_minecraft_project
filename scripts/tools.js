import { myGame, gameBoard } from "./game.js";
import { classObj } from "./gameBoard.js";
import { inventory } from "./inventory.js";

const pickaxe = document.querySelector(`button[data-tool="pickaxe"]`);
const shovel = document.querySelector(`button[data-tool="shovel"]`);
const axe = document.querySelector(`button[data-tool="axe"]`);


pickaxe.addEventListener("click", (event) => {
  //   removeActiveClass(pickaxe, shovel, axe);
  myGame.selectedTool = "pickaxe";
  pickaxe.classList.add("border--red");
});

shovel.addEventListener("click", (event) => {
  //   removeActiveClass(shovel, pickaxe, axe);
  myGame.selectedTool = "shovel";
  shovel.classList.add("border--red");
});

axe.addEventListener("click", (event) => {
  //    removeActiveClass(axe, shovel, pickaxe);
  myGame.selectedTool = "axe";
  axe.classList.add("border--red");
});

gameBoard.addEventListener("click", (e) => {
  switch (myGame.selectedTool) {
    case "pickaxe":
      if (e.target.classList.value === classObj.stone) {
        // inventoryClasses(e.target.classList.value);
        pickaxe.classList.remove("border--red");
        e.target.classList = '';
        // turnBlue("blue", e.target);
      } else pickaxe.classList.add("border--red");
      break;

    case "shovel":
      if (
        e.target.classList.value === classObj.dirt ||
        e.target.classList.value === classObj.grass
      ) {
        // inventoryClasses(e.target.classList.value);
        shovel.classList.remove("border--red");
        e.target.classList = '';
        // turnBlue("blue", e.target);
      } else shovel.classList.add("border--red");
      break;

    case "axe":
      if (
        e.target.classList.value === classObj.log ||
        e.target.classList.value === classObj.leaves
      ) {
        // inventoryClasses(e.target.classList.value);
        axe.classList.remove("border--red");
        e.target.classList = '';
        // turnBlue("blue", e.target);
      } else axe.classList.add("border--red");
      break;
  }

  if (myGame.clickedOnInventory && !myGame.isEmptyInventory) {
    e.target.classList = '';
    e.target.classList.add(`${inventory.classList.value}`);
    // resetInventory();
  }
});
