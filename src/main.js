import "./style.css";
import "./to-do-item.js";
import "./display-items.js";
import "./add-reminder.js";
import { addNote } from "./add-reminder.js";

const container = document.querySelector(".container");
const itemContainer = document.querySelector(".item-container");
const sidebar = document.querySelector(".sidebar");
const addNoteBtn = document.querySelector(".addNoteBtn");

addNote();

export { container, itemContainer, sidebar, addNoteBtn };
