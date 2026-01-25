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
  "She likes Tulips",
);

const testItem2 = new toDoItem(
  "Get Gas",
  "Go to Petro Canada",
  "Tomorrow, at 9:00AM",
  "High",
  "Get car wash too",
);

export { toDoItem, testItem, testItem2 };
