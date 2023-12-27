import createTask from './task';

const createProject = (name) => {
  let projectName = name;
  const projectTasks = [
    createTask('Smile', 'Today', 0),
    createTask('Pet dog', 'Now', 0),
  ];

  const addTask = (task) => {
    projectTasks.push(task);
  };

  return {
    get name() {
      return projectName;
    },

    set name(name) {
      projectName = name;
    },

    get tasks() {
      return projectTasks;
    },

    addTask,
  };
};

export default createProject;
