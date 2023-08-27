const createTop = () => {
  const top = document.createElement('header');

  return top;
};

const createSide = () => {
  const side = document.createElement('nav');

  return side;
};

const createMain = () => {
  const main = document.createElement('main');

  return main;
};

const createContent = () => {
  const body = document.querySelector('body');

  body.appendChild(createTop());
  body.appendChild(createSide());
  body.appendChild(createMain());
};

export default createContent;
