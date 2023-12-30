import createTask from './task';

const createProject = (title) => {
  let projectTitle = title;
  const projectTasks = [
    createTask('Smile', 'Today'),
    createTask('Pet dog', 'Now'),
  ];

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
