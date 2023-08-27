import todo from './todo';

const todos = [];

todos.push(todo.createTodo('A', 'B', 2, 1));

console.log(todos[0]);
todos[0].checkTodo();
console.log(todos[0]);
