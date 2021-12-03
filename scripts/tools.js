import { myGame } from "./game.js";

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
