import createProject from './project';
import createTask from './task';

const createTaskList = () => {
  const taskProjects = [createProject('Personal')];
  taskProjects[0].addTask(createTask('Pet dog', 'Now'));
  taskProjects[0].addTask(createTask('Smile', 'Today'));

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
