// if hot reload doesn't work use the code below
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR updated main.js");
  });
}
import "./style.css";
import "./to-do-item.js";
import "./add-item.js";
import "./display-items.js";
import "./to-do-item-formatter.js";
import { addNote } from "./add-item.js";

addNote();
