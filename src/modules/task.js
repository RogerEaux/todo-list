const createTask = (title, dueDate, priority) => {
  let taskTitle = title;
  let taskDueDate = dueDate;
  let taskPriority = priority;
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

    get priority() {
      return taskPriority;
    },

    set priority(priority) {
      taskPriority = priority;
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
