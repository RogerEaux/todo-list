const createTodo = (title, description, dueDate, priority) => {
  const changeTitle = function (newTitle) {
    this.title = newTitle;
  };

  const changeDescription = function (newDescription) {
    this.description = newDescription;
  };

  const changeDueDate = function (newDueDate) {
    this.dueDate = newDueDate;
  };

  const changePriority = function (newPriority) {
    this.priority = newPriority;
  };

  const checkTodo = function () {
    this.check = true;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    check: false,
    changeTitle,
    changeDescription,
    changeDueDate,
    changePriority,
    checkTodo,
  };
};

// export default createTodo;
