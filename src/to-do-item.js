class toDoItem {
  constructor(title, description, dueDate, priority, notes, checkList) {
    ((this.title = title),
      (this.description = description),
      (this.dueDate = dueDate),
      (this.priority = priority),
      (this.notes = notes),
      (this.checkList = checkList));
  }
}

const testItem = new toDoItem(
  "Buy Flowers",
  "Buy flowers for Marcui",
  "Today at 5:00PM",
  "Med",
);

export { toDoItem };
