const createTask = (ID, title, dueDate) => {
  let taskID = ID;
  let taskTitle = title;
  let taskDueDate = dueDate;

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
  };
};

export default createTask;
