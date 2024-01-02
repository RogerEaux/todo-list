const createProject = (title) => {
  let projectTitle = title;
  const projectTasks = [];

  const addTask = (task) => {
    projectTasks.push(task);
  };

  return {
    get title() {
      return projectTitle;
    },

    set title(title) {
      projectTitle = title;
    },

    get tasks() {
      return projectTasks;
    },

    addTask,
  };
};

export default createProject;
