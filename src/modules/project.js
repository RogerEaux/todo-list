import createTodo from './todo';

const createProject = (name) => {
  let projectName = name;
  const projectTodos = [
    createTodo('Smile', "Don't forget to smile :)", 'Today', 0),
  ];

  const addTodo = (todo) => {
    projectTodos.push(todo);
  };

  return {
    get name() {
      return projectName;
    },

    set name(name) {
      projectName = name;
    },

    get todos() {
      return projectTodos;
    },

    addTodo,
  };
};

export default createProject;
