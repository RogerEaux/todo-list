const createTask = (title, dueDate) => {
  let taskTitle = title;
  let taskDueDate = dueDate;
  let taskCompleted = false;

  return {
    get title() {
      return taskTitle;
    },

    set title(title) {
      taskTitle = title;
    },

    get dueDate() {
      return taskDueDate;
    },

    set dueDate(dueDate) {
      taskDueDate = dueDate;
    },

    get completed() {
      return taskCompleted;
    },

    set completed(completed) {
      taskCompleted = completed;
    },
  };
};

export default createTask;
