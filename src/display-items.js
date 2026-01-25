import { testItem, testItem2 } from "./to-do-item";
import { separateStr } from "./to-do-item-formatter";

// selecting item container
const itemContainer = document.querySelector(".item-container");

// function to display a to-do item
// - loop through the items values
// - if there is a value then add a div
const displayItems = function (item) {
  const displayItemContainer = document.createElement("div");
  displayItemContainer.classList.add("display-item-container");
  itemContainer.appendChild(displayItemContainer);

  const itemSection = document.createElement("div");
  for (const [key, value] of Object.entries(item)) {
    // console.log(`${key}: ${value}`);
    if (value) {
      itemSection.classList.add("item-section");
      displayItemContainer.appendChild(itemSection);
    }
    if (value !== undefined) {
      const itemText = document.createElement("div");
      itemText.classList.add("item-section-text");
      itemText.innerHTML = `${separateStr(key)}: ${value}`;
      itemSection.appendChild(itemText);
    }
  }
};

displayItems(testItem);

export { displayItems, itemContainer };
