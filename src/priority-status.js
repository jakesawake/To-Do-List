import { itemForm } from "./add-item";
import { itemContainer } from "./display-items";

const priorities = ["low", "medium", "high"];

const createPriorityBtns = function () {
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add("priority-fieldset");
  const legend = document.createElement("legend");
  legend.classList.add("priority-legend");
  legend.textContent = "Task Priority";
  fieldset.appendChild(legend);

  priorities.forEach((priority) => {
    const label = document.createElement("label");
    label.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    const input = document.createElement("input");
    input.type = "radio";
    input.id = priority;
    input.name = "task_priority";
    input.value = priority;

    label.prepend(input);
    fieldset.appendChild(label);
    fieldset.appendChild(document.createElement("br"));
  });
  itemForm.appendChild(fieldset);
  itemContainer.appendChild(itemForm);
};

export { priorities, createPriorityBtns };
