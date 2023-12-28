import '../style.css';
import checkmark from '../images/done.svg';
import createTaskList from './taskList';

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

const createTaskContainer = (title, dueDate) => {
  const taskContainer = document.createElement('div');
  const taskCheckboxContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskLabel = document.createElement('label');
  const taskTitle = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const formatTitle = title.replace(' ', '-').toLowerCase();

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
  const taskList = createTaskList();

  main.appendChild(createSide());

  taskList.projects.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.setAttribute(
      'id',
      project.name.replace(' ', '-').toLowerCase(),
    );

    project.tasks.forEach((task) => {
      const title = task.title;
      const dueDate = task.dueDate;
      const taskContainer = createTaskContainer(title, dueDate);

      projectContainer.appendChild(taskContainer);
    });
    main.appendChild(projectContainer);
  });

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
