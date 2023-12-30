import createProject from './project';

const createTaskList = () => {
  const taskProjects = [];

  taskProjects.push(createProject('Inbox'));
  taskProjects.push(createProject('Today'));

  return {
    get projects() {
      return taskProjects;
    },
  };
};

const taskList = createTaskList();
let currentProject = 'Inbox';

const getTaskList = () => ({
  get taskList() {
    return taskList;
  },

  get currentProject() {
    return currentProject;
  },

  set currentProject(project) {
    currentProject = project;
  },
});

export default getTaskList;
