import { compareAsc } from 'date-fns';

const createProject = (ID, title) => {
  let projectID = ID;
  let projectTitle = title;
  const projectTasks = [];

  const sortTasksByDate = () => {
    projectTasks.sort((a, b) => compareAsc(a.dueDate, b.dueDate));
  };

  const addTask = (task) => {
    projectTasks.push(task);
    sortTasksByDate();
  };

  const removeTask = (task) => {
    projectTasks.splice(projectTasks.indexOf(task), 1);
  };

  return {
    get ID() {
      return projectID;
    },

    set ID(ID) {
      projectID = ID;
    },

    get title() {
      return projectTitle;
    },

    set title(title) {
      projectTitle = title;
    },

    get tasks() {
      return projectTasks;
    },

    addTask,

    removeTask,

    sortTasksByDate,
  };
};

export default createProject;
