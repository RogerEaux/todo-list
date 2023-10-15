import '../style.css';
import checkmark from '../images/done.svg';
import createTodoList from './todoList';

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

const createTodoContainer = (title, dueDate) => {
  const todoContainer = document.createElement('div');
  const taskCompleted = document.createElement('input');
  const taskTitle = document.createElement('label');
  const taskDueDate = document.createElement('p');

  todoContainer.classList.add('task-container');
  todoContainer.setAttribute('id', title);
  taskCompleted.setAttribute('type', 'checkbox');
  taskCompleted.setAttribute('name', 'checkbox');
  taskCompleted.setAttribute('id', title);
  taskCompleted.classList.add('checkbox-field');
  taskTitle.setAttribute('for', title);
  taskTitle.classList.add('checkbox-label');
  taskTitle.textContent = title;
  taskDueDate.textContent = dueDate;

  todoContainer.appendChild(taskCompleted);
  todoContainer.appendChild(taskTitle);
  todoContainer.appendChild(taskDueDate);

  return todoContainer;
};

const createMain = () => {
  const main = document.createElement('main');
  const todoList = createTodoList();

  todoList.projects.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.setAttribute('id', project.name);

    project.todos.forEach((todo) => {
      const title = todo.title;
      const dueDate = todo.dueDate;
      const todoContainer = createTodoContainer(title, dueDate);

      projectContainer.appendChild(todoContainer);
    });
    main.appendChild(projectContainer);
  });

  main.classList.add('main');
  main.appendChild(createSide());

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
