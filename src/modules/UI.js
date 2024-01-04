import '../style.css';
import checkmarkIcon from '../images/done.svg';
import inboxIcon from '../images/inbox.svg';
import todayIcon from '../images/calendar-day.svg';
import weekIcon from '../images/calendar-week.svg';
import getTaskList from './taskList';
import createProject from './project';
import createTask from './task';

// Helper functions

const formatTitle = (title) => title.replaceAll(' ', '-').toLowerCase();

const validateNewTaskTitle = (project, title) => {
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

const validateNewProjectTitle = (taskList, title) => {
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

  nav.insertBefore(createProjectButton(title), nav.lastChild);
  taskList.addProject(createProject(formatTitle(title), title));
};

const handleClickOutsideTaskInput = (e, taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > p`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

  if (
    e.target.closest(`#${taskID} > p`) ||
    e.target.closest(`#${taskID} > input`)
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
  const taskTitle = document.querySelector(`#${taskID} > p`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

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

    const errorMessage = validateNewTaskTitle(
      projectEdited,
      taskTitleInput.value,
    );
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

const handleEditTask = (taskID, clickOutsideInput) => {
  const taskTitle = document.querySelector(`#${taskID} > p`);
  const taskTitleInput = document.querySelector(`#${taskID} > input`);

  document.addEventListener('click', clickOutsideInput);

  taskTitle.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('style', 'visibility:visible');
  taskTitleInput.focus();
};

const handleClickOutsideProjectInput = (e, projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

  if (
    e.target.closest(`#${projectID} > h1`) ||
    e.target.closest(`#${projectID} > input`)
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
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

  if (e.keyCode === 27 || e.keyCode === 13) {
    projectTitle.setAttribute('style', 'visibility:visible');
    projectTitleInput.setAttribute('onfocus', "value=''");
    projectTitleInput.setAttribute('style', 'visibility:hidden');
  }
  if (e.keyCode === 13) {
    const taskList = getTaskList().taskList;
    const currentProject = getTaskList().currentProject;
    const allTasks = document.querySelector('.all-tasks');
    const projectEditedNode = document.getElementById(projectID);
    const nav = document.querySelector('nav');
    let dueDate = 'All';

    const projectIndex = taskList.projects.findIndex(
      (project) => project.ID === projectID,
    );

    const projectEdited = taskList.projects[projectIndex];
    const projectButtonEdited = Array.from(nav.childNodes).find(
      (button) => button.textContent === projectEdited.title,
    );

    const errorMessage = validateNewProjectTitle(
      taskList,
      projectTitleInput.value,
    );
    if (errorMessage) {
      console.log(errorMessage);
      return;
    }
    if (currentProject === 'Today' || currentProject === 'Week') {
      dueDate = 'Today';
    }

    projectEdited.tasks.forEach((task) => {
      task.ID = task.ID.replace(
        projectID,
        `${formatTitle(projectTitleInput.value)}`,
      );
    });
    projectEdited.ID = `${formatTitle(projectTitleInput.value)}`;
    projectEdited.title = projectTitleInput.value;
    allTasks.replaceChild(
      createProjectContainer(projectEdited, dueDate),
      projectEditedNode,
    );
    nav.replaceChild(
      createProjectButton(projectTitleInput.value),
      projectButtonEdited,
    );

    document.removeEventListener('click', clickOutsideInput);
  }
};

const handleEditProject = (projectID, clickOutsideInput) => {
  const projectTitle = document.querySelector(`#${projectID} > h1`);
  const projectTitleInput = document.querySelector(`#${projectID} > input`);

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

  projectNode.insertBefore(
    createTaskContainer(project.title, title, 'Today'),
    projectNode.lastChild,
  );
  project.addTask(createTask(taskID, title, 'Today'));
};

const handleChecboxActive = (e) => {
  const taskContainer = e.target.previousSibling.parentNode.parentNode;
  const taskID = taskContainer.getAttribute('id');
  const { projectEdited, taskEdited } = getTaskAndProject(taskID);

  taskContainer.parentNode.removeChild(taskContainer);
  projectEdited.removeTask(taskEdited);
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

  logoContainer.append(logo, logoTitle);
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
  const week = createProjectButton('Week');
  const weekImg = document.createElement('img');
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
  weekImg.src = weekIcon;
  weekImg.alt = 'Week icon';
  week.appendChild(weekImg);
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
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const taskID = `${formatTitle(projectTitle)}--${formatTitle(title)}`;
  const clickOutsideInput = (e) =>
    handleClickOutsideTaskInput(e, taskID, clickOutsideInput);

  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', taskID);
  taskCheckboxContainer.classList.add('checkbox-container');
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('id', `${taskID}-input-completed`);
  taskLabel.setAttribute('for', `${taskID}-input-completed`);
  taskLabel.addEventListener('click', (e) => handleChecboxActive(e));
  taskTitleInput.setAttribute('type', 'text');
  taskTitleInput.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('id', `${taskID}-input-edit-title`);
  taskTitleInput.addEventListener('keydown', (e) =>
    handleEditTaskInput(e, taskID, clickOutsideInput),
  );
  taskTitle.textContent = title;
  taskTitle.addEventListener('click', () =>
    handleEditTask(taskID, clickOutsideInput),
  );
  taskDueDate.textContent = dueDate;
  taskDueDate.classList.add('task-due');

  taskCheckboxContainer.append(taskCompleted, taskLabel);
  taskContainer.append(
    taskCheckboxContainer,
    taskTitleInput,
    taskTitle,
    taskDueDate,
  );

  return taskContainer;
};

const createProjectContainer = (project, dueDate) => {
  const projectContainer = document.createElement('div');
  const projectTitle = document.createElement('h1');
  const projectTitleInput = document.createElement('input');
  const projectID = formatTitle(project.title);
  const addTask = document.createElement('button');
  const clickOutsideProjectInput = (e) =>
    handleClickOutsideProjectInput(e, projectID, clickOutsideProjectInput);

  projectContainer.classList.add('project-container');
  projectContainer.setAttribute('id', projectID);
  projectTitleInput.setAttribute('type', 'text');
  projectTitleInput.classList.add('project-title');
  projectTitleInput.setAttribute('style', 'visibility:hidden');
  projectTitleInput.setAttribute('id', `${projectID}-input-edit-title`);
  projectTitleInput.addEventListener('keydown', (e) =>
    handleEditProjectInput(e, projectID, clickOutsideProjectInput),
  );
  projectTitle.textContent = project.title;
  projectTitle.addEventListener('click', () =>
    handleEditProject(projectID, clickOutsideProjectInput),
  );

  projectContainer.append(projectTitle, projectTitleInput);

  project.tasks.forEach((task) => {
    if (
      (dueDate === 'Today' && task.dueDate === 'Today') ||
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

  body.append(createTop(), createMain(), createFooter());
};

export default createContent;
