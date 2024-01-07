import { format, add } from 'date-fns';
import createProject from './project';
import createTask from './task';

const createTaskList = () => {
  const taskProjects = [];

  const addProject = (project) => {
    taskProjects.push(project);
  };

  const removeProject = (project) => {
    taskProjects.splice(taskProjects.indexOf(project), 1);
  };

  return {
    get projects() {
      return taskProjects;
    },

    addProject,

    removeProject,
  };
};

let taskList;
let currentProject = 'Inbox';

const createDefaultTaskList = () => {
  const defaultTaskList = createTaskList();

  defaultTaskList.addProject(createProject('personal', 'Personal'));
  defaultTaskList.projects[0].addTask(
    createTask(
      'personal--pet-dog',
      'Pet dog',
      format(add(new Date(), { days: 1 }), 'yyyy-MM-dd'),
    ),
  );
  defaultTaskList.projects[0].addTask(
    createTask('personal--smile', 'Smile', format(new Date(), 'yyyy-MM-dd')),
  );

  return defaultTaskList;
};

const createStoredTaskList = () => {
  const newTaskList = createTaskList();
  const storedTaskList = JSON.parse(localStorage.getItem('taskList'));

  return newTaskList;
};

const checkLocalStorage = () => {
  if (!localStorage.taskList) {
    taskList = createDefaultTaskList();
    localStorage.setItem('taskList', JSON.stringify(taskList));
  } else {
    console.log('nEw');
    taskList = createStoredTaskList();
  }
};

checkLocalStorage();

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
