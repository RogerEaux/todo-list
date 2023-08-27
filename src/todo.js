const createTodo = (title, description, dueDate, priority) => {
  const checkTodo = function () {
    this.check = true;
  };

  const changePiority = function (newPriority) {
    this.priority = newPriority;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    check: false,
    checkTodo,
    changePiority,
  };
};

export default createTodo;
