import { myGame } from "./game.js";
// import { classObj ,gameBoard } from "./gameBoard.js";
// import { inventory, inventoryClasses, resetInventory } from "./inventory.js";

export const pickaxe = document.querySelector(`button[data-tool="pickaxe"]`);
export const shovel = document.querySelector(`button[data-tool="shovel"]`);
export const axe = document.querySelector(`button[data-tool="axe"]`);

pickaxe.addEventListener("click", (event) => {
  removeActiveClass(pickaxe, shovel, axe);
  myGame.selectedTool = "pickaxe";
});

shovel.addEventListener("click", (event) => {
  removeActiveClass(shovel, pickaxe, axe);
  myGame.selectedTool = "shovel";
});

axe.addEventListener("click", (event) => {
  removeActiveClass(axe, shovel, pickaxe);
  myGame.selectedTool = "axe";
});

// gameBoard.addEventListener("click", (e) => {
//   switch (myGame.selectedTool) {
//     case "pickaxe":
//       if (e.target.classList.value === classObj.stone) {
//         inventoryClasses(e.target.classList.value);
//         pickaxe.classList.remove("border--red");
//         e.target.classList = "";
//       } else pickaxe.classList.add("border--red");
//       break;

//     case "shovel":
//       if (
//         e.target.classList.value === classObj.dirt ||
//         e.target.classList.value === classObj.grass
//       ) {
//         inventoryClasses(e.target.classList.value);
//         shovel.classList.remove("border--red");
//         e.target.classList = "";
//       } else shovel.classList.add("border--red");
//       break;

//     case "axe":
//       if (
//         e.target.classList.value === classObj.log ||
//         e.target.classList.value === classObj.leaves
//       ) {
//         inventoryClasses(e.target.classList.value);
//         axe.classList.remove("border--red");
//         e.target.classList = "";
//       } else axe.classList.add("border--red");
//       break;
//   }

//   if (myGame.clickedOnInventory && !myGame.isEmptyInventory) {
//     e.target.classList = "";
//     e.target.classList.add(`${inventory.classList.value}`);
//     resetInventory();
//   }
// });

// moving the active class to the selected tool
function removeActiveClass(eTarget, tool1, tool2) {
  removeUnactiveClass(eTarget, tool1, tool2);
  eTarget.classList.add("border--blue");
  tool1.classList.remove("border--blue");
  tool2.classList.remove("border--blue");
}

function removeUnactiveClass(eTarget, tool1, tool2) {
  eTarget.classList.remove("border--red");
  tool1.classList.remove("border--red");
  tool2.classList.remove("border--red");
}
