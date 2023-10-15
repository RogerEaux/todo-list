import createProject from './project';

const createTodoList = () => {
  const todoProjects = [];

  todoProjects.push(createProject('Inbox'));

  return {
    get projects() {
      return todoProjects;
    },
  };
};

export default createTodoList;
