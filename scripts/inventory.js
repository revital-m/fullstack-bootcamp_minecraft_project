import { myGame } from "./game.js";
import {} from "./gameBoard.js";
import { resetGameBtn, resetTools } from "./reset.js";
import { worldsBtn } from "./worlds.js";

//************************************************** variables: **************************************************
const inventoryStone = document.querySelector(`[data-inventory="stone"]`);
const inventoryDirt = document.querySelector(`[data-inventory="dirt"]`);
const inventoryGrass = document.querySelector(`[data-inventory="grass"]`);
const inventoryLog = document.querySelector(`[data-inventory="log"]`);
const inventoryLeaves = document.querySelector(`[data-inventory="leaves"]`);
const inventoryStoneCount = document.querySelector(
  `[data-inventoryCount="stone"]`
);
const inventoryDirtCount = document.querySelector(
  `[data-inventoryCount="dirt"]`
);
const inventoryGrassCount = document.querySelector(
  `[data-inventoryCount="grass"]`
);
const inventoryLogCount = document.querySelector(`[data-inventoryCount="log"]`);
const inventoryLeavesCount = document.querySelector(
  `[data-inventoryCount="leaves"]`
);

export const inventory = document.querySelector(`#inventory`);
export const inventoryContainer = document.querySelector(`.inventoryContainer`);
export const toolsBtn = document.querySelector(`[dtat-id="btnInfo__tools"]`);
export const closeInventory = document.querySelector(`.closeInventory`);

export const inventoryObj = {
  "gameBoard--stone": {
    itemCount: 0,
    itemName: inventoryStone,
    itemNameCount: inventoryStoneCount,
    isEmpty: true,
  },
  "gameBoard--dirt": {
    itemCount: 0,
    itemName: inventoryDirt,
    itemNameCount: inventoryDirtCount,
    isEmpty: true,
  },
  "gameBoard--grass": {
    itemCount: 0,
    itemName: inventoryGrass,
    itemNameCount: inventoryGrassCount,
    isEmpty: true,
  },
  "gameBoard--log": {
    itemCount: 0,
    itemName: inventoryLog,
    itemNameCount: inventoryLogCount,
    isEmpty: true,
  },
  "gameBoard--leaves": {
    itemCount: 0,
    itemName: inventoryLeaves,
    itemNameCount: inventoryLeavesCount,
    isEmpty: true,
  },
};

//************************************************** functions: **************************************************
// click to open the inventory.
inventory.addEventListener("click", (e) => {
  myGame.clickedOnInventory = true;
  myGame.isInventoryClose = false;
  resetTools();
  displayNoneInventory();
});

// click to close the inventory.
closeInventory.addEventListener("click", (e) => {
  myGame.isInventoryClose = true;
  displayNoneInventory();
});

// add & remove the class 'display-none' as necessary.
function displayNoneInventory() {
  inventoryContainer.classList.toggle("display-none");
  toolsBtn.classList.toggle("display-none");
  closeInventory.classList.toggle("display-none");
  inventory.classList.toggle("display-none");
  worldsBtn.classList.toggle("display-none");
  resetGameBtn.classList.toggle("display-none");
}

// create an event listener for each inventory btn.
(function createInventoryEventListeners() {
  for (const type in inventoryObj) {
    const name = inventoryObj[type].itemName;
    name.addEventListener("click", (e) => {
      myGame.inventoryItemClickOn = inventoryObj[type];
      myGame.inventoryItemClickOnClass = name.classList[1];
    });
  }
})();

// add an item to the inventory, increase the amount of this item type.
export function inventoryClasses(eTargetClass) {
  myGame.isEmptyInventory = false;
  inventory.classList.add("border--green");

  let inventoryClass = eTargetClass[0];
  if (myGame.worldMetrixBackground === "gameBoard--dark-bg") {
    inventoryClass = eTargetClass[1];
  }

  for (const type in inventoryObj) {
    if (type === inventoryClass) {
      if (!inventoryObj[type].itemCount) {
        inventoryObj[type].itemName.classList.add(inventoryClass);
      }
      inventoryObj[type].itemCount++;
      inventoryObj[type].itemNameCount.innerText = ` ${inventoryObj[type].itemCount}`;
    }
  }
}

// remove an item from the inventory.
export function removeItemFromInventory(item) {
  if (item.itemCount > 1) {
    item.itemCount--;
  } else if (item.itemCount === 1) {
    item.itemCount = 0;
    item.isEmpty = true;
    item.itemName.classList = "";
    item.itemName.classList.add("inventory");
  }
  item.itemNameCount.innerText = ` ${item.itemCount}`;
}

// check if the inventory is empty.
export function isInventoryEmpty() {
  if (
    inventoryObj["gameBoard--stone"].itemCount === 0 &&
    inventoryObj["gameBoard--dirt"].itemCount === 0 &&
    inventoryObj["gameBoard--grass"].itemCount === 0 &&
    inventoryObj["gameBoard--log"].itemCount === 0 &&
    inventoryObj["gameBoard--leaves"].itemCount === 0
  ) {
    myGame.isEmptyInventory = true;
    while (inventory.classList.contains("border--green")) {
      inventory.classList.remove("border--green");
    }
  } else {
    myGame.isEmptyInventory = false;
  }
}
