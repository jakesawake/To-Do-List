import { testItem } from "./to-do-item";

// helper function to add space between letters
const separateStr = function (str) {
  return (
    str.charAt(0).toUpperCase() +
    str
      .slice(1)
      .replace(/([A-Z])/g, " $1")
      .trim()
  );
};

// create function to format item name
const format = function (item) {
  for (const key in item) {
    const label = document.createElement("div");
    label.textContent = key;
    const fixedStr = separateStr(label.textContent);
    console.log(fixedStr);
  }
};

format(testItem);

export { format, separateStr };
