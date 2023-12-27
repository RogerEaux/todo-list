import createProject from './project';

const createTaskList = () => {
  const taskProjects = [];

  taskProjects.push(createProject('Inbox'));

  return {
    get projects() {
      return taskProjects;
    },
  };
};

export default createTaskList;
