import { myGame } from "./game.js";

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
