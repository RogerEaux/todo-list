import '../style.css';
import checkmark from '../images/done.svg';
import getTaskList from './taskList';
import createTask from './task';

const createTop = () => {
  const top = document.createElement('header');
  const logo = document.createElement('img');
  const logoTitle = document.createElement('p');
  const logoContainer = document.createElement('div');

  top.classList.add('header');
  logoTitle.textContent = 'Do a thing';
  logoContainer.classList.add('logo-container');
  logo.src = checkmark;
  logo.alt = 'Two checkmarks';

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoTitle);
  top.appendChild(logoContainer);

  return top;
};

const createSide = () => {
  const side = document.createElement('nav');

  return side;
};

const formatTitle = (title) => title.replaceAll(' ', '-').toLowerCase();

const handleEditTaskTitle = (taskID) => {
  const taskTitle = document.querySelector(`#${taskID} > p.task-title`);
  const taskTitleInput = document.querySelector(
    `#${taskID} > input.task-title`,
  );

  taskTitle.setAttribute('style', 'visibility:hidden');
  taskTitleInput.setAttribute('style', 'visibility:visible');
  taskTitleInput.focus();

  document.addEventListener('click', (e) => {
    if (e.target.closest(`#${taskID} > .task-title`)) {
      return;
    }
    taskTitle.setAttribute('style', 'visibility:visible');
    taskTitleInput.setAttribute('onfocus', "value=''");
    taskTitleInput.setAttribute('style', 'visibility:hidden');
  });

  taskTitleInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 || e.keyCode === 13) {
      taskTitle.setAttribute('style', 'visibility:visible');
      taskTitleInput.setAttribute('onfocus', "value=''");
      taskTitleInput.setAttribute('style', 'visibility:hidden');
    }
    if (e.keyCode === 13) {
      const taskList = getTaskList().taskList;
      const allTasksNode = document.querySelector('.all-tasks');
      const projectEditedNode = document.getElementById(
        `${taskID.split('--')[0]}`,
      );
      const taskEditedNode = document.getElementById(taskID);
      const projectIndex = Array.from(allTasksNode.children).indexOf(
        projectEditedNode,
      );
      const taskIndex =
        Array.from(projectEditedNode.children).indexOf(taskEditedNode) - 1;
      const taskEdited = taskList.projects[projectIndex].tasks[taskIndex];

      taskEdited.title = 'Yeet';
      taskTitle.textContent = 'Yeet';
    }
  });
};

const createTaskContainer = (projectID, title, dueDate) => {
  const taskContainer = document.createElement('div');
  const taskCheckboxContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskTitleInput = document.createElement('input');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const taskID = `${projectID}--${formatTitle(title)}`;

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
  taskTitle.textContent = title;
  taskTitle.classList.add('task-title');
  taskTitle.addEventListener('click', () => handleEditTaskTitle(taskID));
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

const handleAddTask = (project) => {
  const formattedTitle = formatTitle(project.title);
  const projectNode = document.getElementById(formattedTitle);

  const projectTaskTitles = [];
  project.tasks.forEach((task) => {
    projectTaskTitles.push(task.title);
  });

  let title = 'Do the thing';

  while (projectTaskTitles.includes(title)) {
    title = title.replace('o ', 'oo ');
  }

  projectNode.insertBefore(
    createTaskContainer(formattedTitle, title, 'Today'),
    projectNode.lastChild,
  );
  project.addTask(createTask(title, 'Today'));
};

const createMain = () => {
  const main = document.createElement('main');
  const currentProject = getTaskList().currentProject;
  const allTasks = document.createElement('div');
  const taskList = getTaskList().taskList;
  const defaultProjects = ['Inbox', 'Today'];
  let dueDate;

  main.appendChild(createSide());

  if (currentProject === 'Today') {
    dueDate = 'Today';
  }

  taskList.projects.forEach((project) => {
    if (
      !defaultProjects.includes(currentProject) &&
      currentProject !== project
    ) {
      return;
    }

    const projectContainer = document.createElement('div');
    const projectTitle = document.createElement('p');
    const projectID = formatTitle(project.title);
    const addTask = document.createElement('button');

    projectContainer.classList.add('project-container');
    projectContainer.setAttribute('id', projectID);
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);

    project.tasks.forEach((task) => {
      if (currentProject === 'Today' && task.dueDate !== dueDate) {
        return;
      }

      const taskContainer = createTaskContainer(
        projectID,
        task.title,
        task.dueDate,
      );

      projectContainer.appendChild(taskContainer);
    });

    addTask.classList.add('add-task');
    addTask.textContent = '＋ Add task';
    addTask.addEventListener('click', () => handleAddTask(project));
    projectContainer.appendChild(addTask);

    if (projectContainer.querySelector('.task-container')) {
      allTasks.appendChild(projectContainer);
    }
  });

  allTasks.classList.add('all-tasks');
  main.appendChild(allTasks);
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
