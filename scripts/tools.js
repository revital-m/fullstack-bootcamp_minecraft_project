import { myGame } from "./game.js";

//************************************************** variables: **************************************************
export const toolsObj = {
  pickaxe: {
    src: "./assets/img/pickaxe.png",
    active: ["gameBoard--stone"],
  },
  shovel: {
    src: "./assets/img/shovel.png",
    active: ["gameBoard--dirt", "gameBoard--grass"],
  },
  axe: {
    src: "./assets/img/axe.png",
    active: ["gameBoard--log", "gameBoard--leaves"],
  },
};

const btnInfoTools = document.querySelector('[dtat-id="btnInfo__tools"]');

//************************************************** functions: **************************************************
// build & add the tools to html.
(function buildTools() {
  for (const key in toolsObj) {
    const tool = document.createElement("button");
    tool.setAttribute("data-tool", `${key}`);
    tool.classList.add("btn", "btn-hover");
    const imgTool = document.createElement("img");
    imgTool.setAttribute("src", `${toolsObj[key].src}`);
    imgTool.setAttribute("alt", `${key}`);

    const pTool = document.createElement("p");
    pTool.innerText += `${key}`;
    tool.appendChild(imgTool);
    tool.appendChild(pTool);
    btnInfoTools.appendChild(tool);
  }
})();

export const pickaxe = document.querySelector(`button[data-tool="pickaxe"]`);
export const shovel = document.querySelector(`button[data-tool="shovel"]`);
export const axe = document.querySelector(`button[data-tool="axe"]`);

// click on the tool to use it.
pickaxe.addEventListener("click", (event) => {
  removeActiveClass(pickaxe, shovel, axe);
  myGame.selectedTool = pickaxe;
  myGame.toolName = "pickaxe";
});

// click on the tool to use it.
shovel.addEventListener("click", (event) => {
  removeActiveClass(shovel, pickaxe, axe);
  myGame.selectedTool = shovel;
  myGame.toolName = "shovel";
});

// click on the tool to use it.
axe.addEventListener("click", (event) => {
  removeActiveClass(axe, shovel, pickaxe);
  myGame.selectedTool = axe;
  myGame.toolName = "axe";
});

// add the blue border to the selected tool and remove it from all the other tools.
function removeActiveClass(eTarget, tool1, tool2) {
  removeUnactiveClass(eTarget, tool1, tool2);
  eTarget.classList.add("border--blue");
  tool1.classList.remove("border--blue");
  tool2.classList.remove("border--blue");
}

// remove the red border from all the tools.
function removeUnactiveClass(eTarget, tool1, tool2) {
  eTarget.classList.remove("border--red");
  tool1.classList.remove("border--red");
  tool2.classList.remove("border--red");
}

// check if the tool & the item are a match.
export function isCorrectTool(eTargetClass) {
  let toolClass = eTargetClass[0];
  if (myGame.worldMetrixBackground === "gameBoard--dark-bg") {
    toolClass = eTargetClass[1];
  }
  return toolsObj[`${myGame.toolName}`].active.includes(`${toolClass}`);
}
