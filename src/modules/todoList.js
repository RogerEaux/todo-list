import createProject from './project';

const createTodoList = () => {
  const listProjects = [];

  listProjects.push(createProject('Inbox'));

  return {
    get projects() {
      return listProjects;
    },
  };
};

export default createTodoList;
