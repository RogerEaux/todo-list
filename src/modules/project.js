const createProject = (ID, title) => {
  let projectID = ID;
  let projectTitle = title;
  const projectTasks = [];

  const addTask = (task) => {
    projectTasks.push(task);
  };

  const removeTask = (task) => {
    projectTasks.splice(projectTasks.indexOf(task), 1);
  };

  return {
    get ID() {
      return projectID;
    },

    set ID(ID) {
      projectID = ID;
    },

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

    removeTask,
  };
};

export default createProject;
