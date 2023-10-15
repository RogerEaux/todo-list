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
  body.appendChild(createSide());
  body.appendChild(createMain());
  body.appendChild(createFooter());
};

export default createContent;
