import '../style.css';
import { format, compareDesc, add } from 'date-fns';
import checkmarkIcon from '../images/done.svg';
import inboxIcon from '../images/inbox.svg';
import todayIcon from '../images/calendar-day.svg';
import weekIcon from '../images/calendar-week.svg';
import navIcon from '../images/nav-icon.svg';
import themeIcon from '../images/theme-icon.svg';
import getTaskList from './taskList';
import createProject from './project';
import createTask from './task';

// Helper functions

const formatTitle = (title) => title.replaceAll(' ', '-').toLowerCase();

const validateTaskTitle = (project, title) => {
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

const validateProjectTitle = (taskList, title) => {
  let errorMessage = '';

  taskList.projects.forEach((project) => {
    if (formatTitle(title) === formatTitle(project.title)) {
      errorMessage = 'Project titles must be different';
    } else if (title === '') {
      errorMessage = 'Project must have a title';
    }
  });

  return errorMessage;
};

const validateDate = (date) => {
  let errorMessage = '';

  if (!date) {
    errorMessage = 'Date is not valid';
  } else if (compareDesc(format(new Date(), 'yyyy-MM-dd'), date) === -1) {
    errorMessage = "Date can't be before today";
  }

  return errorMessage;
};

const getTaskAndProject = (taskID) => {
  const taskList = getTaskList().taskList;
  const projectID = `${taskID.split('--')[0]}`;

  const projectIndex = taskList.projects.findIndex(
    (project) => project.ID === projectID,
  );
  const taskIndex = taskList.projects[projectIndex].tasks.findIndex(
    (task) => task.ID === taskID,
  );

  const projectEdited = taskList.projects[projectIndex];
  const taskEdited = projectEdited.tasks[taskIndex];

  return { projectEdited, taskEdited };
};

const refreshAllTasks = () => {
  const inbox = document.querySelector('nav').firstChild;
  const currentProject = document.querySelector('.current-project');

  if (inbox === currentProject) {
    inbox.nextSibling.click();
  } else {
    inbox.click();
  }

  currentProject.click();
};

// Handler functions

const handleProjectClick = (e) => {
  const navButtons = document.querySelectorAll('nav > button');
  const taskList = getTaskList();
  const projectTitle = e.target.firstChild.textContent;
  const main = document.querySelector('main');

  navButtons.forEach((button) => {
    button.classList.remove('current-project');
  });
  e.target.classList.add('current-project');

  if (projectTitle === taskList.currentProject) {
    return;
  }

  taskList.currentProject = projectTitle;
  main.replaceChild(createAllTasksContainer(), main.lastChild);
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

  const newProject = createProject(formatTitle(title), title);

  taskList.addProject(newProject);
  localStorage.setItem(formatTitle(title), JSON.stringify(newProject));
  const newProjectButton = createProjectButton(title);
  newProjectButton.click();
  nav.insertBefore(newProjectButton, nav.lastChild);
};

const handleClickOutsideTaskInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID}-input-title`);

  if (
    e.target.closest(`#${taskID} > h2`) ||
    e.target.closest(`#${taskID}-input-title`)
  ) {
    return;
  }
  document.removeEventListener('click', clickOutsideInput);
  if (taskTitle) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
};

const handleEditTaskInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID}-input-title`);

  if (e.keyCode === 27 || e.keyCode === 13) {
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const projectID = `${taskID.split('--')[0]}`;
    const projectEditedNode = document.getElementById(projectID);
    const taskEditedNode = document.getElementById(taskID);
    const { projectEdited, taskEdited } = getTaskAndProject(taskID);

    const errorMessage = validateTaskTitle(projectEdited, taskTitleInput.value);
    if (errorMessage) {
      const error = document.createElement('p');

      error.textContent = `* ${errorMessage}`;
      const errorNode = projectEditedNode.appendChild(error);
      setTimeout(() => {
        projectEditedNode.removeChild(errorNode);
      }, 3000);
      return;
    }

    taskEdited.ID = `${projectID}--${formatTitle(taskTitleInput.value)}`;
    taskEdited.title = taskTitleInput.value;
    localStorage.removeItem(taskID);
    localStorage.setItem(taskEdited.ID, JSON.stringify(taskEdited));

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

const handleEditTask = (taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > h2`);
  const taskTitleInput = document.querySelector(`#${taskID}-input-title`);

  document.addEventListener('click', clickOutsideInput);

  taskTitle.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('style', 'visibility:visible');
  taskTitleInput.focus();
};

const handleClickOutsideProjectInput = (e, projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID}-input-title`);

  if (
    e.target.closest(`#${projectID} > h1`) ||
    e.target.closest(`#${projectID}-input-title`)
  ) {
    return;
  }
  document.removeEventListener('click', clickOutsideInput);
  if (projectTitle) {
    projectTitle.setAttribute('style', 'visibility:visible');
    projectTitleInput.setAttribute('onfocus', "value=''");
    projectTitleInput.setAttribute('style', 'visibility:hidden');
  }
};

const handleEditProjectInput = (e, projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID}-input-title`);

  if (e.keyCode === 27 || e.keyCode === 13) {
    projectTitle.setAttribute('style', 'visibility:visible');
    projectTitleInput.setAttribute('onfocus', "value=''");
    projectTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const taskList = getTaskList().taskList;
    const allTasks = document.querySelector('.all-tasks');
    const projectEditedNode = document.getElementById(projectID);
    const nav = document.querySelector('nav');

    const projectIndex = taskList.projects.findIndex(
      (project) => project.ID === projectID,
    );

    const projectEdited = taskList.projects[projectIndex];
    const projectButtonEdited = Array.from(nav.childNodes).find(
      (button) => button.firstChild.textContent === projectEdited.title,
    );

    const errorMessage = validateProjectTitle(
      taskList,
      projectTitleInput.value,
    );
    if (errorMessage) {
      const error = document.createElement('p');

      error.textContent = `* ${errorMessage}`;
      const errorNode = projectEditedNode.appendChild(error);
      setTimeout(() => {
        projectEditedNode.removeChild(errorNode);
      }, 3000);
      return;
    }

    projectEdited.tasks.forEach((task) => {
      localStorage.removeItem(task.ID);
      task.ID = task.ID.replace(
        projectID,
        `${formatTitle(projectTitleInput.value)}`,
      );
      localStorage.setItem(task.ID, JSON.stringify(task));
    });

    projectEdited.ID = `${formatTitle(projectTitleInput.value)}`;
    projectEdited.title = projectTitleInput.value;
    localStorage.removeItem(projectID);
    const projectEditedTemp = JSON.parse(JSON.stringify(projectEdited));
    projectEditedTemp.tasks = [];
    localStorage.setItem(projectEdited.ID, JSON.stringify(projectEditedTemp));
    allTasks.replaceChild(
      createProjectContainer(projectEdited, 'All'),
      projectEditedNode,
    );

    const newProjectButton = createProjectButton(projectTitleInput.value);
    newProjectButton.click();
    nav.replaceChild(newProjectButton, projectButtonEdited);

    document.removeEventListener('click', clickOutsideInput);
  }
};

const handleEditProject = (projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID}-input-title`);

  document.addEventListener('click', clickOutsideInput);

  projectTitle.setAttribute('style', 'visibility:hidden');
  projectTitleInput.setAttribute('style', 'visibility:visible');
  projectTitleInput.focus();
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
  const newTask = createTaskContainer(
    project.title,
    title,
    format(new Date(), 'yyyy-MM-dd'),
  );
  newTask.classList.add('fade-in');
  projectNode.insertBefore(newTask, projectNode.lastChild);

  const newTaskItem = createTask(
    taskID,
    title,
    format(new Date(), 'yyyy-MM-dd'),
  );
  project.addTask(newTaskItem);
  localStorage.setItem(taskID, JSON.stringify(newTaskItem));
};

const handleCompleteTask = (e) => {
  const taskContainer = e.target.parentNode.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);

  taskContainer.classList.remove('fade-in');
  taskContainer.classList.add('fade-out');
  projectEdited.removeTask(taskEdited);
  localStorage.removeItem(taskID);
  setTimeout(() => {
    taskContainer.parentNode.removeChild(taskContainer);
  }, 750);
};

const handleDeleteTask = (e) => {
  const taskContainer = e.target.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskDeleted } = getTaskAndProject(taskID);

  taskContainer.classList.remove('fade-in');
  taskContainer.classList.add('fade-out-deleted');
  projectEdited.removeTask(taskDeleted);
  localStorage.removeItem(taskID);
  setTimeout(() => {
    taskContainer.parentNode.removeChild(taskContainer);
  }, 750);
};

const handleDeleteProject = (e) => {
  const taskList = getTaskList().taskList;
  const projectTitle = e.target.parentNode.firstChild.textContent;
  const projectID = formatTitle(projectTitle);
  const nav = document.querySelector('nav');

  const projectDeleted = document.getElementById(projectID);
  const projectIndex = taskList.projects.findIndex(
    (project) => project.ID === projectID,
  );
  const projectButtonDeleted = Array.from(nav.childNodes).find(
    (button) => button.firstChild.textContent === projectTitle,
  );

  projectButtonDeleted.classList.add('fade-out-deleted');
  setTimeout(() => {
    nav.removeChild(projectButtonDeleted);
  }, 750);
  if (projectDeleted) {
    const allTasks = document.querySelector('.all-tasks');
    projectDeleted.classList.add('fade-out-deleted');
    setTimeout(() => {
      allTasks.removeChild(projectDeleted);
    }, 750);
  }
  taskList.projects[projectIndex].tasks.forEach((task) => {
    localStorage.removeItem(task.ID);
  });
  taskList.removeProject(taskList.projects[projectIndex]);
  localStorage.removeItem(projectID);

  if (projectButtonDeleted.getAttribute('class').includes('current-project')) {
    nav.firstChild.click();
  }

  e.stopPropagation();
};

const handleEditDate = (e) => {
  const taskID = e.target.parentNode.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);
  const errorMessage = validateDate(e.target.value);

  if (errorMessage) {
    const error = document.createElement('p');

    error.textContent = `* ${errorMessage}`;
    const projectEditedNode = e.target.parentNode.parentNode;
    const errorNode = projectEditedNode.appendChild(error);
    setTimeout(() => {
      projectEditedNode.removeChild(errorNode);
    }, 3000);

    return;
  }

  taskEdited.dueDate = e.target.value;
  localStorage.removeItem(taskID);
  localStorage.setItem(taskEdited.ID, JSON.stringify(taskEdited));
  projectEdited.sortTasksByDate();
  refreshAllTasks();
};

const handleOpenNavTab = () => {
  const nav = document.querySelector('nav');

  nav.classList.toggle('shown');
  nav.addEventListener(
    'click',
    () => {
      nav.classList.toggle('shown');
    },
    { once: true },
  );
};

const handleChangeTheme = () => {
  const body = document.querySelector('body');

  body.classList.toggle('dark');
};

// Create DOM elements

const createTop = () => {
  const top = document.createElement('header');
  const logo = document.createElement('img');
  const logoTitle = document.createElement('p');
  const logoContainer = document.createElement('div');
  const tabs = document.createElement('div');
  const navTab = document.createElement('button');
  const navImg = document.createElement('img');
  const themeTab = document.createElement('button');
  const themeImg = document.createElement('img');

  logoTitle.textContent = 'Do Things';
  logoContainer.classList.add('logo-container');
  logo.src = checkmarkIcon;
  logo.alt = 'Two checkmarks';
  tabs.classList.add('tabs');
  navTab.addEventListener('click', handleOpenNavTab);
  navImg.src = navIcon;
  themeTab.addEventListener('click', handleChangeTheme);
  themeImg.src = themeIcon;

  logoContainer.append(logo, logoTitle);
  navTab.appendChild(navImg);
  themeTab.appendChild(themeImg);
  tabs.append(navTab, themeTab);
  top.append(logoContainer, tabs);

  return top;
};

const createProjectButton = (title) => {
  const projectButton = document.createElement('button');
  const projectDelete = document.createElement('button');

  projectDelete.textContent = '✖';
  projectDelete.addEventListener('click', (e) => handleDeleteProject(e));
  projectButton.textContent = title;
  projectButton.classList.add('project-button');
  projectButton.appendChild(projectDelete);
  projectButton.addEventListener('click', (e) => handleProjectClick(e));

  return projectButton;
};

const createDefaultProjects = () => {
  const inbox = createProjectButton('Inbox');
  const inboxImg = document.createElement('img');
  const today = createProjectButton('Today');
  const todayImg = document.createElement('img');
  const week = createProjectButton('Week');
  const weekImg = document.createElement('img');

  inboxImg.src = inboxIcon;
  inbox.classList.add('default-project');
  inbox.classList.add('current-project');
  inbox.removeChild(inbox.lastChild);
  inbox.appendChild(inboxImg);
  todayImg.src = todayIcon;
  today.classList.add('default-project');
  today.removeChild(today.lastChild);
  today.appendChild(todayImg);
  weekImg.src = weekIcon;
  week.classList.add('default-project');
  week.removeChild(week.lastChild);
  week.appendChild(weekImg);

  return { inbox, today, week };
};

const createSide = () => {
  const side = document.createElement('nav');
  const projectSection = document.createElement('h1');
  const addProject = document.createElement('button');
  const taskList = getTaskList().taskList;
  const { inbox, today, week } = createDefaultProjects();

  projectSection.textContent = 'Projects';
  addProject.classList.add('add-button');
  addProject.textContent = '＋ Add project';
  addProject.addEventListener('click', () => handleAddProject());

  side.append(inbox, today, week, projectSection);

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
  const taskTitle = document.createElement('h2');
  const taskDelete = document.createElement('button');
  const taskDueDate = document.createElement('input');
  const taskID = `${formatTitle(projectTitle)}--${formatTitle(title)}`;
  const clickOutsideInput = (e) =>
    handleClickOutsideTaskInput(e, taskID, clickOutsideInput);

  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', taskID);
  taskCheckboxContainer.classList.add('checkbox-container');
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('id', `${taskID}-input-completed`);
  taskLabel.setAttribute('for', `${taskID}-input-completed`);
  taskLabel.addEventListener('click', (e) => handleCompleteTask(e));
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('id', `${taskID}-input-title`);
  taskTitleInput.addEventListener('keydown', (e) =>
    handleEditTaskInput(e, taskID, clickOutsideInput),
  );
  taskTitle.textContent = title;
  taskTitle.addEventListener('click', () =>
    handleEditTask(taskID, clickOutsideInput),
  );
  taskDelete.textContent = '✖';
  taskDelete.addEventListener('click', (e) => handleDeleteTask(e));
  taskDueDate.setAttribute('type', 'date');
  taskDueDate.classList.add('task-due');
  taskDueDate.value = dueDate;
  taskDueDate.addEventListener('change', (e) => handleEditDate(e));

  taskCheckboxContainer.append(taskCompleted, taskLabel);
  taskContainer.append(
    taskCheckboxContainer,
    taskTitleInput,
    taskTitle,
    taskDelete,
    taskDueDate,
  );

  if (compareDesc(format(new Date(), 'yyyy-MM-dd'), dueDate) === -1) {
    const taskAlert = document.createElement('p');
    taskAlert.textContent = '!';
    taskContainer.appendChild(taskAlert);
  }

  return taskContainer;
};

const createProjectContainer = (project, dueDate) => {
  const projectContainer = document.createElement('div');
  const projectTitle = document.createElement('h1');
  const projectTitleInput = document.createElement('input');
  const projectDelete = document.createElement('button');
  const projectID = formatTitle(project.title);
  const addTask = document.createElement('button');
  const clickOutsideProjectInput = (e) =>
    handleClickOutsideProjectInput(e, projectID, clickOutsideProjectInput);

  projectContainer.classList.add('project-container');
  projectContainer.setAttribute('id', projectID);
  projectTitleInput.setAttribute('type', 'text');
  projectTitleInput.classList.add('project-title');
  projectTitleInput.setAttribute('style', 'visibility:hidden');
  projectTitleInput.setAttribute('id', `${projectID}-input-title`);
  projectTitleInput.addEventListener('keydown', (e) =>
    handleEditProjectInput(e, projectID, clickOutsideProjectInput),
  );
  projectTitle.textContent = project.title;
  projectTitle.addEventListener('click', () =>
    handleEditProject(projectID, clickOutsideProjectInput),
  );
  projectDelete.textContent = '✖';
  projectDelete.addEventListener('click', (e) => handleDeleteProject(e));

  projectContainer.append(projectTitle, projectTitleInput, projectDelete);

  project.tasks.forEach((task) => {
    if (
      (dueDate === 'Today' &&
        task.dueDate === format(new Date(), 'yyyy-MM-dd')) ||
      (dueDate === 'Week' &&
        compareDesc(
          task.dueDate,
          add(format(new Date(), 'yyyy-MM-dd'), { days: 6 }),
        ) === 1) ||
      dueDate === 'All'
    ) {
      const taskContainer = createTaskContainer(
        project.title,
        task.title,
        task.dueDate,
      );

      projectContainer.appendChild(taskContainer);
    }
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
      const projectContainer = createProjectContainer(project, 'All');

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else if (currentProject === 'Today') {
    taskList.projects.forEach((project) => {
      const projectContainer = createProjectContainer(project, 'Today');

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else if (currentProject === 'Week') {
    taskList.projects.forEach((project) => {
      const projectContainer = createProjectContainer(project, 'Week');

      if (projectContainer.querySelector('.task-container')) {
        allTasks.appendChild(projectContainer);
      }
    });
  } else {
    const projectContainer = createProjectContainer(
      taskList.projects.find((project) => project.title === currentProject),
      'All',
    );

    allTasks.appendChild(projectContainer);
  }

  allTasks.classList.add('all-tasks');
  return allTasks;
};

const createMain = () => {
  const main = document.createElement('main');

  main.append(createSide(), createAllTasksContainer());

  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const name = document.createElement('p');

  copy.textContent = 'Copyright © 2023 ';
  name.textContent = 'RogerEaux';
  footer.append(copy, name);

  return footer;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.append(createTop(), createMain(), createFooter());
};

export default createContent;
