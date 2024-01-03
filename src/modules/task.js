const createTask = (ID, title, dueDate) => {
  let taskID = ID;
  let taskTitle = title;
  let taskDueDate = dueDate;

  let taskCompleted = false;

  return {
    get ID() {
      return taskID;
    },

    set ID(ID) {
      taskID = ID;
    },

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
