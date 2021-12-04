import { myGame } from "./game.js";
import { classObj } from "./gameBoard.js";
import { resetTools } from "./reset.js";
import { worldsBtn } from "./worlds.js";

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
  stone: {
    itemCount: 0,
    itemName: inventoryStone,
    itemNameCount: inventoryStoneCount,
    isEmpty: true,
  },
  dirt: {
    itemCount: 0,
    itemName: inventoryDirt,
    itemNameCount: inventoryDirtCount,
    isEmpty: true,
  },
  grass: {
    itemCount: 0,
    itemName: inventoryGrass,
    itemNameCount: inventoryGrassCount,
    isEmpty: true,
  },
  log: {
    itemCount: 0,
    itemName: inventoryLog,
    itemNameCount: inventoryLogCount,
    isEmpty: true,
  },
  leaves: {
    itemCount: 0,
    itemName: inventoryLeaves,
    itemNameCount: inventoryLeavesCount,
    isEmpty: true,
  },
};

inventory.addEventListener("click", (e) => {
  myGame.clickedOnInventory = true;
  myGame.isInventoryClose = false;
  resetTools();
  displayNoneInventory();
});

closeInventory.addEventListener("click", (e) => {
  myGame.isInventoryClose = true;
  displayNoneInventory();
});

function displayNoneInventory() {
  inventoryContainer.classList.toggle("display-none");
  toolsBtn.classList.toggle("display-none");
  closeInventory.classList.toggle("display-none");
  inventory.classList.toggle("display-none");
  worldsBtn.classList.toggle("display-none");
}

inventoryStone.addEventListener("click", (e) => {
  myGame.inventoryItemClickOn = inventoryObj.stone;
  myGame.inventoryItemClickOnClass = inventoryStone.classList[1];
});

inventoryDirt.addEventListener("click", (e) => {
  myGame.inventoryItemClickOn = inventoryObj.dirt;
  myGame.inventoryItemClickOnClass = inventoryDirt.classList[1];
});

inventoryGrass.addEventListener("click", (e) => {
  myGame.inventoryItemClickOn = inventoryObj.grass;
  myGame.inventoryItemClickOnClass = inventoryGrass.classList[1];
});

inventoryLog.addEventListener("click", (e) => {
  myGame.inventoryItemClickOn = inventoryObj.log;
  myGame.inventoryItemClickOnClass = inventoryLog.classList[1];
});

inventoryLeaves.addEventListener("click", (e) => {
  myGame.inventoryItemClickOn = inventoryObj.leaves;
  myGame.inventoryItemClickOnClass = inventoryLeaves.classList[1];
});

export function inventoryClasses(eTargetClass) {
  myGame.isEmptyInventory = false;
  inventory.classList.add("border--green");
  switch (eTargetClass) {
    case classObj.stone:
    case classObj.stoneDark:
      if (!inventoryObj.stone.itemCount) {
        inventoryStone.classList.add(eTargetClass);
      }
      inventoryObj.stone.itemCount++;
      inventoryStoneCount.innerText = ` ${inventoryObj.stone.itemCount}`;
      break;
    case classObj.dirt:
    case classObj.dirtDark:
      if (!inventoryObj.dirt.itemCount) {
        inventoryDirt.classList.add(eTargetClass);
      }
      inventoryObj.dirt.itemCount++;
      inventoryDirtCount.innerText = ` ${inventoryObj.dirt.itemCount}`;
      break;
    case classObj.grass:
    case classObj.grassDark:
      if (!inventoryObj.grass.itemCount) {
        inventoryGrass.classList.add(eTargetClass);
      }
      inventoryObj.grass.itemCount++;
      inventoryGrassCount.innerText = ` ${inventoryObj.grass.itemCount}`;
      break;
    case classObj.log:
    case classObj.logDark:
      if (!inventoryObj.log.itemCount) {
        inventoryLog.classList.add(eTargetClass);
      }
      inventoryObj.log.itemCount++;
      inventoryLogCount.innerText = ` ${inventoryObj.log.itemCount}`;
      break;
    case classObj.leaves:
    case classObj.leavesDark:
      if (!inventoryObj.leaves.itemCount) {
        inventoryLeaves.classList.add(eTargetClass);
      }
      inventoryObj.leaves.itemCount++;
      inventoryLeavesCount.innerText = ` ${inventoryObj.leaves.itemCount}`;
      break;
  }
}

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

export function isInventoryEmpty() {
  if (
    inventoryObj.stone.itemCount === 0 &&
    inventoryObj.dirt.itemCount === 0 &&
    inventoryObj.grass.itemCount === 0 &&
    inventoryObj.log.itemCount === 0 &&
    inventoryObj.leaves.itemCount === 0
  ) {
    myGame.isEmptyInventory = true;
    while (inventory.classList.contains("border--green")) {
      inventory.classList.remove("border--green");
    }
  } else {
    myGame.isEmptyInventory = false;
  }
}
