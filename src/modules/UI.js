import '../style.css';
import checkmark from '../images/done.svg';
import getTaskList from './taskList';

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

const createTaskContainer = (project, title, dueDate) => {
  const taskContainer = document.createElement('div');
  const taskCheckboxContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const formatTitle = project.concat(
    '-',
    title.replace(' ', '-').toLowerCase(),
  );

  taskContainer.classList.add('task-container');
  taskContainer.setAttribute('id', formatTitle);
  taskCheckboxContainer.classList.add('checkbox-container');
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('name', 'checkbox');
  taskCompleted.setAttribute('id', formatTitle.concat('-input'));
  taskCompleted.classList.add('checkbox-field');
  taskLabel.setAttribute('for', formatTitle.concat('-input'));
  taskLabel.classList.add('checkbox-label');
  taskTitle.textContent = title;
  taskTitle.classList.add('task-title');
  taskDueDate.textContent = dueDate;
  taskDueDate.classList.add('task-due');

  taskCheckboxContainer.appendChild(taskCompleted);
  taskCheckboxContainer.appendChild(taskLabel);
  taskContainer.appendChild(taskCheckboxContainer);
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskDueDate);

  return taskContainer;
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
    const formatTitle = project.title.replace(' ', '-').toLowerCase();
    const addTask = document.createElement('button');

    projectContainer.classList.add('project-container');
    projectContainer.setAttribute('id', formatTitle);
    projectTitle.textContent = project.title;
    projectContainer.appendChild(projectTitle);

    project.tasks.forEach((task) => {
      if (currentProject === 'Today' && task.dueDate !== dueDate) {
        return;
      }

      const taskContainer = createTaskContainer(
        formatTitle,
        task.title,
        task.dueDate,
      );

      projectContainer.appendChild(taskContainer);
    });

    addTask.classList.add('add-task');
    addTask.textContent = '＋ Add task';
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
