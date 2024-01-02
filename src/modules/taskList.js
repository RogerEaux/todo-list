import createProject from './project';

const createTaskList = () => {
  const taskProjects = [createProject('Inbox'), createProject('Today')];

  const addProject = (project) => {
    taskProjects.push(project);
  };

  return {
    get projects() {
      return taskProjects;
    },

    addProject,
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
