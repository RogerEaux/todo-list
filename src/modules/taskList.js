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
  localStorage.setItem('personal', JSON.stringify(defaultTaskList.projects[0]));
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
  localStorage.setItem(
    'personal--smile',
    JSON.stringify(defaultTaskList.projects[0].tasks[0]),
  );
  localStorage.setItem(
    'personal--pet-dog',
    JSON.stringify(defaultTaskList.projects[0].tasks[1]),
  );

  return defaultTaskList;
};

const createStoredTaskList = () => {
  const newTaskList = createTaskList();
  const allItemsStored = [];

  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    allItemsStored.push(localStorage.getItem(key));
  }

  const projectItems = allItemsStored
    .filter((item) => !item.includes('--'))
    .map((item) => JSON.parse(item));
  const taskItems = allItemsStored
    .filter((item) => item.includes('--'))
    .map((item) => JSON.parse(item));

  projectItems.forEach((project, projectIndex) => {
    newTaskList.addProject(createProject(project.ID, project.title));
    const filteredTaskItems = taskItems.filter((task) =>
      task.ID.includes(`${project.ID}--`),
    );
    if (filteredTaskItems) {
      filteredTaskItems.forEach((task) => {
        newTaskList.projects[projectIndex].addTask(
          createTask(task.ID, task.title, task.dueDate),
        );
      });
    }
  });

  return newTaskList;
};

const checkLocalStorage = () => {
  if (localStorage.length === 0) {
    taskList = createDefaultTaskList();
  } else {
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
