import '../style.css';
import checkmarkIcon from '../images/done.svg';
import inboxIcon from '../images/inbox.svg';
import todayIcon from '../images/calendar-day.svg';
import soonIcon from '../images/calendar-soon.svg';
import getTaskList from './taskList';
import createProject from './project';
import createTask from './task';

// Helper functions

const formatTitle = (title) => title.replaceAll(' ', '-').toLowerCase();

const validateNewTitle = (project, title) => {
  let errorMessage = '';

  project.tasks.forEach((task) => {
    if (formatTitle(title) === formatTitle(task.title)) {
      errorMessage = 'Task titles must be different';
    } else if (title === '') {
      errorMessage = 'Task must have a title';
    }
  });

  return errorMessage;
};

// Handler functions

const handleProjectClick = (e) => {
  const navButtons = document.querySelectorAll('nav button');
  const taskList = getTaskList();
  const projectTitle = e.target.textContent;
  const main = document.querySelector('main');

  navButtons.forEach((button) => {
    button.classList.remove('current-selected-project');
  });
  e.target.classList.add('current-selected-project');

  if (projectTitle === taskList.currentProject) {
    return;
  }

  taskList.currentProject = projectTitle;
  main.insertBefore(createAllTasksContainer(), main.lastChild);
  main.removeChild(main.lastChild);
};

const handleAddProject = () => {
  const nav = document.querySelector('nav');
  const taskList = getTaskList().taskList;

  const projectsTitles = [];
  taskList.projects.forEach((project) => {
    projectsTitles.push(project.title);
  });

  let title = 'Do all the things';

  while (projectsTitles.includes(title)) {
    title = title.replace('o ', 'oo ');
  }

  nav.insertBefore(createProjectButton(title), nav.lastChild);
  taskList.addProject(createProject(formatTitle(title), title));
};

const handleClickOutsideInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > p.task-title`);
  const taskTitleInput = document.querySelector(
    `#${taskID} > input.task-title`,
  );

  if (e.target.closest(`#${taskID} > .task-title`)) {
    return;
  }
  document.removeEventListener('click', clickOutsideInput);
  if (taskTitle) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
};

const handleEditTaskTitleInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > p.task-title`);
  const taskTitleInput = document.querySelector(
    `#${taskID} > input.task-title`,
  );

  if (e.keyCode === 27 || e.keyCode === 13) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const taskList = getTaskList().taskList;
    const projectID = `${taskID.split('--')[0]}`;
    const projectEditedNode = document.getElementById(projectID);
    const taskEditedNode = document.getElementById(taskID);

    const projectIndex = taskList.projects.findIndex(
      (project) => project.ID === projectID,
    );
    const taskIndex = taskList.projects[projectIndex].tasks.findIndex(
      (task) => task.ID === taskID,
    );

    const projectEdited = taskList.projects[projectIndex];
    const taskEdited = projectEdited.tasks[taskIndex];

    const errorMessage = validateNewTitle(projectEdited, taskTitleInput.value);
    if (errorMessage) {
      console.log(errorMessage);
      return;
    }

    taskEdited.ID = `${projectID}--${formatTitle(taskTitleInput.value)}`;
    taskEdited.title = taskTitleInput.value;
    projectEditedNode.replaceChild(
      createTaskContainer(
        projectEdited.title,
        taskEdited.title,
        taskEdited.dueDate,
      ),
      taskEditedNode,
    );

    document.removeEventListener('click', clickOutsideInput);
  }
};

const handleEditTaskTitle = (taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > p.task-title`);
  const taskTitleInput = document.querySelector(
    `#${taskID} > input.task-title`,
  );

  document.addEventListener('click', clickOutsideInput);

  taskTitle.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('style', 'visibility:visible');
  taskTitleInput.focus();
};

const handleAddTask = (project) => {
  const projectNode = document.getElementById(formatTitle(project.title));

  const projectTaskTitles = [];
  project.tasks.forEach((task) => {
    projectTaskTitles.push(task.title);
  });

  let title = 'Do the thing';

  while (projectTaskTitles.includes(title)) {
    title = title.replace('o ', 'oo ');
  }

  const taskID = `${formatTitle(project.title)}--${formatTitle(title)}`;

  projectNode.insertBefore(
    createTaskContainer(project.title, title, 'Today'),
    projectNode.lastChild,
  );
  project.addTask(createTask(taskID, title, 'Today'));
};

// Create DOM elements

const createTop = () => {
  const top = document.createElement('header');
  const logo = document.createElement('img');
  const logoTitle = document.createElement('p');
  const logoContainer = document.createElement('div');

  top.classList.add('header');
  logoTitle.textContent = 'Do a thing';
  logoContainer.classList.add('logo-container');
  logo.src = checkmarkIcon;
  logo.alt = 'Two checkmarks';

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoTitle);
  top.appendChild(logoContainer);

  return top;
};

const createProjectButton = (title) => {
  const button = document.createElement('button');

  button.textContent = title;
  button.classList.add('project-button');
  button.addEventListener('click', (e) => handleProjectClick(e));

  return button;
};

const createSide = () => {
  const side = document.createElement('nav');
  const inbox = createProjectButton('Inbox');
  const inboxImg = document.createElement('img');
  const today = createProjectButton('Today');
  const todayImg = document.createElement('img');
  const soon = createProjectButton('Soon');
  const soonImg = document.createElement('img');
  const projectSection = document.createElement('h1');
  const addProject = document.createElement('button');
  const taskList = getTaskList().taskList;

  inboxImg.src = inboxIcon;
  inboxImg.alt = 'Inbox icon';
  inbox.classList.add('current-selected-project');
  inbox.appendChild(inboxImg);
  todayImg.src = todayIcon;
  todayImg.alt = 'Today icon';
  today.appendChild(todayImg);
  soonImg.src = soonIcon;
  soonImg.alt = 'Soon icon';
  soon.appendChild(soonImg);
  projectSection.textContent = 'Projects';
  addProject.classList.add('add-button');
  addProject.textContent = '＋ Add project';
  addProject.addEventListener('click', () => handleAddProject());

  side.appendChild(inbox);
  side.appendChild(today);
  side.appendChild(soon);
  side.appendChild(projectSection);

  taskList.projects.forEach((project) => {
    side.appendChild(createProjectButton(project.title));
  });

  side.appendChild(addProject);

  return side;
};

const createTaskContainer = (projectTitle, title, dueDate) => {
  const taskContainer = document.createElement('div');
  const taskCheckboxContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskTitleInput = document.createElement('input');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const taskID = `${formatTitle(projectTitle)}--${formatTitle(title)}`;
  const clickOutsideInput = (e) =>
    handleClickOutsideInput(e, taskID, clickOutsideInput);

  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', taskID);
  taskCheckboxContainer.classList.add('checkbox-container');
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('id', `${taskID}-input-completed`);
  taskLabel.setAttribute('for', `${taskID}-input-completed`);
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.classList.add('task-title');
  taskTitleInput.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('id', `${taskID}-input-edit-title`);
  taskTitleInput.addEventListener('keydown', (e) =>
    handleEditTaskTitleInput(e, taskID, clickOutsideInput),
  );
  taskTitle.textContent = title;
  taskTitle.classList.add('task-title');
  taskTitle.addEventListener('click', () =>
    handleEditTaskTitle(taskID, clickOutsideInput),
  );
  taskDueDate.textContent = dueDate;
  taskDueDate.classList.add('task-due');

  taskCheckboxContainer.appendChild(taskCompleted);
  taskCheckboxContainer.appendChild(taskLabel);
  taskContainer.appendChild(taskCheckboxContainer);
  taskContainer.appendChild(taskTitleInput);
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskDueDate);

  return taskContainer;
};

const createProjectContainer = (project) => {
  const projectContainer = document.createElement('div');
  const projectTitle = document.createElement('h1');
  const projectID = formatTitle(project.title);
  const addTask = document.createElement('button');

  projectContainer.classList.add('project-container');
  projectContainer.setAttribute('id', projectID);
  projectTitle.textContent = project.title;
  projectContainer.appendChild(projectTitle);

  project.tasks.forEach((task) => {
    const taskContainer = createTaskContainer(
      project.title,
      task.title,
      task.dueDate,
    );

    projectContainer.appendChild(taskContainer);
  });

  addTask.classList.add('add-button');
  addTask.textContent = '＋ Add task';
  addTask.addEventListener('click', () => handleAddTask(project));
  projectContainer.appendChild(addTask);

  return projectContainer;
};

const createAllTasksContainer = () => {
  const allTasks = document.createElement('div');
  const currentProject = getTaskList().currentProject;
  const taskList = getTaskList().taskList;

  if (currentProject === 'Inbox') {
    taskList.projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else if (currentProject === 'Today') {
  } else if (currentProject === 'Soon') {
  } else {
    const projectContainer = createProjectContainer(
      taskList.projects.find((project) => project.title === currentProject),
    );

    allTasks.appendChild(projectContainer);
  }

  allTasks.classList.add('all-tasks');
  return allTasks;
};

const createMain = () => {
  const main = document.createElement('main');

  main.appendChild(createSide());
  main.appendChild(createAllTasksContainer());
  main.classList.add('main');

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const para = document.createElement('p');

  footer.classList.add('footer');
  para.textContent = 'Copyright © 2023 RogerEaux';
  footer.appendChild(para);

  return footer;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.appendChild(createTop());
  body.appendChild(createMain());
  body.appendChild(createFooter());
};

export default createContent;
