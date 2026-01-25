import { createPriorityBtns } from "./priority-status";
import { toDoItem } from "./to-do-item";

const itemFormContainer = document.createElement("div");
const addNoteBtn = document.querySelector(".addNoteBtn");
const itemForm = document.createElement("form");

const addNote = function () {
  addNoteBtn.addEventListener("click", (e) => {
    const clicked = e.target;

    const itemFormTitle = document.createElement("input");
    itemFormTitle.setAttribute("type", "text");
    itemFormTitle.setAttribute("title", "Title");
    itemFormTitle.setAttribute("placeholder", "Enter task...");
    itemFormTitle.setAttribute("required", true);
    itemFormTitle.setAttribute("id", "item-form-title");

    const itemFormDesc = document.createElement("input");
    itemFormDesc.setAttribute("type", "text");
    itemFormDesc.setAttribute("title", "Description");
    itemFormDesc.setAttribute("placeholder", "Enter description...");
    itemFormDesc.setAttribute("id", "item-form-desc");

    const itemFormDueDate = document.createElement("input");
    itemFormDueDate.setAttribute("type", "date");
    itemFormDueDate.setAttribute("title", "Due Date");
    itemFormDueDate.setAttribute("placeholder", "Enter date...");
    itemFormDueDate.setAttribute("id", "item-form-due-date");

    createPriorityBtns();

    const itemFormNotes = document.createElement("input");
    itemFormNotes.setAttribute("type", "text");
    itemFormNotes.setAttribute("title", "Notes");
    itemFormNotes.setAttribute("placeholder", "Anything to note?...");
    itemFormNotes.setAttribute("id", "item-form-notes");

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");

    itemForm.appendChild(itemFormTitle);
    itemForm.appendChild(itemFormDesc);
    itemForm.appendChild(itemFormDueDate);
    itemForm.appendChild(itemFormNotes);
    itemForm.appendChild(submitButton);

    //TODO: create logic to pass form data into new to do item constructor
  });
};

export { addNote, itemFormContainer, itemForm };
