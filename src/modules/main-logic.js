import createProject from './project';

const createTodoList = () => {
  const projects = [];

  projects.push(createProject('Inbox'));

  console.log(projects);
};

export default createTodoList;
