const createTodo = (title, description, dueDate, priority) => {
  let todoTitle = title;
  let todoDescription = description;
  let todoDueDate = dueDate;
  let todoPriority = priority;
  let todoCompleted = false;

  return {
    get title() {
      return todoTitle;
    },

    set title(title) {
      todoTitle = title;
    },

    get description() {
      return todoDescription;
    },

    set description(description) {
      todoDescription = description;
    },

    get dueDate() {
      return todoDueDate;
    },

    set dueDate(dueDate) {
      todoDueDate = dueDate;
    },

    get priority() {
      return todoPriority;
    },

    set priority(priority) {
      todoPriority = priority;
    },

    get completed() {
      return todoCompleted;
    },

    set completed(completed) {
      todoCompleted = completed;
    },
  };
};

export default createTodo;
